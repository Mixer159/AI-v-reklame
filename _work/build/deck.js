// Builds the PPTX from slides.js (main talk) and appendix.js, writes speaker
// notes, and logs which sources and visuals each slide uses (out/usage.json).
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pptxgen = require('pptxgenjs');
const lib = require('./lib');
const { S } = require('./sources');
const { V } = require('./visuals');
const SK = require('./sketches');
const { MAIN } = require('./slides');
const { APPX } = require('./appendix');
const DATA = require('./data');
const TIMING = require('./timing');

const { T, ROOT } = lib;
T.accentText = 'B4532F'; // darker clay for text on white (contrast >= 4.5:1)
const OUT = path.join(__dirname, 'out');
const CACHE = path.join(__dirname, 'cache');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

// Embedded copies: long edge <= 2200 px, JPEG unless the source has transparency.
async function embedCopy(file) {
  let src = lib.abs(file);
  if (!fs.existsSync(src)) {
    // Missing input (e.g. a render still running): use a visible grey stand-in.
    console.warn('MISSING', file);
    src = path.join(CACHE, '_missing.png');
    if (!fs.existsSync(src)) await sharp({ create: { width: 1024, height: 1024, channels: 3, background: '#d0d3d8' } }).png().toFile(src);
  }
  const m = await sharp(src).metadata();
  const hasAlpha = m.hasAlpha && m.channels === 4 && !/\.jpe?g$/i.test(src);
  const name = src.replace(ROOT + '/', '').replace(/[\/ ]/g, '__').replace(/\.(png|jpe?g|webp)$/i, '') + (hasAlpha ? '.png' : '.jpg');
  const out = path.join(CACHE, name);
  if (!fs.existsSync(out)) {
    let img = sharp(src).rotate().resize({ width: 2200, height: 2200, fit: 'inside', withoutEnlargement: true });
    img = hasAlpha ? img.png() : img.flatten({ background: '#ffffff' }).jpeg({ quality: 88, mozjpeg: true });
    await img.toFile(out);
  }
  return out;
}

const usage = [];

function makeCtx(pres, slideNo, rec) {
  const c = {
    T,
    sk: SK,
    data: DATA.lines,
    title: (s, t, o) => lib.title(s, t, o),
    text: (s, t, x, y, w, h, o = {}) => lib.text(s, t, x, y, w, h, o),
    rule: (s, x1, y1, x2, y2) => lib.rule(s, x1, y1, x2, y2),
    prov: (s, kind, detail, x, y, w, o) => {
      rec.prov.push(kind);
      lib.prov(s, kind, detail, x, y, w, o);
    },
    img: async (s, key, box, o = {}) => {
      const v = V[key];
      if (!v) throw new Error(`Unknown visual ${key} on slide ${slideNo}`);
      rec.visuals.push(key);
      const file = await embedCopy(v.file);
      const m = await sharp(file).metadata();
      const r = m.width / m.height;
      let placed;
      if ((o.mode ?? 'contain') === 'cover') {
        const opts = { path: file, x: box.x, y: box.y, w: box.w, h: box.h, altText: v.depicts, sizing: { type: 'cover', w: box.w, h: box.h } };
        if (o.placeholder) opts.placeholder = o.placeholder;
        s.addImage(opts);
        placed = { ...box };
      } else {
        let w = box.w;
        let h = box.w / r;
        if (h > box.h) { h = box.h; w = box.h * r; }
        const ax = o.alignX ?? 'center';
        const x = ax === 'left' ? box.x : ax === 'right' ? box.x + box.w - w : box.x + (box.w - w) / 2;
        const y = o.alignY === 'bottom' ? box.y + box.h - h : box.y;
        s.addImage({ path: file, x, y, w, h, altText: v.depicts });
        placed = { x, y, w, h };
      }
      if (o.border) {
        s.addShape('rect', { x: placed.x, y: placed.y, w: placed.w, h: placed.h, fill: { type: 'none' }, line: { color: 'FFFFFF', width: 2.5 } });
      }
      return placed;
    },
    sketch: async (s, name, box) => {
      rec.visuals.push(`sketch:${name}`);
      s.addImage({ path: path.join(SK.OUT, `${name}.png`), ...box, altText: 'Vlastní skica' });
    },
    video: async (s, rel, posterKey, box) => {
      const v = V[posterKey];
      rec.visuals.push(posterKey);
      const poster = await embedCopy(v.file);
      const m = await sharp(poster).metadata();
      const r = m.width / m.height;
      let w = box.w;
      let h = box.w / r;
      if (h > box.h) { h = box.h; w = box.h * r; }
      const buf = fs.readFileSync(poster);
      if (process.env.NO_VIDEO) { s.addImage({ path: poster, x: box.x, y: box.y, w, h, altText: v.depicts }); return; }
      s.addMedia({ type: 'video', path: lib.abs('04_Podklady/obrazky/' + rel), x: box.x, y: box.y, w, h, cover: 'image/jpeg;base64,' + buf.toString('base64') });
    },
    src: (s, keys, extra) => {
      keys.forEach((k) => { if (!S[k]) throw new Error(`Unknown source ${k}`); rec.sources.push(k); });
      const marks = keys.filter((k) => S[k].type !== 'own').map((k) => S[k].short);
      const parts = [];
      if (extra) parts.push(extra);
      if (marks.length) parts.push(`Zdroje: ${marks.join('; ')}`);
      lib.source(s, parts.join(' '));
    },
    chartEnterprises: (s, box) => {
      const d = DATA.enterprises;
      s.addChart(pres.charts.BAR, [
        { name: 'EU', labels: d.years, values: d.eu },
        { name: 'Česko', labels: d.years, values: d.cz },
      ], {
        ...box, barDir: 'col', barGrouping: 'clustered', barGapWidthPct: 60,
        chartColors: ['A3A8B0', T.accent],
        showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '0', dataLabelFontSize: 13, dataLabelColor: T.ink, dataLabelFontFace: T.body,
        showLegend: true, legendPos: 't', legendFontSize: 13, legendFontFace: T.body, legendColor: T.ink,
        catAxisLabelColor: T.ink, catAxisLabelFontSize: 14, catAxisLabelFontFace: T.body, catAxisLineShow: true, catAxisLineColor: T.rule,
        valAxisHidden: false, valAxisMinVal: 0, valAxisMaxVal: 25, valAxisMajorUnit: 5, valAxisLabelFontSize: 12, valAxisLabelColor: T.ink2, valAxisLabelFormatCode: '0" %"',
        valGridLine: { color: 'E4E6EA', size: 0.75 }, catGridLine: { style: 'none' }, valAxisLineShow: false,
      });
      rec.charts.push('firmy-ai');
    },
    chartOsworld: (s, box) => {
      const d = DATA.osworld;
      s.addChart(pres.charts.SCATTER, [
        { name: 'X', values: d.x },
        { name: 'OSWorld (původní)', values: d.orig },
        { name: 'OSWorld-Verified', values: d.verified },
        { name: 'Lidé v původní studii (72 %)', values: d.human },
      ], {
        ...box, lineSize: 0, lineDataSymbol: 'circle', lineDataSymbolSize: 10,
        chartColors: ['3E4148', T.accent, '3E4148'],
        showLegend: true, legendPos: 't', legendFontSize: 12, legendFontFace: T.body, legendColor: T.ink,
        valAxisMinVal: 0, valAxisMaxVal: 100, valAxisMajorUnit: 20, valAxisLabelFormatCode: '0" %"', valAxisLabelFontSize: 12, valAxisLabelColor: T.ink2,
        catAxisMinVal: 2024, catAxisMaxVal: 2027, catAxisMajorUnit: 1, catAxisLabelFormatCode: '0', catAxisLabelFontSize: 12, catAxisLabelColor: T.ink2,
        valGridLine: { color: 'E4E6EA', size: 0.75 }, catGridLine: { style: 'none' },
      });
      rec.charts.push('osworld');
    },
  };
  return c;
}

async function build() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';
  pres.author = 'Umělá inteligence v reklamě';
  pres.title = 'Umělá inteligence v reklamě';
  pres.theme = { headFontFace: T.head, bodyFontFace: T.body };
  // Three replaceable picture frames (slide 23 and the photo template).
  pres.defineSlideMaster({
    title: 'FOTO3',
    background: { color: T.bg },
    objects: [0.6, 4.85, 9.1].map((x, i) => ({
      placeholder: { options: { name: `foto${i + 1}`, type: 'pic', x, y: 1.5, w: 3.63, h: 3.0 }, text: 'Vložte fotku' },
    })),
  });

  let n = 0;
  let clock = 0;
  const plan = TIMING.plan(MAIN);
  let all = [...MAIN.map((x) => ({ ...x, part: 'main' })), ...APPX.map((x) => ({ ...x, part: 'appx' }))];
  if (process.env.ONLY) {
    // Debug: build only slides a-b (1-based), e.g. ONLY=1-12.
    const [a, b] = process.env.ONLY.split('-').map(Number);
    all = all.slice(a - 1, b);
  }
  for (const spec of all) {
    n += 1;
    const s = spec.master ? pres.addSlide({ masterName: spec.master }) : pres.addSlide();
    s.background = { color: T.bg };
    const rec = { n, id: spec.id, name: spec.name, part: spec.part, sources: [], visuals: [], prov: [], charts: [] };
    const c = makeCtx(pres, n, rec);
    c.spec = spec;
    await spec.build(s, c);
    if (n > 1) lib.pageNum(s, spec.part === 'appx' ? `P${n - MAIN.length}` : n);
    if (spec.part === 'main') {
      const t = plan.find((x) => x.id === spec.id);
      rec.start = t.start;
      rec.end = t.end;
      rec.dur = t.dur;
      clock = t.end;
      const notes = [`${n}. ${spec.title}  |  ${t.dur} s  |  ${TIMING.mmss(t.start)} až ${TIMING.mmss(t.end)}`, '', ...spec.say, '', 'Opěrné body:', ...spec.points.map((p) => `- ${p}`)];
      if (spec.cue) notes.push('', `Pokyn: ${spec.cue}`);
      s.addNotes(notes.join('\n'));
    } else if (spec.notes) {
      s.addNotes(spec.notes);
    }
    rec.sources = [...new Set(rec.sources)];
    rec.visuals = [...new Set(rec.visuals)];
    usage.push(rec);
  }
  const file = path.join(OUT, process.env.OUTNAME || 'Umela-inteligence-v-reklame.pptx');
  await pres.writeFile({ fileName: file });
  fs.writeFileSync(path.join(OUT, 'usage.json'), JSON.stringify({ totalMainSeconds: clock, slides: usage }, null, 2));
  console.log('written', file, 'main seconds', clock);
}

build().catch((e) => { console.error(e); process.exit(1); });
