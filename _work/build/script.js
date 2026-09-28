// Builds the speaker script (DOCX) from the same slide data as the deck.
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType,
  ShadingType, BorderStyle, AlignmentType, LevelFormat, PageBreak, Footer, PageNumber, TabStopType,
} = require('docx');
const { MAIN } = require('./slides');
const { S, TYPE_LABEL } = require('./sources');
const TIMING = require('./timing');

const OUT = path.join(__dirname, 'out');
const plan = TIMING.plan(MAIN);
const INK = '1B1C1F';
const INK2 = '3E4148';
const ACCENT = 'B4532F';
const HEAD = 'Georgia';
const BODY = 'Arial';

// Places where one presenter can hand over to the next. Names are not assigned.
const SECTIONS = [
  { from: 1, name: 'Úvod' },
  { from: 3, name: 'Jak se AI vyvíjela a co dnes umí' },
  { from: 11, name: 'Co AI v reklamě dělá' },
  { from: 17, name: 'Agenti' },
  { from: 19, name: 'Virtuální tváře' },
  { from: 20, name: 'Jak výstupy posuzovat' },
  { from: 24, name: 'Závěr' },
];
const sectionAt = (n) => SECTIONS.find((x) => x.from === n);
const sectionOf = (n) => [...SECTIONS].reverse().find((x) => x.from <= n);

const p = (text, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 120, before: o.before ?? 0, line: o.line ?? 300 },
  alignment: o.align,
  keepNext: o.keepNext,
  children: [new TextRun({ text, font: o.font ?? BODY, size: (o.size ?? 11) * 2, bold: o.bold, italics: o.italic, color: o.color ?? INK })],
});
const runs = (parts, o = {}) => new Paragraph({
  spacing: { after: o.after ?? 120, line: o.line ?? 300 },
  keepNext: o.keepNext,
  children: parts.map(([t, st = {}]) => new TextRun({ text: t, font: BODY, size: (st.size ?? o.size ?? 11) * 2, bold: st.bold, color: st.color ?? INK })),
});
const bullet = (text) => new Paragraph({
  numbering: { reference: 'dots', level: 0 },
  spacing: { after: 60, line: 276 },
  children: [new TextRun({ text, font: BODY, size: 21, color: INK })],
});
const h1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 240, after: 160 }, children: [new TextRun({ text, font: HEAD, bold: true, size: 36, color: INK })] });
const h2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true, spacing: { before: 360, after: 80 }, children: [new TextRun({ text, font: HEAD, bold: true, size: 28, color: INK })] });
const label = (text) => p(text, { size: 9.5, bold: true, color: INK2, after: 40, keepNext: true });

const cellBorder = { style: BorderStyle.SINGLE, size: 4, color: 'C9CCD2' };
function table(rows, widths, headerFill = 'F3F4F6') {
  const total = widths.reduce((a, b) => a + b, 0);
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: rows.map((r, i) => new TableRow({
      tableHeader: i === 0,
      children: r.map((t, j) => new TableCell({
        width: { size: widths[j], type: WidthType.DXA },
        borders: { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder },
        shading: i === 0 ? { type: ShadingType.CLEAR, color: 'auto', fill: headerFill } : undefined,
        margins: { top: 60, bottom: 60, left: 90, right: 90 },
        children: [new Paragraph({ children: [new TextRun({ text: String(t), font: BODY, size: 19, bold: i === 0, color: INK })] })],
      })),
    })),
  });
}

const words = plan.reduce((a, x) => a + x.words, 0);
const speak = plan.reduce((a, x) => a + x.speak, 0);
const pauses = plan.reduce((a, x) => a + x.pause, 0);
const total = plan[plan.length - 1].end;
const dec = (x) => x.toFixed(1).replace('.', ',');
const mm = (sec) => `${Math.floor(sec / 60)} min ${sec % 60} s`;

const body = [];
body.push(p('Umělá inteligence v reklamě', { font: HEAD, size: 30, bold: true, after: 80 }));
body.push(p('Řečnický scénář k prezentaci', { size: 14, color: INK2, after: 240 }));
body.push(runs([['Délka: ', { bold: true }], [`24 slidů, plán ${TIMING.mmss(total)} min včetně ukázek, hlasování a přechodů, bez diskuse`]]));
body.push(runs([['Stav rešerše: ', { bold: true }], ['22. 9. 2026']]));
body.push(runs([['Soubory: ', { bold: true }], ['Umela-inteligence-v-reklame.pptx (poznámky řečníka obsahují stejný text) a PDF. Příloha P1 až P13 se nepromítá.']]));

body.push(h2('Jak scénář používat'));
[
  'Text k přednesu je psaný pro mluvené slovo. Při zkoušce ho přečtěte nahlas a upravte si ho do vlastních slov.',
  'Opěrné body se hodí na kartičky nebo do režimu přednášejícího v PowerPointu.',
  'Místa vhodná pro předání slova dalšímu přednášejícímu jsou označená u začátku každé části. Počet a pořadí přednášejících si určete sami.',
  'Časy jsou plán, ne změřená zkouška. Předpoklady jsou níže.',
].forEach((t) => body.push(bullet(t)));

body.push(h2('Časový odhad a jeho předpoklady'));
[
  `Text k přednesu má ${words} slov. Při tempu ${TIMING.WPM} slov za minutu to je asi ${mm(speak)} mluvení.`,
  `K tomu jsou započtené pauzy na prohlížení obrázků, reakci publika, hlasování a videa: celkem ${mm(pauses)}.`,
  `Každý slide má navíc ${TIMING.TRANSITION} s na přechod a délky jsou zaokrouhlené nahoru na 5 s. Rezerva ze zaokrouhlení je asi 1 minuta.`,
  'Tempo 110 slov za minutu je předpoklad pro klidný přednes laickému publiku, ne změřená hodnota. Skutečná zkouška se stopkami neproběhla.',
  `Při tempu 120 slov za minutu se vystoupení zkrátí asi o ${dec(words / TIMING.WPM - words / 120)} minuty, při 100 slovech za minutu prodlouží asi o ${dec(words / 100 - words / TIMING.WPM)} minuty.`,
  'Když čas utíká: zkraťte slide 9 (stejná tvář) a 18 (graf agentů) na jednu větu a u slidu 10 pusťte jen pravé video.',
].forEach((t) => body.push(bullet(t)));

body.push(h2('Přehled slidů a času'));
body.push(table([
  ['Č.', 'Slide', 'Část', 'Délka', 'Průběžně'],
  ...plan.map((x) => {
    const spec = MAIN[x.n - 1];
    return [String(x.n), spec.title, sectionOf(x.n).name, `${x.dur} s`, `${TIMING.mmss(x.start)} až ${TIMING.mmss(x.end)}`];
  }),
], [560, 4300, 2100, 900, 1500]));

body.push(new Paragraph({ children: [new PageBreak()] }));

for (const x of plan) {
  const spec = MAIN[x.n - 1];
  const sec = sectionAt(x.n);
  if (sec) {
    body.push(p(`Část: ${sec.name}${x.n > 1 ? '. Vhodné místo pro předání slova.' : ''}`, { size: 10, bold: true, color: ACCENT, before: 240, after: 0, keepNext: true }));
  }
  body.push(h2(`${x.n}  ${spec.title}`));
  body.push(runs([
    ['Délka ', { color: INK2 }], [`${x.dur} s`, { bold: true }],
    ['   ·   průběžně ', { color: INK2 }], [`${TIMING.mmss(x.start)} až ${TIMING.mmss(x.end)}`, { bold: true }],
    ['   ·   z toho pauza ', { color: INK2 }], [`${x.pause} s`, { bold: true }],
  ], { size: 10, after: 160, keepNext: true }));
  body.push(label('TEXT K PŘEDNESU'));
  spec.say.forEach((t) => body.push(p(t, { size: 12, line: 340, after: 140 })));
  body.push(label('OPĚRNÉ BODY'));
  spec.points.forEach((t) => body.push(bullet(t)));
  if (spec.cue) {
    body.push(runs([['Pokyn: ', { bold: true, color: ACCENT }], [spec.cue]], { size: 10.5, after: 80 }));
  }
  const src = (spec.sources || []).filter((k) => S[k]);
  if (src.length) body.push(runs([['Zdroje: ', { bold: true, color: INK2 }], [src.map((k) => S[k].short).join('; '), { color: INK2 }]], { size: 9.5, after: 120 }));
}

body.push(new Paragraph({ children: [new PageBreak()] }));
body.push(h2('Před vystoupením'));
[
  'Na promítacím počítači otevřete PPTX v PowerPointu a vyzkoušejte obě videa na slidu 10, pravé má zvuk. PDF videa neobsahuje, jen statické snímky.',
  'Písma v prezentaci jsou Georgia a Arial. Jsou ve Windows i v macOS.',
  'Vlastní fotky reklam vložte na slide 23: klepnout na obrázek, Změnit obrázek, Ze souboru. Rámeček obrázek ořízne. Prázdná šablona je v příloze P13.',
  'Názvy modelů a čísla platí k 22. 9. 2026. Pokud vystupujete později, ověřte hlavně slidy 12, 13, 17 a 18.',
  'U aktivity na slidu 20 domluvte, kdo počítá ruce a kdo mluví.',
].forEach((t) => body.push(bullet(t)));

body.push(h2('Zdroje podle slidů'));
for (const x of plan) {
  const spec = MAIN[x.n - 1];
  const src = (spec.sources || []).filter((k) => S[k]);
  if (!src.length) continue;
  body.push(p(`${x.n}  ${spec.title}`, { bold: true, size: 10.5, after: 40, keepNext: true }));
  src.forEach((k) => {
    const s = S[k];
    body.push(p(`${s.pub}: ${s.title}. ${s.date}. ${s.url || 'vlastní tvorba'} (${TYPE_LABEL[s.type]})`, { size: 9.5, color: INK2, after: 40 }));
  });
}
body.push(p('Úplný přehled zdrojů a vizuálů s licencemi je v souboru 03_Zdroje/Zdroje-a-vizualy.xlsx.', { size: 10, before: 160 }));

const doc = new Document({
  creator: 'Umělá inteligence v reklamě',
  title: 'Umělá inteligence v reklamě: řečnický scénář',
  styles: { default: { document: { run: { font: BODY, size: 22, color: INK } } } },
  numbering: { config: [{ reference: 'dots', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 260 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1247, right: 1247 } } },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ children: ['Řečnický scénář · ', PageNumber.CURRENT], font: BODY, size: 16, color: INK2 })] })] }),
    },
    children: body,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const f = path.join(OUT, 'Umela-inteligence-v-reklame_scenar.docx');
  fs.writeFileSync(f, buf);
  console.log('written', f, 'words', words, 'speak', speak, 'pauses', pauses, 'total', total);
});
