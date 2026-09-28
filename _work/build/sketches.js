// Builds every hand-drawn sketch used in the deck. Each function draws on a
// canvas whose size matches the slide area it will occupy (inches), so native
// text labels can be positioned with the same numbers.
const path = require('path');
const { Sketch, INK, ACCENT, HIST, PANEL } = require('./sketch');

const OUT = path.resolve(__dirname, '../../04_Podklady/obrazky/skici');

// Four eras of AI, one small explanatory drawing per era. Canvas 12 x 2.1 in,
// era i is centred at x = 1.5 + i * 3.
const TL = { w: 12, h: 2.1, cx: (i) => 1.5 + i * 3 };
async function timeline() {
  const s = new Sketch(TL.w, TL.h, 11);
  // 1) Rules: if/then flowchart.
  let c = TL.cx(0);
  s.poly([[c, 0.15], [c + 0.45, 0.55], [c, 0.95], [c - 0.45, 0.55]]);
  s.arrow(c - 0.25, 0.8, c - 0.5, 1.35);
  s.arrow(c + 0.25, 0.8, c + 0.5, 1.35);
  s.rect(c - 0.85, 1.4, 0.6, 0.42);
  s.rect(c + 0.25, 1.4, 0.6, 0.42, { fill: ACCENT });
  // 2) Prediction: points, a fitted curve and one predicted point.
  c = TL.cx(1);
  const x0 = c - 0.95;
  s.line(x0, 1.85, x0 + 1.9, 1.85, { strokeWidth: 1.6 });
  s.line(x0, 1.85, x0, 0.1, { strokeWidth: 1.6 });
  const pts = [[0.25, 1.6], [0.45, 1.5], [0.6, 1.62], [0.8, 1.3], [0.95, 1.35], [1.15, 1.05], [1.3, 0.95], [1.5, 0.75]];
  for (const [px, py] of pts) s.circle(x0 + px, py, 0.09, { fill: INK, fillStyle: 'solid', strokeWidth: 1 });
  s.curve([[x0 + 0.15, 1.7], [x0 + 0.7, 1.45], [x0 + 1.2, 1.0], [x0 + 1.75, 0.45]], { stroke: ACCENT, strokeWidth: 2.6 });
  s.circle(x0 + 1.75, 0.45, 0.22, { stroke: ACCENT, strokeWidth: 2.6 });
  // 3) Creation: lines of text become a picture.
  c = TL.cx(2);
  const x2 = c - 1.25;
  for (let i = 0; i < 4; i++) s.line(x2, 0.45 + i * 0.28, x2 + (i === 3 ? 0.45 : 0.75), 0.45 + i * 0.28, { strokeWidth: 2 });
  s.arrow(x2 + 0.95, 0.9, x2 + 1.35, 0.9);
  s.rect(x2 + 1.5, 0.2, 1.0, 1.4);
  s.circle(x2 + 2.2, 0.5, 0.28, { fill: ACCENT, fillStyle: 'solid', stroke: ACCENT });
  s.path([[x2 + 1.5, 1.45], [x2 + 1.85, 0.95], [x2 + 2.1, 1.25], [x2 + 2.3, 1.05], [x2 + 2.5, 1.35]]);
  // 4) Agents: a window with a form, a cursor and a done check.
  c = TL.cx(3);
  const x3 = c - 1.0;
  s.rect(x3, 0.15, 1.9, 1.6);
  s.line(x3, 0.42, x3 + 1.9, 0.42, { strokeWidth: 1.6 });
  s.rect(x3 + 0.2, 0.62, 1.1, 0.22, { strokeWidth: 1.6 });
  s.rect(x3 + 0.2, 0.98, 1.1, 0.22, { strokeWidth: 1.6 });
  s.rect(x3 + 0.2, 1.34, 0.6, 0.24, { fill: ACCENT, strokeWidth: 1.8 });
  s.poly([[x3 + 0.72, 1.42], [x3 + 0.72, 1.92], [x3 + 0.84, 1.8], [x3 + 0.95, 2.02], [x3 + 1.03, 1.97], [x3 + 0.93, 1.76], [x3 + 1.08, 1.74]], { fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 1.8 });
  s.check(x3 + 1.45, 0.62, 0.32, { stroke: ACCENT });
  return s.save(OUT, 'skica-01-vyvoj-ai');
}

// Two hand-drawn arrows for a three-column input -> AI -> output layout.
// Canvas 12.13 x 0.6 in (placed at the content margin), arrows at x 2.55-3.45 and 7.25-8.15.
async function twoArrows() {
  const s = new Sketch(12.13, 0.6, 91);
  s.arrow(2.6, 0.3, 3.45, 0.3, { strokeWidth: 2.6, head: 0.16 });
  s.arrow(7.3, 0.3, 8.15, 0.3, { strokeWidth: 2.6, head: 0.16 });
  return s.save(OUT, 'skica-06-sipky');
}

// Six stations of campaign work. Canvas spans the content width (12.13 x 1.5 in);
// station i is centred at 0.9 + i * 2.066 in from the canvas left edge.
const PIPE = { w: 12.13, h: 1.5, cx: (i) => 0.9 + i * 2.066 };
async function pipeline() {
  const s = new Sketch(PIPE.w, PIPE.h, 31);
  const c = PIPE.cx;
  // 1 research: bars under a magnifier
  let x = c(0);
  [[-0.55, 0.5], [-0.3, 0.8], [-0.05, 0.35]].forEach(([dx, hh]) => s.rect(x + dx, 1.3 - hh, 0.18, hh, { strokeWidth: 1.8 }));
  s.circle(x + 0.25, 0.55, 0.58, { strokeWidth: 2.4 });
  s.line(x + 0.46, 0.77, x + 0.68, 1.05, { strokeWidth: 3.2 });
  // 2 strategy and copy: a sheet with lines and a pen
  x = c(1);
  s.rect(x - 0.5, 0.12, 0.8, 1.15);
  [0.35, 0.55, 0.75, 0.95].forEach((yy, i) => s.line(x - 0.36, yy, x + (i === 3 ? -0.05 : 0.16), yy, { strokeWidth: 1.6 }));
  s.poly([[x + 0.42, 1.2], [x + 0.72, 0.3], [x + 0.84, 0.35], [x + 0.54, 1.25]], { fill: '#D97757', strokeWidth: 1.8 });
  // 3 image, video, voice
  x = c(2);
  s.rect(x - 0.78, 0.25, 0.62, 0.8);
  s.circle(x - 0.36, 0.45, 0.16, { fill: '#D97757', fillStyle: 'solid', stroke: '#D97757' });
  s.path([[x - 0.78, 0.98], [x - 0.58, 0.72], [x - 0.42, 0.88], [x - 0.16, 0.66]], { strokeWidth: 1.6 });
  s.poly([[x - 0.02, 0.4], [x - 0.02, 0.9], [x + 0.33, 0.65]], { strokeWidth: 2 });
  s.curve([[x + 0.5, 0.45], [x + 0.58, 0.65], [x + 0.5, 0.85]], { strokeWidth: 1.8 });
  s.curve([[x + 0.64, 0.35], [x + 0.76, 0.65], [x + 0.64, 0.95]], { strokeWidth: 1.8 });
  // 4 variants and localisation: three formats
  x = c(3);
  s.rect(x - 0.72, 0.5, 0.5, 0.5);
  s.rect(x - 0.1, 0.2, 0.38, 0.8, { fill: '#D97757' });
  s.rect(x + 0.38, 0.62, 0.36, 0.38);
  // 5 targeting and budget: a bid gauge (half circle, ticks, needle)
  x = c(4);
  const R = 0.62;
  const arc = [];
  for (let k = 0; k <= 12; k++) { const a = Math.PI - (k / 12) * Math.PI; arc.push([x + R * Math.cos(a), 1.1 - R * Math.sin(a)]); }
  s.curve(arc, { strokeWidth: 2.2 });
  for (let k = 1; k < 6; k++) { const a = Math.PI - (k / 6) * Math.PI; s.line(x + (R - 0.14) * Math.cos(a), 1.1 - (R - 0.14) * Math.sin(a), x + R * Math.cos(a), 1.1 - R * Math.sin(a), { strokeWidth: 1.6 }); }
  s.line(x - R - 0.05, 1.1, x + R + 0.05, 1.1, { strokeWidth: 1.8 });
  s.line(x, 1.1, x + 0.3, 0.64, { stroke: '#D97757', strokeWidth: 3 });
  s.circle(x, 1.1, 0.1, { fill: '#1B1C1F', fillStyle: 'solid', strokeWidth: 1 });
  // 6 evaluation and CRM: rising line chart and a database cylinder
  x = c(5);
  s.line(x - 0.8, 1.2, x + 0.05, 1.2, { strokeWidth: 1.6 });
  s.line(x - 0.8, 1.2, x - 0.8, 0.2, { strokeWidth: 1.6 });
  s.path([[x - 0.72, 1.05], [x - 0.5, 0.85], [x - 0.3, 0.95], [x - 0.05, 0.45]], { stroke: '#D97757', strokeWidth: 2.6 });
  s.ellipse(x + 0.45, 0.35, 0.5, 0.18);
  s.line(x + 0.2, 0.35, x + 0.2, 1.1);
  s.line(x + 0.7, 0.35, x + 0.7, 1.1);
  s.curve([[x + 0.2, 1.1], [x + 0.45, 1.2], [x + 0.7, 1.1]]);
  // arrows between stations
  for (let i = 0; i < 5; i++) s.arrow(c(i) + 0.9, 0.72, c(i + 1) - 0.92, 0.72, { strokeWidth: 2, head: 0.13 });
  return s.save(OUT, 'skica-02-sest-mist');
}

// Brackets showing which kind of AI covers which stations. Canvas 12.13 x 1.9 in.
// Rows at y = 0.35, 0.95, 1.55 (relative to canvas top).
const BANDS = { w: 12.13, h: 1.9, rows: [0.35, 0.95, 1.55] };
async function bands(spans) {
  const s = new Sketch(BANDS.w, BANDS.h, 41);
  spans.forEach(([a, b], r) => {
    const y = BANDS.rows[r];
    const x1 = PIPE.cx(a) - 0.95;
    const x2 = PIPE.cx(b) + 0.95;
    const col = r === 1 ? '#D97757' : '#1B1C1F';
    s.line(x1, y, x2, y, { stroke: col, strokeWidth: 2.6 });
    s.line(x1, y - 0.12, x1, y + 0.12, { stroke: col, strokeWidth: 2.2 });
    s.line(x2, y - 0.12, x2, y + 0.12, { stroke: col, strokeWidth: 2.2 });
  });
  return s.save(OUT, 'skica-02b-typy-ai');
}

// Model inside an application, tools plugged into the application. Canvas 6.4 x 4.5 in.
const STACK = { w: 6.4, h: 4.5, app: { x: 0.1, y: 0.25, w: 3.9, h: 3.9 }, model: { cx: 2.05, cy: 2.35, d: 2.1 }, tool: { x: 4.6, w: 1.75, h: 0.56, ys: [0.3, 1.1, 1.9, 2.7, 3.5] } };
async function stack() {
  const s = new Sketch(STACK.w, STACK.h, 51);
  const { app, model, tool } = STACK;
  s.rect(app.x, app.y, app.w, app.h, { strokeWidth: 2.4 });
  s.circle(model.cx, model.cy, model.d, { fill: '#F7E1D8', fillStyle: 'solid', strokeWidth: 2.4 });
  tool.ys.forEach((y) => {
    s.rect(tool.x, y, tool.w, tool.h, { strokeWidth: 2 });
    s.line(app.x + app.w, y + tool.h / 2, tool.x, y + tool.h / 2, { strokeWidth: 2 });
    s.circle(app.x + app.w, y + tool.h / 2, 0.12, { fill: '#1B1C1F', fillStyle: 'solid', strokeWidth: 1 });
  });
  return s.save(OUT, 'skica-03-model-aplikace-nastroje');
}

// Agent flow: six steps, connector style shows how the step is reached.
// solid = API or application, dashed = UI control, dotted = automated workflow.
const FLOW = { w: 12.13, h: 2.1, box: { w: 1.5, h: 1.05, y: 0.85 }, x: (i) => 0.08 + i * 2.1, check: [1, 4] };
async function flow(styles) {
  const s = new Sketch(FLOW.w, FLOW.h, 61);
  const { box } = FLOW;
  for (let i = 0; i < 6; i++) s.rect(FLOW.x(i), box.y, box.w, box.h, { strokeWidth: 2.2 });
  styles.forEach((st, i) => {
    const x1 = FLOW.x(i) + box.w + 0.05;
    const x2 = FLOW.x(i + 1) - 0.05;
    const y = box.y + box.h / 2;
    const o = { strokeWidth: 2.2, head: 0.12 };
    if (st === 'dashed') o.dash = '9 7';
    if (st === 'dotted') o.dash = '1 7';
    s.arrow(x1, y, x2, y, o);
  });
  FLOW.check.forEach((i) => {
    const cx = FLOW.x(i) + box.w / 2;
    s.circle(cx, 0.38, 0.56, { stroke: '#D97757', strokeWidth: 2.6 });
    s.check(cx - 0.15, 0.3, 0.3, { stroke: '#D97757', strokeWidth: 3 });
  });
  return s.save(OUT, 'skica-04-agent-tok');
}

// Legend samples for the three connector styles. Canvas 1.0 x 1.2 in, rows at 0.2 / 0.6 / 1.0.
async function flowLegend() {
  const s = new Sketch(1.0, 1.2, 71);
  [['solid', 0.2], ['dashed', 0.6], ['dotted', 1.0]].forEach(([st, y]) => {
    const o = { strokeWidth: 2.2, head: 0.1 };
    if (st === 'dashed') o.dash = '10 7';
    if (st === 'dotted') o.dash = '2 6';
    s.arrow(0.05, y, 0.9, y, o);
  });
  return s.save(OUT, 'skica-04b-agent-legenda');
}

// Evidence strength: from appearance-based suspicion to documented origin.
// Canvas 12.13 x 1.2 in, markers at x = 1.1, 4.1, 7.6, 10.9.
const LADDER = { w: 12.13, h: 1.2, xs: [1.1, 4.1, 7.6, 10.9] };
async function ladder() {
  const s = new Sketch(LADDER.w, LADDER.h, 81);
  s.arrow(0.2, 0.6, 11.95, 0.6, { strokeWidth: 2.6, head: 0.22 });
  LADDER.xs.forEach((x, i) => {
    const strong = i >= 2;
    s.circle(x, 0.6, 0.42, strong ? { fill: '#D97757', fillStyle: 'solid', stroke: '#D97757' } : { fill: '#FFFFFF', fillStyle: 'solid', strokeWidth: 2.4 });
  });
  return s.save(OUT, 'skica-05-podezreni-dolozeni');
}

module.exports = { timeline, twoArrows, pipeline, bands, stack, flow, flowLegend, ladder, TL, PIPE, BANDS, STACK, FLOW, LADDER, OUT };

if (require.main === module) {
  (async () => {
    console.log(await timeline());
    console.log(await twoArrows());
    console.log(await pipeline());
    console.log(await bands([[0, 3], [2, 5], [4, 5]]));
    console.log(await stack());
    console.log(await flow(['solid', 'solid', 'dashed', 'solid', 'dotted']));
    console.log(await flowLegend());
    console.log(await ladder());
  })();
}
