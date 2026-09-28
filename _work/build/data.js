// Chart data read from the editable CSV files in 04_Podklady/grafy, plus
// result lines that depend on the local SDXL run.
const fs = require('fs');
const path = require('path');

const G = path.resolve(__dirname, '../../04_Podklady/grafy');

// Minimal CSV parser with quoted-field support.
function csv(file) {
  const rows = [];
  const text = fs.readFileSync(path.join(G, file), 'utf8').trim();
  for (const line of text.split('\n')) {
    const out = [];
    let cur = '';
    let q = false;
    for (const ch of line) {
      if (ch === '"') q = !q;
      else if (ch === ',' && !q) { out.push(cur); cur = ''; }
      else cur += ch;
    }
    out.push(cur);
    rows.push(out);
  }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}

const ent = csv('graf-1_firmy-pouzivajici-ai.csv');
const years = [...new Set(ent.map((r) => r.rok))];
const pick = (geo) => years.map((y) => Number(ent.find((r) => r.rok === y && r.uzemi === geo).hodnota_procent));

// OSWorld as decimal years so the x axis keeps real time spacing.
const dec = (d) => {
  const t = new Date(d + 'T00:00:00Z');
  const y = t.getUTCFullYear();
  const start = Date.UTC(y, 0, 1);
  const len = Date.UTC(y + 1, 0, 1) - start;
  return y + (t - start) / len;
};
const ow = csv('graf-2_osworld-vysledky.csv');
const pts = ow.filter((r) => r.rada !== 'Lidé v původní studii');
const human = Number(ow.find((r) => r.rada === 'Lidé v původní studii').hodnota_procent);
const x = [...pts.map((r) => +dec(r.datum).toFixed(3)), 2024.05, 2026.7];
const col = (name) => [...pts.map((r) => (r.rada === name ? Number(r.hodnota_procent) : null)), null, null];
const osworld = {
  x,
  orig: col('OSWorld (původní)'),
  verified: col('OSWorld-Verified'),
  human: [...pts.map(() => null), human, human],
};

// Filled in after the SDXL run finishes (see _work/tests/sdxl/log.json).
const lines = {
  t2SdxlLine: 'Nadpis jako změť písmen ve 4 ze 4 pokusů',
  t3SdxlLine: 'Jízda a káva zároveň v 0 ze 4 pokusů',
};

module.exports = { enterprises: { years, eu: pick('EU27'), cz: pick('CZ') }, osworld, lines, csv };
