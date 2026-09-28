// Build the shorter talk without modifying the original presentation.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const PptxGenJS = require('pptxgenjs');
const { SLIDES, EXTRA_SOURCES } = require('./revised-content');
const { S: originalSources } = require('./sources');
const { V } = require('./visuals');
const { cz } = require('./lib');
const { enterprises } = require('./data');

const ROOT = path.resolve(__dirname, '../..');
const BUILD = path.join(ROOT, '_work/revision');
const FILE = 'Umela-inteligence-v-reklame_zjednodusena';
const SOURCES = { ...originalSources, ...EXTRA_SOURCES };
const C = { ink: '1B1C1F', muted: '525761', light: 'F3F4F6', line: 'CDD1D8', accent: 'B4532F', clay: 'D97757', dark: '111113', white: 'FFFFFF' };
const W = 13.333333, H = 7.5, M = 0.62;
const usage = [];
let record;

for (const dir of [BUILD, path.join(BUILD, 'images'), path.join(ROOT, '01_Prezentace'), path.join(ROOT, '02_Scenar'), path.join(ROOT, '03_Zdroje')]) fs.mkdirSync(dir, { recursive: true });

function text(slide, value, x, y, w, h, options = {}) {
  const { size = 22, color = C.ink, face = 'Arial', bold = false, ...rest } = options;
  record.words.push(String(value));
  slide.addText(cz(value), { x, y, w, h, fontFace: face, fontSize: size, color, bold, margin: 0, breakLine: false, valign: 'mid', lineSpacingMultiple: 1.05, isTextBox: true, fit: 'resize', lang: 'cs-CZ', ...rest });
}
function title(slide, value, options = {}) { text(slide, value, M, 0.43, W - M * 2, 0.9, { face: 'Georgia', bold: true, size: 32, ...options }); }
function line(slide, x, y, w, color = C.line, width = 1) { slide.addShape('line', { x, y, w, h: 0, line: { color, width, beginArrowType: 'none', endArrowType: 'none' } }); }
function footer(slide, value, n, dark = false) {
  if (value) text(slide, value, M, 7.04, 11.5, 0.25, { size: 10, color: dark ? 'CED0D5' : C.muted });
  text(slide, String(n).padStart(2, '0'), 12.08, 7.04, 0.6, 0.25, { size: 10, color: dark ? 'CED0D5' : C.muted, align: 'right' });
}

async function embedded(key) {
  const visual = V[key];
  if (!visual) throw new Error(`Unknown visual: ${key}`);
  const original = path.join(ROOT, visual.file);
  if (!fs.existsSync(original)) throw new Error(`Missing visual: ${original}`);
  const out = path.join(BUILD, 'images', `${key}.jpg`);
  await sharp(original).rotate().resize({ width: 2000, height: 1600, fit: 'inside', withoutEnlargement: true }).flatten({ background: '#ffffff' }).jpeg({ quality: 93 }).toFile(out);
  return out;
}

async function picture(slide, key, box) {
  const file = await embedded(key);
  const meta = await sharp(file).metadata();
  const scale = Math.min(box.w / meta.width, box.h / meta.height);
  const w = meta.width * scale, h = meta.height * scale;
  const pos = { x: box.x + (box.w - w) / 2, y: box.y + (box.h - h) / 2, w, h };
  slide.addImage({ path: file, ...pos, altText: V[key].depicts });
  record.visuals.push(key);
  return { ...pos, file };
}

async function pair(slide, left, right, labels) {
  const xs = [M, 6.89];
  for (let i = 0; i < 2; i++) {
    text(slide, labels[i], xs[i], 1.42, 5.8, 0.35, { size: 19, bold: true, align: 'center', color: i ? C.accent : C.muted });
    await picture(slide, [left, right][i], { x: xs[i], y: 1.95, w: 5.8, h: 4.65 });
  }
}

async function media(slide, key, rel, box, staticOnly) {
  const file = await embedded(key);
  const meta = await sharp(file).metadata();
  const scale = Math.min(box.w / meta.width, box.h / meta.height);
  const w = meta.width * scale, h = meta.height * scale;
  const pos = { x: box.x + (box.w - w) / 2, y: box.y + (box.h - h) / 2, w, h };
  if (staticOnly) slide.addImage({ path: file, ...pos, altText: V[key].depicts });
  else {
    const poster = await sharp(file).png().toBuffer();
    slide.addMedia({ type: 'video', path: path.join(ROOT, '04_Podklady/obrazky/upravene', rel), ...pos, cover: 'image/png;base64,' + poster.toString('base64') });
  }
  record.visuals.push(key);
}

function speakerNotes(spec, n) {
  const refs = spec.sources.map(key => `${SOURCES[key].title}\n${SOURCES[key].url || '04_Podklady/obrazky/vlastni-ukazky/PROTOKOL.md'}`).join('\n\n');
  const visuals = (spec.visuals || []).map(key => `${key}: ${V[key].owner}. ${V[key].license}. Soubor: ${V[key].file}`).join('\n');
  return `${n}. ${spec.title.replaceAll('\n', ' ')}\nOrientační čas: ${spec.seconds} s\n\n${spec.say.join('\n\n')}\n\nPOKYN PRO ŘEČNÍKA\n${spec.cue}\n\nZDROJE\n${refs || 'Vlastní struktura a doporučení pro výklad.'}\n\nPŮVOD OBRÁZKŮ\n${visuals || 'Editovatelná sazba a vlastní schéma.'}\n\nRevize prezentace: 28. 9. 2026. Převzaté vlastní testy vznikly 22. 9. 2026.`;
}

async function build(staticOnly = false) {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Maxim Kudela';
  pptx.subject = 'Stručná prezentace o vývoji a využití AI v reklamě';
  pptx.title = 'Umělá inteligence v reklamě';
  pptx.company = '';
  pptx.lang = 'cs-CZ';
  pptx.theme = { headFontFace: 'Georgia', bodyFontFace: 'Arial', lang: 'cs-CZ' };

  for (const [index, spec] of SLIDES.entries()) {
    const n = index + 1;
    const s = pptx.addSlide();
    s.background = { color: C.white };
    record = { slide: n, id: spec.id, words: [], sources: spec.sources, visuals: [] };
    let foot = '', dark = false;

    if (!['cover', 'pope', 'close'].includes(spec.id)) title(s, spec.title);

    switch (spec.id) {
      case 'cover': {
        text(s, 'Umělá inteligence\nv reklamě', M, 1.43, 12.0, 2.35, { face: 'Georgia', size: 57, bold: true });
        line(s, M, 4.28, 1.08, C.clay, 3);
        text(s, 'Od prvních experimentů k dnešním kampaním', M, 4.68, 11.3, 0.6, { size: 25, color: C.muted });
        foot = 'Září 2026';
        break;
      }
      case 'history': {
        const milestones = [['1956', 'Vznik oboru AI'], ['1997', 'Deep Blue poráží\nKasparova'], ['2016', 'Google zavádí\nSmart Bidding'], ['2022', 'DALL-E 2\na ChatGPT']];
        line(s, M + 0.11, 3.42, 9.24, C.line, 2);
        milestones.forEach(([year, label], i) => {
          const x = M + i * 3.08;
          text(s, year, x, 2.12, 2.87, 0.83, { face: 'Georgia', size: 41, bold: true, color: i === 3 ? C.accent : C.ink });
          s.addShape('ellipse', { x: x + 0.03, y: 3.34, w: 0.16, h: 0.16, fill: { color: i === 3 ? C.clay : C.ink }, line: { transparency: 100 } });
          text(s, label, x, 3.92, 2.78, 1.01, { size: 23, valign: 'top' });
        });
        foot = 'Vybrané milníky. Dartmouth, IBM, Google, OpenAI.';
        break;
      }
      case 'product':
        await pair(s, 't1_sdxl', 't1_now', ['SDXL 1.0 (2023)', 'OpenAI (2026)']);
        foot = 'Vlastní ukázka. Oba nástroje spuštěny 22. 9. 2026. Výběr ze 4 pokusů, bez retuše.';
        break;
      case 'lettering':
        await pair(s, 't2_sdxl', 't2_now', ['SDXL 1.0 (2023)', 'OpenAI (2026)']);
        foot = 'Vlastní ukázka. Oba nástroje spuštěny 22. 9. 2026. Výběr ze 4 pokusů, bez retuše.';
        break;
      case 'variation':
        await pair(s, 't1_now', 'd1', ['Původní obrázek', 'Zimní varianta']);
        foot = 'Vlastní AI ukázka fiktivní značky ZÁTOKA. Jedna úprava podle reference, bez retuše.';
        break;
      case 'video': {
        text(s, '2023', M, 1.48, 5.8, 0.45, { size: 24, bold: true, align: 'center' });
        text(s, '2025', 6.89, 1.48, 5.8, 0.45, { size: 24, bold: true, align: 'center', color: C.accent });
        await media(s, 'ws23', 'will-smith-2023-modelscope.mp4', { x: M, y: 2.08, w: 5.8, h: 4.18 }, staticOnly);
        await media(s, 'ws25', 'will-smith-2025-veo3.mp4', { x: 6.89, y: 2.08, w: 5.8, h: 4.18 }, staticOnly);
        text(s, 'Obě videa vytvořila AI', M, 6.48, 12.08, 0.3, { size: 16, color: C.muted, align: 'center' });
        foot = 'ModelScope / u/chaindrop (2023). Veo 3 / Javi Lopez (2025), PetaPixel.';
        break;
      }
      case 'pope': {
        dark = true; s.background = { color: C.dark };
        text(s, 'Papežova bunda,\nkterá neexistovala', M, 1.32, 6.6, 1.95, { face: 'Georgia', size: 38, bold: true, color: C.white });
        text(s, '2023', M, 4.15, 4.7, 0.82, { face: 'Georgia', size: 52, color: C.clay });
        text(s, 'Virální obrázek z Midjourney', M, 5.12, 6.25, 0.54, { size: 21, color: 'D9DBE0' });
        await picture(s, 'pope', { x: 7.48, y: 0.58, w: 5.2, h: 6.0 });
        foot = 'AI obraz papeže Františka. u/trippy_art_special, březen 2023. The Verge.';
        break;
      }
      case 'uses': {
        const items = [['Příprava', 'rešerše a nápady'], ['Tvorba', 'text, obraz, video'], ['Doručení', 'publikum a nabídky'], ['Vyhodnocení', 'shrnutí výsledků']];
        for (let i = 0; i < items.length; i++) {
          const x = M + i * 3.08;
          text(s, String(i + 1).padStart(2, '0'), x, 2.32, 2.84, 0.6, { size: 27, color: C.accent });
          line(s, x, 3.22, 2.64);
          text(s, items[i][0], x, 3.59, 2.84, 0.58, { face: 'Georgia', bold: true, size: 23 });
          text(s, items[i][1], x, 4.39, 2.8, 0.8, { size: 20, color: C.muted, valign: 'top' });
        }
        foot = 'Příklady využití. Konkrétní možnosti závisejí na nástroji a dostupných datech.';
        break;
      }
      case 'adoption': {
        const pos = enterprises.years.indexOf('2025');
        const values = [enterprises.cz[pos], enterprises.eu[pos]];
        s.addChart(pptx.ChartType.bar, [{ name: 'Podniky používající AI', labels: ['Česko', 'EU'], values }], {
          x: 1.02, y: 1.75, w: 11.25, h: 4.82,
          showTitle: false, showLegend: false,
          chartColors: [C.clay, 'B6BBC4'], varyColors: true,
          barDir: 'col', barGrouping: 'clustered', gapSize: 125,
          showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '0" %"',
          dataLabelColor: C.ink, dataLabelFontFace: 'Arial', dataLabelFontSize: 35,
          catAxisLabelFontFace: 'Arial', catAxisLabelFontSize: 23, catAxisLabelColor: C.ink,
          catAxisLineShow: true, catAxisLineColor: C.line, catAxisMajorTickMark: 'none', catAxisMinorTickMark: 'none',
          valAxisMinVal: 0, valAxisMaxVal: 25, valAxisMajorUnit: 5, valAxisHidden: true, valAxisLineShow: false,
          valAxisLabelFontFace: 'Arial', valAxisLabelFontSize: 16,
          catGridLine: { style: 'none' }, valGridLine: { style: 'none' },
          showBorder: false, showCatName: false, showSerName: false,
          showMarker: false,
        });
        foot = 'Eurostat, 2025. Podniky s 10+ zaměstnanci ve sledovaných odvětvích. Zaokrouhleno.';
        break;
      }
      case 'heinz': {
        await picture(s, 'heinz', { x: M, y: 1.68, w: 8.65, h: 4.74 });
        text(s, '„Nakresli kečup“', 9.62, 2.39, 3.06, 1.22, { face: 'Georgia', size: 29, bold: true });
        text(s, 'Heinz, 2022', 9.62, 4.34, 3.06, 0.49, { size: 22, color: C.accent });
        foot = 'Skutečná kampaň A.I. Ketchup. Heinz / Rethink. Vizuál přes Adweek, popis Applied Arts.';
        break;
      }
      case 'coke': {
        await picture(s, 'coke24', { x: M, y: 1.81, w: 8.43, h: 4.74 });
        text(s, '40+', 9.55, 2.2, 3.11, 1.35, { face: 'Arial', bold: true, size: 78, color: C.accent });
        text(s, 'tvůrců', 9.61, 3.76, 3.02, 0.69, { size: 29 });
        text(s, 'podle studia Silverside', 9.61, 4.59, 3.02, 0.86, { size: 16, color: C.muted });
        foot = 'Skutečná kampaň Coca-Cola, Vánoce 2024. Údaj o týmu uvádí studio Silverside.';
        break;
      }
      case 'table': {
        const rows = [
          [{ text: 'AI navrhne', options: { bold: true, color: C.white, fill: C.ink } }, { text: 'Člověk ověří', options: { bold: true, color: C.white, fill: C.accent } }],
          ['Text', 'Fakta a nabídku'],
          ['Obrázek', 'Produkt a značku'],
          ['Kampaň', 'Cíl a rozpočet'],
        ];
        s.addTable(rows, { x: 1.12, y: 2.02, w: 11.1, h: 3.87, colW: [5.1, 6.0], rowH: 0.96,
          fontFace: 'Arial', fontSize: 26, color: C.ink, fill: C.white, valign: 'mid',
          margin: [14, 23, 14, 23], border: { type: 'solid', pt: 0.7, color: C.line },
          autoPage: false, autoPageRepeatHeader: false, verbose: false,
        });
        record.words.push(...rows.flat().map(v => typeof v === 'string' ? v : v.text));
        foot = 'Doporučená kontrola při přípravě reklamy.';
        break;
      }
      case 'invented': {
        await picture(s, 't1_now3_label', { x: M, y: 1.67, w: 5.25, h: 4.96 });
        text(s, '„Bez konzervantov“', 6.54, 2.39, 6.08, 1.18, { face: 'Georgia', size: 34, bold: true });
        text(s, 'Tohle v zadání nebylo', 6.54, 4.32, 6.08, 0.6, { size: 26, color: C.accent });
        foot = 'Vlastní ukázka, 22. 9. 2026. Detail jiného výstupu: zadání T1, pokus 3.';
        break;
      }
      case 'agents': {
        const labels = ['Zadání', 'Návrh', 'Kontrola', 'Spuštění'];
        labels.forEach((label, i) => {
          const x = M + 3.08 * i;
          text(s, String(i + 1).padStart(2, '0'), x, 2.4, 2.8, 0.55, { size: 25, color: C.muted });
          text(s, label, x, 3.23, 2.8, 0.62, { face: 'Georgia', size: 27, bold: true, color: i === 2 ? C.accent : C.ink });
          line(s, x, 4.18, 2.6, i === 2 ? C.accent : C.line, i === 2 ? 3 : 1);
        });
        text(s, 'Schválení a rozpočet', 6.78, 4.64, 3.0, 0.92, { size: 21, color: C.accent, valign: 'top' });
        foot = 'Ilustrační pracovní postup s kontrolou člověkem. Možnosti závisí na připojených nástrojích.';
        break;
      }
      case 'quiz':
      case 'reveal': {
        const reveal = spec.id === 'reveal';
        for (let i = 0; i < 2; i++) {
          const x = i ? 6.89 : M;
          text(s, reveal ? ['A: AI spot', 'B: Fotografie'][i] : ['A', 'B'][i], x, 1.53, 5.8, 0.47, { size: 26, bold: true, color: reveal && i === 0 ? C.accent : C.ink });
          await picture(s, ['rohlik', 'car'][i], { x, y: 2.16, w: 5.8, h: 3.63 });
          if (reveal) text(s, ['Rohlík, 2025', 'Praha, 2022'][i], x, 6.0, 5.8, 0.44, { size: 19, color: C.muted });
        }
        foot = reveal ? 'A: Rohlík / CzechCrunch, Médiář. B: JiriMatejicek, CC BY-SA 3.0, rozmazané SPZ.' : 'Zdroje a řešení na následujícím slidu.';
        break;
      }
      case 'close': {
        dark = true; s.background = { color: C.dark };
        text(s, spec.title, M, 1.49, 12.0, 2.55, { face: 'Georgia', size: 44, bold: true, color: C.white });
        line(s, M, 4.66, 1.08, C.clay, 3);
        text(s, 'Co vás na ukázkách nejvíc překvapilo?', M, 5.09, 11.6, 0.71, { size: 27, color: 'D9DBE0' });
        break;
      }
      default: throw new Error(`No layout for ${spec.id}`);
    }
    footer(s, foot, n, dark);
    s.addNotes(speakerNotes(spec, n));
    if (!staticOnly) usage.push({ ...record, text: record.words.join('\n'), wordCount: record.words.join(' ').split(/\s+/u).filter(Boolean).length });
  }
  const out = path.join(BUILD, staticOnly ? `${FILE}_staticke.pptx` : `${FILE}.pptx`);
  await pptx.writeFile({ fileName: out });
  console.log(out);
}

function writeCompanions() {
  let elapsed = 0;
  const time = seconds => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  const script = ['# Umělá inteligence v reklamě: zkrácený scénář', '', 'Verze z 28. 9. 2026. Odpovídá souboru `Umela-inteligence-v-reklame_zjednodusena.pptx`.', '', `17 slidů. Orientační plán ${time(SLIDES.reduce((n, s) => n + s.seconds, 0))} včetně prohlížení, videí a hlasování, bez závěrečné diskuse. Časy jsou plán, nikoli měření nácviku.`, '', 'Zdroje jsou také v poznámkách PowerPointu a v `03_Zdroje/Zdroje_zjednodusena.md`.', ''];
  for (const [i, s] of SLIDES.entries()) {
    script.push(`## ${i + 1}. ${s.title.replaceAll('\n', ' ')}`, '', `${time(elapsed)}–${time(elapsed + s.seconds)}`, '', ...s.say.flatMap(p => [p, '']), `**Při promítání:** ${s.cue}`, '');
    elapsed += s.seconds;
  }
  fs.writeFileSync(path.join(ROOT, '02_Scenar', 'Umela-inteligence-v-reklame_scenar_zjednodusena.md'), script.join('\n'));

  const register = ['# Zdroje zjednodušené prezentace', '', 'Revize 28. 9. 2026. Číslování platí pro novou 17slidovou verzi. Původní 37slidová verze má samostatný registr `Zdroje-a-vizualy.md`.', '', '## Co se změnilo', '', 'Historie předchází porovnání obrázků. Hlavní část má dva generátorové testy, jednu úpravu prostředí a jednu dvojici videí. Na plátně zůstává jediný graf se dvěma hodnotami a tabulka se třemi řádky. Podrobné modelové tabulky, graf OSWorld, rozpočtová srovnání, blok virtuálních influencerů, právní přehled a původní přílohy se nepromítají.', '', '## Rozsah ověření a nejistoty', '', '- Vlastní ukázky přebíráme z místních výstupů a protokolu z 22. 9. 2026. Nebyly znovu generovány. SDXL je model z roku 2023 spuštěný v roce 2026. U rozhraní OpenAI není přesná verze generátoru doložena, proto ji neuvádíme.', '- Čtyři pokusy a výběr jsou praktická demonstrace. Nejde o obecný benchmark ani o shodné technické podmínky obou modelů.', '- U videí srovnáváme historické zveřejněné ukázky stejného námětu, nikoli kontrolovaný experiment.', '- Údaj 40+ tvůrců Coca-Coly je potvrzený na webu Silverside, ale nepodařilo se ověřit ho nezávislým auditem. Ve slidu i poznámkách je připsaný studiu.', '- Graf využívá původní CSV Eurostatu, znovu porovnané s jeho API dne 28. 9. 2026. Rok 2025: Česko 17,60 %, EU 19,95 %. Odpověď API je uložená v `_work/revision/eurostat-2025.json`. Jde o podniky s alespoň 10 zaměstnanci v NACE C až J, L až N a 95.1, ne o všechny firmy ani jen o využití v reklamě. Přímé otevření původního PDF ČSÚ ve webovém nástroji selhalo; údaj ověřilo API Eurostatu.', '- Vyřazená tvrzení z původní dlouhé verze nejsou touto revizí znovu ověřena. Zdroje a staré výstupy zůstávají pro případné dohledání.', '', '## Zdroje podle slidů', ''];
  for (const [i, s] of SLIDES.entries()) {
    register.push(`### ${i + 1}. ${s.title.replaceAll('\n', ' ')}`, '');
    if (!s.sources.length) register.push('Vlastní struktura výkladu nebo pracovní doporučení.', '');
    for (const key of s.sources) {
      const r = SOURCES[key];
      register.push(`- ${r.url ? `[${r.title}](${r.url})` : r.title}. ${r.pub}.`);
    }
    if (s.visuals?.length) {
      register.push('', 'Obrázky:');
      for (const key of s.visuals) {
        const v = V[key];
        register.push(`- ${v.depicts}. ${v.owner}. ${v.license}. Soubor: \`${v.file}\`.`);
      }
    }
    register.push('');
  }
  register.push('## Fotografie a licence', '', 'Fotografie auta od JiriMatejicek: [původní soubor](https://commons.wikimedia.org/wiki/File:Praha_Trebesin_Zverinova_auto_Rohlik.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Na použité kopii jsou rozmazané registrační značky. Upravený obrázek je dále pod CC BY-SA 3.0; licence se tím automaticky nevztahuje na celou prezentaci.', '', 'Stejné obrázky se opakují pouze tam, kde je to nutné k porovnání původního stavu s úpravou nebo při odhalení hlasování.', '');
  fs.writeFileSync(path.join(ROOT, '03_Zdroje', 'Zdroje_zjednodusena.md'), register.join('\n'));
  fs.writeFileSync(path.join(BUILD, 'usage.json'), JSON.stringify(usage, null, 2));
}

(async () => {
  await build();
  await build(true);
  writeCompanions();
})().catch(error => { console.error(error); process.exitCode = 1; });
