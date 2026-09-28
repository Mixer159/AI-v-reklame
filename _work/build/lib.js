// Shared design tokens and slide helpers for the deck (LAYOUT_WIDE, inches).
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '../..');
const T = {
  W: 13.333,
  H: 7.5,
  M: 0.6, // outer margin
  bg: 'FFFFFF',
  panel: 'F3F4F6',
  ink: '1B1C1F',
  ink2: '3E4148',
  note: '5F636B',
  rule: 'C9CCD2',
  accent: 'D97757',
  hist: '4C6A92',
  head: 'Georgia',
  body: 'Arial',
};

// Provenance kinds shown under every image so real ads, period samples and
// our own generated demos can never be confused.
const PROV = {
  real: { color: T.ink, label: 'Skutečná reklama' },
  hist: { color: T.hist, label: 'Dobová ukázka' },
  own: { color: T.accent, label: 'Vlastní ukázka' },
  photo: { color: T.ink2, label: 'Fotografie' },
  shot: { color: T.ink2, label: 'Snímek obrazovky' },
};

const imgMeta = {};
async function meta(file) {
  if (!imgMeta[file]) imgMeta[file] = await sharp(file).metadata();
  return imgMeta[file];
}

function abs(p) {
  return path.isAbsolute(p) ? p : path.join(ROOT, p);
}

// Slide titles stay on one line: the size drops (to 26 pt at most) when a long
// title would wrap. Width estimate for Georgia Bold is about 0.53 em per character.
// Czech typography: keep numbers with their units, dates together and single-letter
// prepositions or conjunctions with the next word.
function cz(t) {
  if (typeof t !== 'string') return t;
  return t
    .replace(/(\d) (%|Kč|€|USD|l\b|mil\.|mld\.|tis\.)/g, '$1\u00A0$2')
    .replace(/(\d) (\d{3})\b/g, '$1\u00A0$2')
    .replace(/(\d{1,2}\.) (\d{1,2}\.) (\d{4})/g, '$1\u00A0$2\u00A0$3')
    .replace(/(^|[\s(„])([vkszouaiVKSZOUAI]) /g, '$1$2\u00A0');
}

function titleSize(text, w, size = 34) {
  let s = size;
  while (s > 26 && text.length * s * 0.53 / 72 > w) s -= 1;
  return s;
}

function title(slide, text, o = {}) {
  const w = o.w ?? T.W - 2 * T.M;
  slide.addText(cz(text), {
    x: T.M, y: o.y ?? 0.42, w, h: o.h ?? 1.0,
    fontFace: T.head, fontSize: o.size ?? titleSize(text, w), bold: true, color: T.ink,
    valign: 'top', margin: 0, isTextBox: true, fit: 'none',
  });
}

function text(slide, t, x, y, w, h, o = {}) {
  slide.addText(cz(t), {
    x, y, w, h, fontFace: o.face ?? T.body, fontSize: o.size ?? 16, color: o.color ?? T.ink,
    bold: o.bold ?? false, italic: o.italic ?? false, align: o.align ?? 'left', valign: o.valign ?? 'top',
    margin: o.margin ?? 0, lineSpacingMultiple: o.lsm ?? 1.08, paraSpaceAfter: o.psa ?? 0,
    isTextBox: true, fit: 'none', charSpacing: o.cs,
  });
}

// Small source line at the bottom-left. Keeps clear of the page number.
function source(slide, t) {
  if (!t) return;
  text(slide, t, T.M, T.H - 0.52, T.W - 2 * T.M - 0.8, 0.32, { size: 10, color: T.note, valign: 'bottom' });
}

function pageNum(slide, n) {
  text(slide, String(n), T.W - T.M - 0.5, T.H - 0.52, 0.5, 0.32, { size: 10, color: T.note, align: 'right', valign: 'bottom' });
}

// Places an image inside a box. mode 'contain' keeps the whole picture,
// 'cover' fills the box and crops the overflow evenly.
async function image(slide, file, box, o = {}) {
  const f = abs(file);
  const m = await meta(f);
  const r = m.width / m.height;
  const { x, y, w, h } = box;
  const alt = o.alt || path.basename(f);
  if ((o.mode ?? 'contain') === 'cover') {
    slide.addImage({ path: f, x, y, w, h, altText: alt, sizing: { type: 'cover', w, h }, placeholder: o.placeholder });
    return { x, y, w, h };
  }
  let iw = w;
  let ih = w / r;
  if (ih > h) { ih = h; iw = h * r; }
  const ax = o.alignX ?? 'center';
  const ay = o.alignY ?? 'top';
  const ix = ax === 'left' ? x : ax === 'right' ? x + w - iw : x + (w - iw) / 2;
  const iy = ay === 'top' ? y : ay === 'bottom' ? y + h - ih : y + (h - ih) / 2;
  slide.addImage({ path: f, x: ix, y: iy, w: iw, h: ih, altText: alt });
  return { x: ix, y: iy, w: iw, h: ih };
}

// Provenance caption: colored square + kind + detail, e.g.
// ■ Vlastní ukázka · GPT Image (Codex) · 22. 9. 2026
function prov(slide, kind, detail, x, y, w, o = {}) {
  const k = PROV[kind];
  slide.addShape('rect', { x, y: y + 0.055, w: 0.11, h: 0.11, fill: { color: k.color }, line: { color: k.color, width: 0 } });
  slide.addText(
    [
      { text: (o.label ?? k.label), options: { bold: true, color: T.ink } },
      ...(detail ? [{ text: cz(` · ${detail}`), options: { color: T.ink2 } }] : []),
    ],
    { x: x + 0.2, y, w: w - 0.2, h: o.h ?? 0.26, fontFace: T.body, fontSize: o.size ?? 11, margin: 0, valign: 'top', isTextBox: true, fit: 'none' }
  );
}

function rule(slide, x1, y1, x2, y2, color = T.rule, width = 1) {
  slide.addShape('line', { x: x1, y: y1, w: x2 - x1, h: y2 - y1, line: { color, width } });
}

module.exports = { T, PROV, ROOT, abs, meta, title, text, source, pageNum, image, prov, rule, cz };
