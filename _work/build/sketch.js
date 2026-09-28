// Hand-drawn sketch helper. Draws rough.js primitives on a canvas measured in
// inches (same units as the slide), writes an editable SVG and a transparent PNG.
// Labels are NOT drawn here: slides place them as native PowerPoint text so they
// stay editable. Fixed seeds keep every render identical.
const fs = require('fs');
const path = require('path');
const rough = require('roughjs');
const sharp = require('sharp');

const INK = '#1B1C1F';
const ACCENT = '#D97757';
const HIST = '#4C6A92';
const PANEL = '#E9EBEF';
const PX = 96; // SVG units per inch

class Sketch {
  constructor(wIn, hIn, seed = 7) {
    this.w = wIn;
    this.h = hIn;
    this.gen = rough.generator();
    this.seed = seed;
    this.parts = [];
  }
  opts(o = {}) {
    this.seed += 1;
    return {
      roughness: 1.1,
      bowing: 0.8,
      stroke: INK,
      strokeWidth: 2.2,
      seed: this.seed,
      fillStyle: 'hachure',
      hachureGap: 7,
      fillWeight: 1.6,
      ...o,
    };
  }
  push(drawable) {
    const dash = drawable.options.dash ? ` stroke-dasharray="${drawable.options.dash}"` : '';
    for (const p of this.gen.toPaths(drawable)) {
      this.parts.push(
        `<path d="${p.d}" stroke="${p.stroke}" stroke-width="${p.strokeWidth}" fill="${p.fill || 'none'}" stroke-linecap="round" stroke-linejoin="round"${dash}/>`
      );
    }
    return this;
  }
  line(x1, y1, x2, y2, o) {
    return this.push(this.gen.line(x1 * PX, y1 * PX, x2 * PX, y2 * PX, this.opts(o)));
  }
  rect(x, y, w, h, o) {
    return this.push(this.gen.rectangle(x * PX, y * PX, w * PX, h * PX, this.opts(o)));
  }
  circle(cx, cy, d, o) {
    return this.push(this.gen.circle(cx * PX, cy * PX, d * PX, this.opts(o)));
  }
  ellipse(cx, cy, w, h, o) {
    return this.push(this.gen.ellipse(cx * PX, cy * PX, w * PX, h * PX, this.opts(o)));
  }
  poly(points, o) {
    return this.push(this.gen.polygon(points.map(([x, y]) => [x * PX, y * PX]), this.opts(o)));
  }
  path(points, o) {
    return this.push(this.gen.linearPath(points.map(([x, y]) => [x * PX, y * PX]), this.opts(o)));
  }
  curve(points, o) {
    return this.push(this.gen.curve(points.map(([x, y]) => [x * PX, y * PX]), this.opts(o)));
  }
  // Straight arrow with an open hand-drawn head.
  arrow(x1, y1, x2, y2, o = {}) {
    this.line(x1, y1, x2, y2, o);
    const a = Math.atan2(y2 - y1, x2 - x1);
    const L = o.head || 0.16;
    for (const s of [-1, 1]) {
      const b = a + Math.PI + s * 0.45;
      this.line(x2, y2, x2 + L * Math.cos(b), y2 + L * Math.sin(b), { ...o, roughness: 0.6 });
    }
    return this;
  }
  // Curved arrow through a middle control point.
  curvedArrow(p1, pm, p2, o = {}) {
    this.curve([p1, pm, p2], o);
    const a = Math.atan2(p2[1] - pm[1], p2[0] - pm[0]);
    const L = o.head || 0.16;
    for (const s of [-1, 1]) {
      const b = a + Math.PI + s * 0.45;
      this.line(p2[0], p2[1], p2[0] + L * Math.cos(b), p2[1] + L * Math.sin(b), { ...o, roughness: 0.6 });
    }
    return this;
  }
  check(x, y, s = 0.3, o = {}) {
    return this.path([[x, y + s * 0.5], [x + s * 0.35, y + s * 0.85], [x + s, y]], { strokeWidth: 3, ...o });
  }
  svg() {
    const W = this.w * PX;
    const H = this.h * PX;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${this.parts.join('')}</svg>`;
  }
  // Writes name.svg and name.png (transparent, ~250 dpi) and returns the PNG path.
  async save(dir, name) {
    fs.mkdirSync(dir, { recursive: true });
    const svg = this.svg();
    const svgPath = path.join(dir, `${name}.svg`);
    const pngPath = path.join(dir, `${name}.png`);
    fs.writeFileSync(svgPath, svg);
    await sharp(Buffer.from(svg), { density: 250 }).png().toFile(pngPath);
    return pngPath;
  }
}

module.exports = { Sketch, INK, ACCENT, HIST, PANEL };
