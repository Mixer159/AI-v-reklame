// Slide content, layout and speaker script in one place, so the deck, the script
// document and the source register always share numbering and timing.
// Each slide: id, name (short name used in the script), pause (seconds of silence
// pauses), pause (seconds of silence for looking, voting or video inside dur),
// say (paragraphs spoken aloud), points (short cues), cue (action or transition),
// build(s, c) draws the slide. Appendix slides have appendix: true and no timing.

const MAIN = [];
const APPX = [];
const add = (spec) => (spec.appendix ? APPX : MAIN).push(spec);

// ---------------------------------------------------------------- 1 Title
add({
  title: 'Umělá inteligence v reklamě',
  id: 'titul', name: 'Úvod', pause: 5,
  say: [
    'Dobrý den. Dnes vám ukážeme, jak umělá inteligence mění reklamu: co dnes umí, jak se díky ní jinak dělají kampaně a jak její výstupy poznat a posoudit.',
    'Celým výkladem nás provede limonáda ZÁTOKA. Tu jsme si vymysleli a všechno, co kolem ní uvidíte, vytvořila AI přímo pro tuto přednášku.',
  ],
  points: ['Představit téma a průvodní příklad ZÁTOKA', 'ZÁTOKA je fiktivní, vizuály jsou vlastní ukázky'],
  cue: 'Počkat, až se sál ztiší. Na slidu nic neukazovat.',
  build: async (s, c) => {
    c.text(s, 'Umělá inteligence v reklamě', c.T.M, 1.55, 6.9, 2.4, { face: c.T.head, size: 50, bold: true, lsm: 1.0 });
    c.text(s, 'Co dnes umí, jak mění práci na kampaních a jak poznat její výstupy', c.T.M, 4.1, 6.3, 1.0, { size: 20, color: c.T.ink2 });
    c.text(s, 'Stav k 22. září 2026', c.T.M, 6.25, 5, 0.4, { size: 14 });
    const r = await c.img(s, 't1_now', { x: 7.75, y: 0.55, w: 4.98, h: 5.98 }, { alignX: 'right' });
    c.prov(s, 'own', 'fiktivní značka, obrázek vytvořila AI', r.x, r.y + r.h + 0.1, 5.2);
  },
});

// ---------------------------------------------------------------- 2 Hook
add({
  title: 'Tuhle reklamu vytvořila AI. A přes 40 lidí.',
  id: 'coca-cola', name: 'Reklama, kterou vytvořila AI', pause: 6,
  say: [
    'Začneme reklamou, kterou možná znáte. Coca-Cola v listopadu 2024 předělala svou vánoční klasiku s červenými kamiony. Tentokrát bez kamery. Obraz vznikl pomocí AI nástrojů.',
    'Kolik lidí na tom podle vás pracovalo?',
    'Studio Silverside uvádí přes čtyřicet tvůrců, deset tisíc vygenerovaných snímků a dva měsíce práce místo víc než roku. Jde o údaje samotného studia. Reklama přitom sklidila ostrou kritiku od grafiků a animátorů.',
    'A to je celé naše téma. AI výrobu zrychluje a zlevňuje. O tom, co a jak se udělá, ale pořád rozhodují lidé. A lidé také posuzují výsledek.',
  ],
  points: ['Coca-Cola, listopad 2024, obraz z AI nástrojů, ne z kamery', 'Otázka do sálu: kolik lidí?', '40+ tvůrců, 10 000 snímků, 2 měsíce místo 12+ (údaj studia)', 'Kritika od tvůrců', 'Téma: AI zrychluje, rozhodují lidé'],
  cue: 'Po otázce nechat 3 až 4 sekundy na odpověď z publika, pak teprve čísla.',
  sources: ['silverside', 'nbc_coke'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const r = await c.img(s, 'coke24', { x: c.T.M, y: 1.55, w: 8.3, h: 4.67 }, { alignX: 'left' });
    c.prov(s, 'real', 'Coca-Cola, listopad 2024, studio Silverside AI', r.x, r.y + r.h + 0.12, 8.3);
    const stats = [['10 000', 'vygenerovaných snímků'], ['40+', 'tvůrců'], ['2 měsíce', 'místo více než roku']];
    stats.forEach(([n, l], i) => {
      const y = 1.6 + i * 1.5;
      c.text(s, n, 9.35, y, 3.4, 0.7, { size: 36, bold: true });
      c.text(s, l, 9.35, y + 0.68, 3.4, 0.45, { size: 15, color: c.T.ink2 });
    });
    c.text(s, 'Údaje studia Silverside', 9.35, 6.05, 3.4, 0.3, { size: 12, color: c.T.ink2 });
    c.src(s, ['silverside', 'nbc_coke']);
  },
});

// ---------------------------------------------------------------- 3 Timeline
add({
  title: 'Nejdřív AI počítala. Teď tvoří a jedná.',
  id: 'vyvoj', name: 'Od pravidel k agentům', pause: 3,
  say: [
    'Umělá inteligence není novinka. Jako obor vznikla v roce 1956 na konferenci v americkém Dartmouthu. První programy fungovaly podle pravidel, která napsal člověk. Třeba: když zákazník koupí stan, nabídni mu spacák.',
    'Pak přišlo strojové učení. Program se učí z dat a odhaduje, třeba jak pravděpodobné je, že člověk na reklamu klikne. Od roku 2009 se reklamní prostor na webu draží v reálném čase a od roku 2016 nabízí Google automatické nabídky řízené strojovým učením. Tuhle AI jsme ale neviděli.',
    'Viditelnou se stala v roce 2022. Modely začaly tvořit obrázky, texty, později video a hlas.',
    'A poslední dva roky přibývají agenti. AI, která sama otevře prohlížeč, vyplní formulář nebo pošle data do jiného systému.',
  ],
  points: ['1956: pravidla psaná člověkem', '2009 aukce reklamy v reálném čase, 2016 Smart Bidding: předpověď', '2022: tvorba obsahu', 'od 2024: agenti ovládají počítač a systémy'],
  cue: 'Ukazovat postupně zleva doprava podle kreseb.',
  sources: ['dartmouth', 'adx2009', 'smartbid2016', 'chatgpt2022', 'anth_cu2024'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    await c.sketch(s, 'skica-01-vyvoj-ai', { x: 0.67, y: 1.75, w: 12, h: 2.1 });
    const cols = [
      ['Pravidla', 'od 1956', 'Člověk napíše pravidlo: když zákazník koupí stan, nabídni spacák.'],
      ['Předpověď', 'od 2009', 'Model odhadne, kdo na reklamu klikne a kolik za zobrazení nabídnout.'],
      ['Tvorba', 'od 2022', 'Z textového zadání vznikne obrázek, text, video i hlas.'],
      ['Agenti', 'od 2024', 'AI sama otevře prohlížeč, vyplní formulář a pošle data dál.'],
    ];
    cols.forEach(([h, y, t], i) => {
      const x = 0.67 + i * 3 + 0.2;
      c.text(s, h, x, 4.2, 2.7, 0.5, { face: c.T.head, size: 24, bold: true });
      c.text(s, y, x, 4.72, 2.7, 0.35, { size: 15, bold: true, color: c.T.accentText });
      c.text(s, t, x, 5.12, 2.6, 1.2, { size: 15, color: c.T.ink2 });
    });
    c.src(s, ['dartmouth', 'adx2009', 'smartbid2016', 'chatgpt2022', 'anth_cu2024']);
  },
});

// ---------------------------------------------------------------- 4 Period samples
add({
  title: 'Před třemi lety: realistické, ale s chybami',
  id: 'dobove-ukazky', name: 'Před třemi lety', pause: 10,
  say: [
    'Jak to vypadalo před třemi, čtyřmi lety? Nahoře je ukázka z výzkumné zprávy k modelu DALL-E 2 z dubna 2022. Zadání: cedule s nápisem deep learning. Model napsal třeba Deinp Lerpt.',
    'Pod tím je skutečná kampaň Heinz z léta 2022. Agentura z té chyby udělala nápad. AI dostala zadání kečup a skoro vždy nakreslila lahev, která připomíná Heinz. Jen s nesmyslným nápisem.',
    'A vlevo papež v bílé péřové bundě z března 2023 z Midjourney. Obrázek se rychle rozšířil. Při bližším pohledu ale ruka kelímek pořádně nedrží. Realistické to už bylo, text, ruce a přesný produkt ještě ne.',
  ],
  points: ['DALL-E 2, duben 2022: „Deinp Lerpt“', 'Heinz A.I. Ketchup, srpen 2022: AI jako nápad kampaně', 'Papež, Midjourney, březen 2023: realismus ano, detaily ne'],
  cue: 'Ukázat nejdřív ceduli, pak Heinz, nakonec papeže.',
  sources: ['dalle2paper', 'adweek_heinz', 'pope_reddit', 'verge_pope'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const p = await c.img(s, 'pope', { x: c.T.M, y: 1.5, w: 4.0, h: 4.98 }, { alignX: 'left' });
    c.prov(s, 'hist', 'Midjourney, březen 2023, není to fotografie', p.x, p.y + p.h + 0.1, 4.4, { h: 0.5 });
    const a = await c.img(s, 'dalle_sign', { x: 5.2, y: 1.5, w: 7.53, h: 1.9 }, { alignX: 'left' });
    c.prov(s, 'hist', 'DALL-E 2, duben 2022, zadání: cedule s nápisem „deep learning“', a.x, a.y + a.h + 0.08, 7.5);
    const b = await c.img(s, 'heinz', { x: 5.2, y: 3.72, w: 5.1, h: 2.7 }, { alignX: 'left' });
    c.prov(s, 'real', 'Heinz A.I. Ketchup, srpen 2022, vizuály z DALL-E 2', b.x, b.y + b.h + 0.08, 7.5);
    c.src(s, ['dalle2paper', 'adweek_heinz', 'pope_reddit', 'verge_pope']);
  },
});

// ---------------------------------------------------------------- 5 Same prompt: product
add({
  title: 'Stejné zadání, 2023 a dnes',
  id: 'test-produkt', name: 'Stejné zadání: produkt', pause: 10,
  say: [
    'Tohle jsme vyzkoušeli sami. Stejné zadání jsme dali modelu SDXL z července 2023 a současnému generátoru od OpenAI. Reklamní fotka limonády ZÁTOKA u jezera při západu slunce. Každý model měl čtyři pokusy a ukazujeme nejlepší podle stejných kritérií. Nic jsme neretušovali.',
    'Starý model zvládl světlo, lahev i citrony. Nápis ale zkomolil ve všech čtyřech pokusech, tady na ZÀTKA.',
    'Dnešní model napsal ZÁTOKA přesně, i s čárkou, pokaždé. Podívejte se ale na detail vpravo. Ve třech pokusech ze čtyř dopsal na etiketu slovenské texty a v jednom i tvrzení bez konzervantov. Nic z toho jsme nezadali. Na obalu skutečného výrobku by to byl problém.',
  ],
  points: ['SDXL (7/2023) a generátor OpenAI (9/2026), stejné zadání, 4 pokusy, bez retuše', '2023: nápis zkomolený 4 ze 4', '2026: nápis správně 4 ze 4', 'Ale: slovenské texty ve 3 ze 4, „bez konzervantov“ v 1 pokusu'],
  cue: 'Při větě o detailu ukázat na výřez etikety vpravo.',
  sources: ['own_img', 'sdxl'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const l = await c.img(s, 't1_sdxl', { x: c.T.M, y: 1.5, w: 4.45, h: 4.45 }, { alignX: 'left' });
    c.prov(s, 'own', 'SDXL 1.0, model z července 2023', l.x, l.y + l.h + 0.1, 4.6);
    c.text(s, 'Nápis zkomolený ve 4 ze 4 pokusů', l.x, l.y + l.h + 0.42, 4.6, 0.35, { size: 15, bold: true });
    const m = await c.img(s, 't1_now', { x: 5.3, y: 1.5, w: 3.71, h: 4.45 }, { alignX: 'left' });
    c.prov(s, 'own', 'generátor OpenAI, září 2026', m.x, m.y + m.h + 0.1, 4.0);
    c.text(s, 'Nápis správně ve 4 ze 4 pokusů', m.x, m.y + m.h + 0.42, 4.0, 0.35, { size: 15, bold: true });
    c.text(s, 'Zadání', 9.55, 1.5, 3.2, 0.3, { size: 13, bold: true, color: c.T.ink2 });
    c.text(s, 'Reklamní fotka lahve limonády s etiketou „ZÁTOKA“ u jezera při západu slunce.', 9.55, 1.8, 3.18, 0.95, { size: 14, color: c.T.ink2 });
    const d = await c.img(s, 't1_now3_label', { x: 9.55, y: 2.95, w: 2.6, h: 2.2 }, { alignX: 'left' });
    c.text(s, 'Pokus 3: slovenské texty a „bez konzervantov“, které nikdo nezadal', 9.55, d.y + d.h + 0.1, 3.18, 0.8, { size: 13, bold: true });
    c.src(s, ['own_img'], 'Vlastní test 22. 9. 2026: stejné zadání, 4 pokusy na model, výběr podle stejných kritérií, bez úprav. Protokol v příloze.');
  },
});

// ---------------------------------------------------------------- 6 Same prompt: text
add({
  title: 'Český nadpis: dřív změť písmen, dnes i s diakritikou',
  id: 'test-text', name: 'Stejné zadání: český text', pause: 8,
  say: [
    'Druhé zadání: plakát pekárny s českým nadpisem Čerstvé rohlíky každé ráno.',
    'Model z roku 2023 zvládl pečivo i světlo, ale nadpis je ve všech čtyřech pokusech změť písmen, tady třeba Cerrastvi kru. Dnešní model napsal nadpis správně ve všech čtyřech pokusech, včetně diakritiky. Zase si ale přidal vlastní slogany na tabuli, které nikdo nezadal.',
    'Pro reklamu z toho plyne jednoduché pravidlo: každé slovo v obrázku musí někdo přečíst.',
  ],
  points: ['Český nadpis s diakritikou', '2023: změť písmen 4 ze 4', '2026: správně 4 ze 4, ale přidané slogany', 'Každé slovo v obrázku musí někdo přečíst'],
  cue: '',
  sources: ['own_img'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const l = await c.img(s, 't2_sdxl', { x: c.T.M, y: 1.5, w: 4.45, h: 4.45 }, { alignX: 'left' });
    c.prov(s, 'own', 'SDXL 1.0, model z července 2023', l.x, l.y + l.h + 0.1, 4.6);
    c.text(s, c.data.t2SdxlLine, l.x, l.y + l.h + 0.42, 4.6, 0.35, { size: 15, bold: true });
    const m = await c.img(s, 't2_now', { x: 5.3, y: 1.5, w: 2.97, h: 4.45 }, { alignX: 'left' });
    c.prov(s, 'own', 'generátor OpenAI, září 2026', m.x, m.y + m.h + 0.1, 4.0);
    c.text(s, 'Nadpis správně ve 4 ze 4 pokusů', m.x, m.y + m.h + 0.42, 4.2, 0.35, { size: 15, bold: true });
    c.text(s, 'Zadání', 8.75, 1.5, 3.9, 0.3, { size: 13, bold: true, color: c.T.ink2 });
    c.text(s, 'Plakát pekárny. Nadpis „Čerstvé rohlíky každé ráno“, dole „Pekařství U Mlýna“.', 8.75, 1.8, 3.95, 0.95, { size: 14, color: c.T.ink2 });
    c.text(s, 'Co model přidal sám', 8.75, 3.05, 3.9, 0.3, { size: 13, bold: true, color: c.T.ink2 });
    c.text(s, 'Slogany na tabuli a na utěrce, ve všech čtyřech pokusech.', 8.75, 3.35, 3.95, 0.8, { size: 14, color: c.T.ink2 });
    c.src(s, ['own_img'], 'Vlastní test 22. 9. 2026: stejné zadání, 4 pokusy na model, bez úprav. Protokol v příloze.');
  },
});

// ---------------------------------------------------------------- 7 Same prompt: people
add({
  title: 'Lidé: dnes přesně podle zadání, i s cizí značkou',
  id: 'test-lide', name: 'Stejné zadání: lidé a místo', pause: 8,
  say: [
    'Třetí zadání: cyklistka ve žluté bundě jede po dlažbě Starého Města a v ruce drží kávu.',
    'Starý model vytvořil věrohodné lidi, ale zadání splnil jen napůl. V žádném ze čtyř pokusů cyklistka nejede a zároveň nedrží kávu.',
    'Dnešní model zvládl ruce, kávu, dlažbu i Týnský chrám. A přidal něco navíc: logo nextbike, skutečné služby sdílených kol, která v Praze jezdí. Ve všech čtyřech pokusech, i když jsme žádnou značku nezadali. V reklamě jiné firmy by to byl právní problém. Hlídat to musí člověk.',
  ],
  points: ['2023: věrohodní lidé, zadání jen napůl (jízda a káva ne současně)', '2026: ruce, káva, dlažba, Týnský chrám', 'Logo nextbike ve 4 ze 4 pokusech, nezadané', 'Cizí ochranná známka = riziko, hlídá člověk'],
  cue: 'Ukázat na košík s logem.',
  sources: ['own_img', 'pid_bikes'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const l = await c.img(s, 't3_sdxl', { x: c.T.M, y: 1.5, w: 4.3, h: 4.3 }, { alignX: 'left' });
    c.prov(s, 'own', 'SDXL 1.0, model z července 2023', l.x, l.y + l.h + 0.1, 4.6);
    c.text(s, c.data.t3SdxlLine, l.x, l.y + l.h + 0.42, 4.6, 0.35, { size: 15, bold: true });
    const m = await c.img(s, 't3_now', { x: 5.2, y: 1.5, w: 5.13, h: 4.3 }, { alignX: 'left' });
    c.prov(s, 'own', 'generátor OpenAI, září 2026', m.x, m.y + m.h + 0.1, 5.1);
    c.text(s, 'Logo nextbike ve 4 ze 4 pokusů, nezadané', m.x, m.y + m.h + 0.42, 5.2, 0.35, { size: 15, bold: true });
    c.text(s, 'Zadání', 10.65, 1.5, 2.1, 0.3, { size: 13, bold: true, color: c.T.ink2 });
    c.text(s, 'Cyklistka ve žluté bundě na dlažbě Starého Města, v ruce kávu. Značka nezadána.', 10.65, 1.8, 2.1, 2.2, { size: 14, color: c.T.ink2 });
    c.src(s, ['own_img', 'pid_bikes'], 'Vlastní test 22. 9. 2026: stejné zadání, 4 pokusy na model, bez úprav. Nextbike provozuje sdílená kola v Praze (PID).');
  },
});

// ---------------------------------------------------------------- 8 Controlled edits
add({
  title: 'Změnit jen to, co chceme',
  id: 'upravy', name: 'Řízené úpravy', pause: 8,
  say: [
    'Velká změna posledních dvou let jsou úpravy slovem. Dřív se s obrázkem, který se nepovedl, dalo jen začít znovu. Dnes napíšete, co změnit a co nechat.',
    'Vlevo jsme lahev přenesli do zimních hor. Etiketa zůstala stejná, i s kresbou. Uprostřed jsme plakát přeložili do němčiny a grafika zůstala. To je lokalizace pro jiný trh za minutu a půl. Vpravo jsme z fotky cyklistky odstranili cizí logo a slogany.',
    'Každá úprava byla jeden pokus a výsledek jsme dál neretušovali. Malé obrázky v rohu jsou původní verze.',
  ],
  points: ['Úprava slovem: co změnit, co nechat', 'Produkt v novém prostředí, etiketa beze změny', 'Překlad plakátu do němčiny', 'Odstranění loga', 'Vždy 1 pokus, bez retuše'],
  cue: '',
  sources: ['own_img'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const cols = [
      ['d1', 't1_now', 'Jen prostředí', 'Etiketa zůstala stejná'],
      ['d2', 't2_now', 'Jen jazyk', 'Plakát v němčině'],
      ['d4', 't3_now', 'Jen loga pryč', 'Bez nextbike a sloganů'],
    ];
    const xs = [c.T.M, 4.85, 9.1];
    for (let i = 0; i < 3; i++) {
      const [after, before, head, sub] = cols[i];
      const r = await c.img(s, after, { x: xs[i], y: 1.5, w: 3.63, h: 4.2 }, { alignX: 'left' });
      await c.img(s, before, { x: r.x + 0.12, y: r.y + r.h - 1.17, w: 1.05, h: 1.05 }, { alignX: 'left', border: true, alignY: 'bottom' });
      c.text(s, head, xs[i], 5.85, 3.9, 0.4, { face: c.T.head, size: 20, bold: true });
      c.text(s, sub, xs[i], 6.25, 3.9, 0.35, { size: 14, color: c.T.ink2 });
    }
    c.prov(s, 'own', 'generátor OpenAI, 22. 9. 2026, jeden pokus, bez retuše, v rohu původní verze', c.T.M, 6.68, 9);
    c.src(s, ['own_img'], 'Vlastní ukázky 22. 9. 2026. Zadání úprav v příloze.');
  },
});

// ---------------------------------------------------------------- 9 Same character
add({
  title: 'Stejná tvář v nových scénách',
  id: 'postava', name: 'Stejná postava', pause: 8,
  say: [
    'Totéž platí pro postavy. Z jedné fotky cyklistky vznikly dvě nové scény se stejnou tváří i oblečením.',
    'V roce 2022 bylo potřeba model nejdřív dotrénovat na několika fotkách, výzkumníci z Googlu tehdy uváděli tři až pět. Dnes stačí přiložit jeden referenční obrázek. Díky tomu mohou vznikat celé kampaně s jednou virtuální tváří. K tomu se ještě vrátíme.',
  ],
  points: ['1 reference, 2 nové scény, stejná tvář a oblečení', '2022: dotrénování na 3 až 5 fotkách (DreamBooth)', '2026: stačí přiložit obrázek'],
  cue: '',
  sources: ['own_img', 'dreambooth'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const ref = await c.img(s, 't3_now', { x: c.T.M, y: 1.55, w: 3.0, h: 2.52 }, { alignX: 'left' });
    c.text(s, 'Reference', c.T.M, ref.y + ref.h + 0.1, 3, 0.35, { size: 14, bold: true });
    c.text(s, '2022: model bylo nutné dotrénovat na 3 až 5 fotkách.\n2026: stačí přiložit obrázek.', c.T.M, 4.75, 3.0, 1.6, { size: 15, color: c.T.ink2, psa: 6 });
    const a = await c.img(s, 'd3a', { x: 3.95, y: 1.55, w: 4.3, h: 3.6 }, { alignX: 'left' });
    const b = await c.img(s, 'd3b', { x: 8.43, y: 1.55, w: 4.3, h: 3.6 }, { alignX: 'left' });
    c.text(s, 'Nová scéna 1', a.x, a.y + a.h + 0.1, 4, 0.35, { size: 14, bold: true });
    c.text(s, 'Nová scéna 2', b.x, b.y + b.h + 0.1, 4, 0.35, { size: 14, bold: true });
    c.prov(s, 'own', 'generátor OpenAI, 22. 9. 2026, jeden pokus na scénu, bez retuše', 3.95, 5.75, 8.8);
    c.src(s, ['own_img', 'dreambooth']);
  },
});

// ---------------------------------------------------------------- 10 Video
add({
  title: 'Video: dva roky rozdílu',
  id: 'video', name: 'Video za dva roky', pause: 18,
  say: [
    'A video. Vlevo slavný klip Will Smith jí špagety z března 2023. Vpravo stejné zadání v modelu Veo 3 od Googlu z května 2025, i se zvukem.',
    'Dva roky rozdílu. V obou případech je všechno vygenerované, skutečný herec v tom nehraje.',
  ],
  points: ['Březen 2023, ModelScope', 'Květen 2025, Veo 3, se zvukem', 'Obojí vygenerované, ne skutečný herec'],
  cue: 'Spustit levé video kliknutím, po 5 až 6 sekundách spustit pravé (8 s, se zvukem). V PDF jsou jen statické snímky.',
  sources: ['ws2023', 'ws2025', 'veo3'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    await c.video(s, 'upravene/will-smith-2023-modelscope.mp4', 'ws23', { x: c.T.M, y: 1.55, w: 4.3, h: 4.3 });
    c.prov(s, 'hist', 'ModelScope, březen 2023', c.T.M, 5.97, 4.4);
    await c.video(s, 'upravene/will-smith-2025-veo3.mp4', 'ws25', { x: 5.2, y: 1.55, w: 7.53, h: 4.24 });
    c.prov(s, 'hist', 'Veo 3, květen 2025, se zvukem', 5.2, 5.97, 7.5);
    c.text(s, 'Obě videa jsou vygenerovaná. Skutečný herec v nich nehraje.', c.T.M, 6.35, 12.1, 0.35, { size: 14, bold: true });
    c.src(s, ['ws2023', 'ws2025']);
  },
});

// ---------------------------------------------------------------- 11 Six places
add({
  title: 'AI pomáhá v celé kampani, ale pokaždé jinak',
  id: 'sest-mist', name: 'Kde AI v kampani pomáhá', pause: 3,
  say: [
    'Kde všude se dnes AI v reklamě používá? Projděme jednu kampaň od začátku.',
    'Průzkum: AI projde recenze, weby konkurence a statistiky a shrne je. Strategie a texty: navrhne koncepty, slogany a varianty. Obraz, video a hlas jsme už viděli. Varianty a jazyky: z jednoho vizuálu udělá formát na Instagram i na billboard, klidně v jiném jazyce. Cílení a rozpočet: rozhoduje, komu reklamu ukázat a kolik zaplatit. A vyhodnocení: spojí výsledky s daty z e-shopu nebo z CRM, tedy databáze zákazníků.',
    'Liší se, kdo tu práci dělá. Buď asistent, kterého sami požádáte. Nebo automatika v reklamních systémech Googlu, Mety a Seznamu. Nebo vlastní propojení, které si firma postaví.',
  ],
  points: ['6 kroků kampaně: průzkum, texty, obraz, varianty, cílení, vyhodnocení', 'CRM = databáze zákazníků', '3 typy AI: asistent, automatika platforem, vlastní propojení'],
  cue: '',
  sources: [],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const X0 = c.T.M;
    await c.sketch(s, 'skica-02-sest-mist', { x: X0, y: 1.55, w: 12.13, h: 1.5 });
    const st = [
      ['Průzkum', 'recenze, konkurence, data o trhu'],
      ['Strategie a texty', 'koncepty, slogany, varianty'],
      ['Obraz, video, hlas', 'fotky produktu, spoty, dabing'],
      ['Varianty a jazyky', 'formáty, publika, překlady'],
      ['Cílení a rozpočet', 'komu, kde a za kolik'],
      ['Vyhodnocení', 'reporty, CRM, e-shop'],
    ];
    st.forEach(([h, t], i) => {
      const cx = X0 + c.sk.PIPE.cx(i);
      c.text(s, h, cx - 1.0, 3.2, 2.0, 0.35, { size: 15, bold: true, align: 'center' });
      c.text(s, t, cx - 1.0, 3.55, 2.0, 0.65, { size: 13, color: c.T.ink2, align: 'center' });
    });
    await c.sketch(s, 'skica-02b-typy-ai', { x: X0, y: 4.55, w: 12.13, h: 1.9 });
    const bands = [
      [0, 'Asistent, kterého sami požádáte: ChatGPT, Claude, Gemini'],
      [2, 'Automatika reklamních systémů: Google, Meta, Sklik'],
      [4, 'Vlastní propojení: rozhraní, agenti, CRM'],
    ];
    bands.forEach(([start, label], r) => {
      const x = X0 + c.sk.PIPE.cx(start) - 0.95;
      c.text(s, label, x, 4.55 + c.sk.BANDS.rows[r] - 0.36, 7.0, 0.3, { size: 14, bold: r === 1, color: r === 1 ? c.T.accentText : c.T.ink });
    });
  },
});

// ---------------------------------------------------------------- 12 Model, app, tools
add({
  title: 'Model, aplikace a nástroje nejsou totéž',
  id: 'model-aplikace', name: 'Model, aplikace, nástroje', pause: 3,
  say: [
    'Než porovnáme konkrétní modely: model, aplikace a nástroje nejsou totéž.',
    'Model je jádro, které čte a píše text. Aplikace jako ChatGPT nebo Claude k němu připojuje nástroje: vyhledávání na webu, generátor obrázků, spouštění kódu nebo ovládání prohlížeče. Obrázek v ChatGPT tedy nekreslí jazykový model, ale samostatný obrazový model. Claude obrázky netvoří vůbec. A když model uvede číslo, je rozdíl, jestli si ho pamatuje z tréninku, nebo ho právě našel na webu i s odkazem.',
    'K názvům: dva modely, které srovnáme, se jmenují Claude Opus 5.5 od Anthropicu, vydaný 22. září, a GPT-6 Astra od OpenAI ze 3. září. V ChatGPT se Astra ve vyšších tarifech zobrazuje jako GPT-6 Pro.',
  ],
  points: ['Model = jádro (text, porozumění obrázku)', 'Aplikace přidává nástroje: web, obrázky, kód, prohlížeč, data', 'Obrázky v ChatGPT kreslí Images 2.5; Claude obrázky netvoří', 'Paměť z tréninku vs. web s odkazem', 'Názvy: Claude Opus 5.5 (22. 9. 2026), GPT-6 Astra (3. 9. 2026)'],
  cue: '',
  sources: ['anth_opus55', 'oai_astra', 'oai_gpt6pro', 'oai_images25', 'anth_noimg'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const X = c.T.M, Y = 1.6;
    await c.sketch(s, 'skica-03-model-aplikace-nastroje', { x: X, y: Y, w: 6.4, h: 4.5 });
    const k = c.sk.STACK;
    c.text(s, 'Aplikace: ChatGPT, Claude', X + k.app.x + 0.2, Y + k.app.y + 0.15, 3.5, 0.4, { size: 15, bold: true });
    c.text(s, 'Jazykový model', X + k.model.cx - 1.0, Y + k.model.cy - 0.35, 2.0, 0.4, { size: 17, bold: true, align: 'center' });
    c.text(s, 'čte a píše text, rozumí obrázkům', X + k.model.cx - 0.95, Y + k.model.cy + 0.07, 1.9, 0.6, { size: 12, align: 'center', color: c.T.ink2 });
    ['Vyhledávání na webu', 'Generátor obrázků', 'Spouštění kódu', 'Ovládání prohlížeče', 'Firemní data a aplikace'].forEach((t, i) => {
      c.text(s, t, X + k.tool.x + 0.08, Y + k.tool.ys[i] + 0.04, k.tool.w - 0.16, k.tool.h - 0.08, { size: 12, align: 'center', valign: 'middle' });
    });
    const R = 7.6;
    c.text(s, 'Ověřené názvy k 22. 9. 2026', R, 1.6, 5.1, 0.35, { size: 14, bold: true, color: c.T.ink2 });
    c.text(s, 'Claude Opus 5.5', R, 2.0, 5.1, 0.5, { face: c.T.head, size: 24, bold: true });
    c.text(s, 'Anthropic, vydán 22. 9. 2026', R, 2.5, 5.1, 0.35, { size: 15, color: c.T.ink2 });
    c.text(s, 'GPT-6 Astra', R, 3.05, 5.1, 0.5, { face: c.T.head, size: 24, bold: true });
    c.text(s, 'OpenAI, vydán 3. 9. 2026, v ChatGPT jako GPT-6 Pro', R, 3.55, 5.1, 0.35, { size: 15, color: c.T.ink2 });
    c.text(s, 'Obrázky v ChatGPT kreslí samostatný model Images 2.5. Claude obrázky netvoří.', R, 4.35, 5.1, 0.8, { size: 16 });
    c.text(s, 'Údaj z paměti modelu a údaj z webu s odkazem se liší spolehlivostí.', R, 5.3, 5.1, 0.8, { size: 16 });
    c.src(s, ['anth_opus55', 'oai_astra', 'oai_gpt6pro', 'oai_images25', 'anth_noimg']);
  },
});

// ---------------------------------------------------------------- 13 Practical test
add({
  title: 'Stejné zadání pro dva modely',
  id: 'test-modelu', name: 'Stejné zadání pro dva modely', pause: 8,
  say: [
    'Oba modely dostaly stejné zadání. Úkol: tři koncepty kampaně pro ZÁTOKU, tři reklamy na Instagram s limitem znaků a claim na billboard. Bez přístupu na web a bez vymýšlení faktů.',
    'Oba modely dodržely limity a žádná fakta si nevymyslely. Liší se stylem. Claude Opus 5.5 psal obrazněji, se scénkami z města. GPT-6 Astra byl střídmější a víc se držel faktů o produktu.',
    'Ve druhém úkolu měly oba najít na webu tři údaje o trhu nápojů v Česku. Všech šest údajů jsme dohledali v původních zdrojích a sedí. Claude jeden údaj převzal z oborového časopisu a sám upozornil, že původní data nejsou veřejná.',
    'Je to jedna praktická ukázka, ne obecný test. Ukazuje ale, že dnes rozhoduje hlavně zadání a kontrola.',
  ],
  points: ['Stejné zadání, bez webu: oba splnili limity, nic nevymysleli', 'Opus 5.5 obraznější, Astra věcnější', 'S webem: 6 z 6 údajů ověřeno v původních zdrojích', 'Jeden běh, ne benchmark'],
  cue: 'Přečíst oba claimy nahlas.',
  sources: ['own_llm', 'csu_spotreba', 'uohs_nealko', 'zap_niq'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    c.text(s, 'Úkol: 3 koncepty, 3 reklamy na Instagram s limitem znaků, claim na billboard. Bez webu, bez vymyšlených faktů.', c.T.M, 1.45, 12.1, 0.4, { size: 15, color: c.T.ink2 });
    const cols = [
      ['Claude Opus 5.5', '„Zakotvete na 0,33 litru.“', 'Rozpálený chodník, plná tramvaj. A pak máta s okurkou ze skleněné lahve. Z malé výrobny v jižních Čechách.', 'obrazný, scénky z města'],
      ['GPT-6 Astra', '„I mezi domy je ZÁTOKA.“', 'Do tašky, pak do města. ZÁTOKA: bylinná limonáda bez umělých sladidel. Skleněná lahev 0,33 l za 49 Kč.', 'věcný, drží se faktů'],
    ];
    cols.forEach(([name, claim, ig, style], i) => {
      const x = c.T.M + i * 6.2;
      c.text(s, name, x, 2.1, 5.8, 0.45, { size: 17, bold: true });
      c.text(s, claim, x, 2.6, 5.8, 0.75, { face: c.T.head, size: 28, bold: true });
      c.text(s, 'Instagram', x, 3.5, 5.8, 0.3, { size: 12, bold: true, color: c.T.ink2 });
      c.text(s, ig, x, 3.8, 5.6, 0.9, { size: 15 });
      c.text(s, `Styl: ${style}`, x, 4.8, 5.8, 0.35, { size: 15, bold: true, color: c.T.accentText });
    });
    c.rule(s, c.T.M, 5.4, 12.73, 5.4);
    const rows = [['Limity znaků', 'splněno u obou'], ['Vymyšlená fakta', 'žádná u obou'], ['Údaje z webu', '6 ze 6 ověřeno v původních zdrojích']];
    rows.forEach(([a, b], i) => {
      const x = c.T.M + i * 4.1;
      c.text(s, a, x, 5.55, 3.9, 0.3, { size: 13, color: c.T.ink2 });
      c.text(s, b, x, 5.85, 3.9, 0.6, { size: 16, bold: true });
    });
    c.src(s, ['own_llm'], 'Praktická ukázka, jeden běh, ne obecný test. Claude Code a Codex CLI, 22. 9. 2026. Plné výstupy a ověření v příloze.');
  },
});

// ---------------------------------------------------------------- 14 Platforms
add({
  title: 'Komu a za kolik ukázat reklamu, řeší AI',
  id: 'platformy', name: 'AI uvnitř reklamních systémů', pause: 3,
  say: [
    'Nejvíc AI v reklamě ale běží tam, kde ji skoro nevidíme: uvnitř reklamních systémů.',
    'Inzerent zadá cíl, rozpočet, texty, obrázky a web. Google, Meta nebo Sklik pak samy rozhodují, komu reklamu ukázat, kde a kolik nabídnout. Často i samy napíšou nové titulky nebo vytvoří video. U Googlu se takové texty mohou zobrazovat, aniž by je inzerent jednotlivě schválil.',
    'Přínos je méně ruční práce, nevýhoda menší kontrola. Firma Smarter Ecommerce, nezávislá na Googlu, změřila na víc než 250 kampaních, že AI Max přinesl o 13 procent vyšší hodnotu konverzí. Tyhle konverze navíc ale byly o 16 procent dražší. Google přitom uvádí o 14 procent víc konverzí při podobné ceně.',
  ],
  points: ['Inzerent: cíl, rozpočet, podklady, data o nákupech', 'Platforma: komu, kde, za kolik, jaký text', 'Google AI Max, Meta Advantage+, Sklik Chytrá kampaň', 'Texty a videa i bez schválení jednotlivě', 'Nezávisle: +13 % hodnoty konverzí, dodatečné konverze o 16 % dražší'],
  cue: '',
  sources: ['g_aimax', 'g_textcust', 'g_demandgen', 'm_advcreative', 'sklik_chytra', 'smec_aimax'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    await c.sketch(s, 'skica-06-sipky', { x: c.T.M, y: 1.5, w: 12.13, h: 0.6 });
    const col = (x, w, head, lines, accent) => {
      c.text(s, head, x, 1.55, w, 0.45, { face: c.T.head, size: 22, bold: true, color: accent ? c.T.accentText : c.T.ink });
      c.text(s, lines.join('\n'), x, 2.15, w, 2.5, { size: 16, psa: 6 });
    };
    col(c.T.M, 2.9, 'Inzerent zadá', ['cíl, třeba nákupy', 'rozpočet', 'texty, obrázky, web', 'data o nákupech'], false);
    col(4.35, 3.8, 'Systém rozhodne', ['komu reklamu ukázat', 'kde a kolik nabídnout', 'který text a obrázek', 'někdy napíše nové texty a video'], true);
    col(9.05, 3.6, 'Inzerent vidí', ['běžící kampaň', 'výsledky v přehledu', 'méně detailů o tom, proč'], false);
    c.text(s, 'Google AI Max a Performance Max · Meta Advantage+ · Sklik Chytrá kampaň', c.T.M, 4.75, 12.1, 0.35, { size: 14, bold: true, color: c.T.ink2 });
    c.rule(s, c.T.M, 5.3, 12.73, 5.3);
    c.text(s, '+13 %', c.T.M, 5.45, 2.2, 0.7, { size: 36, bold: true });
    c.text(s, 'hodnota konverzí s AI Max', c.T.M, 6.12, 2.9, 0.35, { size: 13, color: c.T.ink2 });
    c.text(s, '+16 %', 3.7, 5.45, 2.2, 0.7, { size: 36, bold: true });
    c.text(s, 'cena dodatečné konverze', 3.7, 6.12, 2.9, 0.35, { size: 13, color: c.T.ink2 });
    c.text(s, 'Měření firmy Smarter Ecommerce, nezávislé na Googlu, více než 250 kampaní. Google sám uvádí +14 % konverzí při podobné ceně.', 7.0, 5.5, 5.73, 1.0, { size: 14, color: c.T.ink2 });
    c.src(s, ['g_aimax', 'g_textcust', 'g_demandgen', 'm_advcreative', 'sklik_chytra', 'smec_aimax']);
  },
});

// ---------------------------------------------------------------- 15 Data
add({
  title: 'Každá šestá firma v Česku už AI používá',
  id: 'data', name: 'Kolik firem a lidí AI používá', pause: 8,
  say: [
    'Kolik firem AI opravdu používá? Podle Eurostatu v roce 2025 AI používalo 18 procent českých firem s deseti a více zaměstnanci. V celé EU 20 procent. Od roku 2021 je to v Česku zhruba čtyřnásobek.',
    'A z českých firem, které AI používají, ji 59 procent nasazuje v marketingu, prodeji nebo zákaznické podpoře. V EU je to 35 procent.',
    'U lidí: generativní AI v roce 2025 použilo 35 procent Čechů mezi 16 a 74 lety a 78 procent mladých do 24 let.',
  ],
  points: ['Firmy s AI 2025: ČR 18 %, EU 20 % (2021: 4 %, 8 %)', 'Z firem s AI: marketing a prodej ČR 59 %, EU 35 %', 'Lidé 16–74: 35 %, 16–24: 78 % (2025)', '2022 se neměřilo; 2025 nová kategorie'],
  cue: 'Při grafu ukázat na oranžové sloupce Česka.',
  sources: ['eurostat_ent', 'csu_ent', 'eurostat_ind'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    c.text(s, 'Firmy s 10 a více zaměstnanci, které používají AI (% firem)', c.T.M, 1.5, 7.6, 0.35, { size: 14, bold: true });
    c.chartEnterprises(s, { x: c.T.M - 0.1, y: 1.85, w: 7.6, h: 4.6 });
    const R = 8.75;
    c.text(s, '59 %', R, 1.55, 4.0, 0.9, { size: 54, bold: true, color: c.T.accentText });
    c.text(s, 'českých firem, které AI používají, ji nasazuje v marketingu, prodeji nebo zákaznické podpoře. V EU 35 %.', R, 2.45, 3.98, 1.2, { size: 15 });
    c.text(s, '35 %', R, 3.9, 4.0, 0.9, { size: 54, bold: true });
    c.text(s, 'Čechů ve věku 16 až 74 let použilo v roce 2025 generativní AI. Mezi 16 a 24 lety 78 %.', R, 4.8, 3.98, 1.2, { size: 15 });
    c.src(s, ['eurostat_ent', 'csu_ent', 'eurostat_ind'], 'Eurostat isoc_eb_ai a isoc_ai_iaiu (data 6/2026), ČSÚ 21. 1. 2026. Rok 2022 se neměřil. Od 2025 nová kategorie AI pro obraz, video a zvuk.');
  },
});

// ---------------------------------------------------------------- 16 Campaigns
add({
  title: 'Rychleji a levněji. Ne vždy s potleskem.',
  id: 'kampane', name: 'Skutečné kampaně', pause: 8,
  say: [
    'Sázková platforma Kalshi pustila v červnu 2025 během finále NBA reklamu, kterou jeden tvůrce udělal za dva dny s modelem Veo 3. Generování podle firmy stálo pod dva tisíce dolarů. Na patnáct použitelných záběrů ale potřeboval tři až čtyři sta pokusů.',
    'Opačný příběh: McDonald’s v Nizozemsku v prosinci 2025 stáhl vánoční reklamu po vlně posměchu, přestože byla označená jako AI. Podle produkční firmy na ní pět týdnů pracovalo deset lidí.',
    'A Coca-Cola o rok později? Část médií ji znovu zkritizovala. Panel diváků firmy System1 jí ale dal nejvyšší možné hodnocení. Hlasitá kritika a reakce diváků se můžou lišit.',
  ],
  points: ['Kalshi 6/2025: 2 dny, pod 2 000 USD za generování, 300 až 400 pokusů na 15 záběrů (údaje firmy a tvůrce)', 'McDonald’s NL 12/2025: stažena i se štítkem AI, 10 lidí 5 týdnů', 'Coca-Cola 2025: kritika vs. 5,9 z 5,9 hvězd v System1'],
  cue: '',
  sources: ['npr_kalshi', 'nbc_mcd', 'commons_mcd', 'system1', 'futurism_coke'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const a = await c.img(s, 'kalshi', { x: c.T.M, y: 1.5, w: 5.9, h: 3.32 }, { alignX: 'left' });
    c.prov(s, 'real', 'Kalshi, finále NBA, červen 2025', a.x, a.y + a.h + 0.1, 5.9);
    c.text(s, '2 dny práce jednoho tvůrce\npod 2 000 USD za generování\n300 až 400 pokusů na 15 záběrů', a.x, 5.3, 5.9, 1.3, { size: 16, bold: true, psa: 4 });
    const b = await c.img(s, 'mcd_end', { x: 6.83, y: 1.5, w: 5.9, h: 3.32 }, { alignX: 'left' });
    c.prov(s, 'real', 'McDonald’s Nizozemsko, prosinec 2025', b.x, b.y + b.h + 0.1, 5.9);
    c.text(s, 'stažena po několika dnech\ni se štítkem „AI generated“\n10 lidí, 5 týdnů práce', b.x, 5.3, 5.9, 1.3, { size: 16, bold: true, psa: 4 });
    c.src(s, ['npr_kalshi', 'nbc_mcd', 'commons_mcd', 'system1', 'futurism_coke'], 'Údaje o nákladech a čase uvádějí firmy a tvůrci.');
  },
});

// ---------------------------------------------------------------- 17 Agent
add({
  title: 'Agent kampaň připraví. Peníze hlídá člověk.',
  id: 'agent', name: 'Agent od zadání po CRM', pause: 3,
  say: [
    'Teď slíbený agent. Představte si, že AI dostane zadání kampaně pro ZÁTOKU.',
    'Nejdřív projde zadání, podklady značky a web. Pak napíše texty a obrazový model vytvoří vizuál. Tady je první kontrola člověkem: fakta, čeština, texty v obrázku a práva. Potom varianty pro různé formáty a publika.',
    'Čtvrtý krok: vyplní reklamní systém. Buď kliká v prohlížeči jako člověk, nebo použije oficiální rozhraní. Meta letos otevřela rozhraní pro AI agenty. Kampaň přes něj vznikne pozastavená a aplikace se před spuštěním zeptá. Google má pro agenty zatím rozhraní, které data jen čte.',
    'Pátý krok je spuštění a peníze. Tady je druhá kontrola. Claude v prohlížeči podle pravidel Anthropicu nesmí platit a ChatGPT se před platbou ptá. A nakonec výsledky a kontakty z formulářů tečou automaticky do CRM nebo e-shopu.',
    'Umí tedy AI sama vytvořit a zveřejnit celou reklamu? Připravit ano. Spuštění a platbu výrobci záměrně nechávají člověku a nezávislý test celé cesty jsme nenašli.',
  ],
  points: ['6 kroků: brief, text a vizuál, varianty, reklamní systém, spuštění, výsledky', 'Kontrola člověkem: po tvorbě a před spuštěním', 'Meta MCP: kampaň vznikne pozastavená; Google MCP jen čte', 'Claude v Chrome nesmí platit, ChatGPT se ptá', 'Připravit ano, spustit a zaplatit bez člověka ne'],
  cue: 'Procházet kroky zleva, u oranžových koleček zdůraznit kontrolu.',
  sources: ['m_mcp_tools', 'm_mcp_help', 'g_mcp', 'a_chrome', 'o_cloudbrowser', 'zapier_int'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const X = c.T.M, Y = 1.45;
    await c.sketch(s, 'skica-04-agent-tok', { x: X, y: Y, w: 12.13, h: 2.1 });
    const F = c.sk.FLOW;
    const steps = [
      ['Zadání a průzkum', 'asistent s webem a podklady značky'],
      ['Text a vizuál', 'jazykový a obrazový model'],
      ['Varianty', 'formáty, jazyky, publika'],
      ['Reklamní systém', 'kampaň vznikne pozastavená'],
      ['Spuštění a rozpočet', 'platební údaje, schválení'],
      ['Výsledky do CRM', 'kontakty a nákupy'],
    ];
    steps.forEach(([h, t], i) => {
      const x = X + F.x(i);
      c.text(s, h, x + 0.06, Y + F.box.y + 0.08, F.box.w - 0.12, F.box.h - 0.16, { size: 13, bold: true, align: 'center', valign: 'middle' });
      c.text(s, t, x - 0.1, Y + F.box.y + F.box.h + 0.12, F.box.w + 0.2, 0.7, { size: 12, align: 'center', color: c.T.ink2 });
    });
    c.text(s, 'kontrola člověkem', X + F.x(1) + F.box.w / 2 - 0.4 - 1.7, Y + 0.23, 1.7, 0.3, { size: 12, color: c.T.accentText, bold: true, align: 'right' });
    await c.sketch(s, 'skica-04b-agent-legenda', { x: X, y: 4.55, w: 1.0, h: 1.2 });
    c.text(s, 'aplikace nebo rozhraní (API)', X + 1.15, 4.6, 4, 0.3, { size: 13 });
    c.text(s, 'klikání v prohlížeči nebo rozhraní', X + 1.15, 5.0, 4, 0.3, { size: 13 });
    c.text(s, 'automatický tok (Zapier, n8n)', X + 1.15, 5.4, 4, 0.3, { size: 13 });
    const R = 6.5;
    c.text(s, 'Umí AI sama vytvořit a zveřejnit reklamu?', R, 4.55, 6.2, 0.4, { size: 16, bold: true });
    c.text(s, 'Připravit ano. Meta vytvoří kampaň od agenta pozastavenou a aplikace se před spuštěním ptá. Claude v Chrome nesmí platit, ChatGPT se před platbou ptá. Nezávislý test celé cesty jsme nenašli.', R, 4.95, 6.23, 1.5, { size: 14, color: c.T.ink2 });
    c.src(s, ['m_mcp_tools', 'm_mcp_help', 'g_mcp', 'a_chrome', 'o_cloudbrowser', 'zapier_int']);
  },
});

// ---------------------------------------------------------------- 18 OSWorld
add({
  title: 'Krátké úkoly agenti zvládají, dlouhé zatím ne',
  id: 'agenti-cisla', name: 'Jak dobře agenti ovládají počítač', pause: 6,
  say: [
    'Jak dobře agenti ovládají počítač, měří test OSWorld. Agent dostane skutečný počítač a úkol, třeba upravit tabulku nebo vyplnit formulář, a skript pak zkontroluje výsledek.',
    'Na jaře 2024 zvládl nejlepší model 12 procent úloh. Letos na jaře výrobci hlásí kolem 78 procent, víc než lidé v původní studii. Pozor ale: jsou to krátké úlohy, člověk je zvládne za pár minut.',
    'V novém testu s dlouhými úlohami, které člověku typicky zaberou hodinu a půl, dokončí nejlepší agent v nezávislém měření 44 procent. A nic z toho neměří, jestli je reklama dobrá.',
  ],
  points: ['OSWorld: skutečný počítač, úkol, automatická kontrola', '4/2024: 12 %, 4/2026: 78,7 % (údaje výrobců), lidé 72 %', 'Krátké úlohy (minuty)', 'OSWorld 2.0, úlohy kolem 1,6 h: nejlépe 44 % dokončených (nezávisle)', 'Neměří kvalitu reklamy'],
  cue: '',
  sources: ['osworld_paper', 'oai_cua', 'xlang_verified', 'oai_gpt55', 'osworld2'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    c.text(s, 'Nejlepší zveřejněné výsledky v testu OSWorld (% úspěšně splněných úloh)', c.T.M, 1.5, 7.9, 0.35, { size: 14, bold: true });
    c.chartOsworld(s, { x: c.T.M - 0.1, y: 1.85, w: 8.0, h: 4.6 });
    const R = 8.95;
    c.text(s, '44 %', R, 1.6, 3.8, 0.9, { size: 54, bold: true, color: c.T.accentText });
    c.text(s, 'dlouhých úloh dokončí nejlepší agent v nezávislém testu OSWorld 2.0. Člověku jedna úloha typicky zabere 1,6 hodiny.', R, 2.5, 3.78, 1.6, { size: 15 });
    c.text(s, 'Test neměří kvalitu reklamy ani češtinu.', R, 4.35, 3.78, 0.8, { size: 15, bold: true });
    c.src(s, ['osworld_paper', 'oai_cua', 'xlang_verified', 'oai_gpt55', 'osworld2'], 'Body do 5/2025 původní OSWorld, od 7/2025 opravená verze OSWorld-Verified. Výsledky do 2026 hlásí výrobci modelů.');
  },
});

// ---------------------------------------------------------------- 19 Virtual faces
add({
  title: 'Virtuální tvář není vždy AI',
  id: 'virtualni-tvare', name: 'AI influenceři a virtuální tváře', pause: 8,
  say: [
    'Virtuální tváře. Pozor, ne každá je AI.',
    'Aitanu López vytváří barcelonská agentura The Clueless pomocí AI a Photoshopu. Má přes 400 tisíc sledujících a podle provozovatelů vydělá až deset tisíc eur měsíčně. Nezávisle to ale nikdo neověřil.',
    'Lu brazilského řetězce Magazine Luiza je 3D postava, kterou rozpohybuje herečka v obleku pro snímání pohybu. Má 10 milionů sledujících a podle firmy nikdy nepředstírala, že je člověk.',
    'H&M loni vytvořil digitální dvojčata skutečných modelek. Ty podle firmy za jejich použití dostávají zaplaceno a obrázky nesou nápis Digital Twin.',
    'Co nevíme: jak často to používají e-shopy a dropshippeři, tedy prodejci bez vlastního skladu. Nástroje „vyber AI tvář a vygeneruj reklamu“ pro ně existují a novináři popsali AI falešné lékaře prodávající doplňky. Kolik takových účtů je, nikdo nezměřil.',
  ],
  points: ['Aitana López: AI, 404 tis. sledujících, příjmy jen tvrzení provozovatele', 'Lu do Magalu: 3D postava + snímání pohybu, 10 mil.', 'H&M: digitální dvojčata skutečných modelek, placená, označená', 'Dropshipping: nástroje existují, rozsah nezměřen'],
  cue: '',
  sources: ['euronews_aitana', 'ig_aitana', 'magalu_pr', 'ig_magalu', 'hm_group', 'zendrop', 'futurism_nyt'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const cols = [
      ['aitana', 'Vytvořená AI', 'Aitana López', '404 tis. sledujících. Tvoří ji agentura pomocí AI a Photoshopu.'],
      ['lu', '3D postava', 'Lu do Magalu', '10 mil. sledujících. Rozpohybuje ji herečka snímáním pohybu.'],
      ['hm', 'Člověk + AI', 'H&M Digital Twin', 'Dvojčata skutečných modelek, placená a označená.'],
    ];
    const xs = [c.T.M, 4.85, 9.1];
    for (let i = 0; i < 3; i++) {
      const [k, type, name, t] = cols[i];
      const r = await c.img(s, k, { x: xs[i], y: 1.5, w: 3.63, h: 2.75 }, { mode: 'cover' });
      c.text(s, type, xs[i], 4.4, 3.8, 0.35, { size: 14, bold: true, color: c.T.accentText });
      c.text(s, name, xs[i], 4.75, 3.8, 0.45, { face: c.T.head, size: 22, bold: true });
      c.text(s, t, xs[i], 5.25, 3.63, 0.8, { size: 14, color: c.T.ink2 });
    }
    c.prov(s, 'real', 'snímky z Instagramu a tiskových materiálů', c.T.M, 6.2, 6);
    c.text(s, 'Dropshipping: nástroje existují, rozsah nikdo nezměřil.', 6.9, 6.17, 5.83, 0.35, { size: 13, bold: true });
    c.src(s, ['euronews_aitana', 'ig_aitana', 'magalu_pr', 'ig_magalu', 'hm_group', 'zendrop', 'futurism_nyt'], 'Počty sledujících k 22. 9. 2026. Příjmy Aitany uvádí provozovatel.');
  },
});

// ---------------------------------------------------------------- 20 Activity
add({
  title: 'Co z toho vytvořila AI?',
  id: 'aktivita', name: 'Aktivita: co vytvořila AI?', pause: 45,
  say: [
    'A teď vy. Tady jsou čtyři obrázky z reklam a z ulice. U každého hlasujte rukou. Vytvořila ho AI, je to fotka, nebo kombinace obojího?',
    'Jednička? … Dvojka? … Trojka? … Čtyřka? …',
    'Díky. Zkuste si zapamatovat, podle čeho jste se rozhodovali.',
  ],
  points: ['Tři možnosti: AI / fotka / kombinace', 'Hlasovat rukou u každého čísla', 'Nic neprozrazovat'],
  cue: 'U každého čísla zvednout ruku jako vzor a nechat 8 až 10 sekund na hlasování. Nekomentovat.',
  sources: [],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const keys = ['rohlik', 'car', 'epoj', 'eshop_left'];
    const box = [
      { x: c.T.M, y: 1.5 }, { x: 6.75, y: 1.5 }, { x: c.T.M, y: 4.3 }, { x: 6.75, y: 4.3 },
    ];
    for (let i = 0; i < 4; i++) {
      await c.img(s, keys[i], { x: box[i].x + 0.55, y: box[i].y, w: 5.3, h: 2.55 }, { mode: 'cover' });
      c.text(s, String(i + 1), box[i].x, box[i].y - 0.05, 0.5, 0.7, { face: c.T.head, size: 36, bold: true });
    }
    c.text(s, 'AI · fotka · kombinace', c.T.M, 6.95, 6, 0.35, { size: 14, bold: true, color: c.T.ink2 });
  },
});

// ---------------------------------------------------------------- 21 Reveal
add({
  title: 'Odhalení: původ doložil zdroj, ne vzhled',
  id: 'odhaleni', name: 'Odhalení a vodítka', pause: 5,
  say: [
    'Jednička je AI. Vánoční spot Rohlíku z roku 2025, celý vygenerovaný včetně hudby a hlasu. Podle firmy ho udělala jedna autorka za 80 hodin do 400 eur. Rok předtím stál spot podle zakladatele Rohlíku zhruba 300 tisíc eur. Vodítko: krabice mléka. Čitelné je jen BIO, zbytek jsou nesmyslné znaky a mezi záběry se mění.',
    'Dvojka je obyčejná fotka z roku 2022. Autor ji zveřejnil na Wikimedia Commons i s údaji z telefonu. Rozmazané SPZ jsou naše úprava.',
    'Trojka je kombinace. Šimpanze pro ePojištění vytvořila AI, ale české bankovky museli grafici vložit ručně, protože AI kreslila dolary. Výrobce sám popsal i další chyby: lidské zuby a prsty a volant, který v jízdě měnil stranu.',
    'Čtyřka je podle vyšetřování Českého rozhlasu z e-shopu, který k reklamě používal AI fotky a videa. Reklama slibovala plyšové jezevčíky, kteří se hýbou. Zákazníkovi přišly tvrdé figurky bez nabíjení. Vodítko tu nebylo v obrázku, ale v tom, co přišlo domů.',
  ],
  points: ['1 AI: Rohlík 2025, 400 € vs. 300 tis. €; krabice mléka', '2 fotka: Commons 2022, autor a data z telefonu', '3 kombinace: AI šimpanz, bankovky ručně; chyby popsal výrobce', '4 AI: e-shop, doloženo vyšetřováním; rozdíl oproti realitě'],
  cue: 'Odhalovat v pořadí 1 až 4. U čtyřky ukázat pravou polovinu obrázku.',
  sources: ['mediar_rohlik', 'cc_rohlik', 'commons_car', 'focus_princ', 'mg_epoj', 'irozhlas_eshop'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const items = [
      ['rohlik', 'AI', 'Rohlík, 2025. Firma: celý spot z AI.', 'Nečitelný text na krabici mléka.'],
      ['car', 'Fotka', 'Wikimedia Commons, 2022. Autor a data z telefonu.', 'SPZ rozmazali jsme my.'],
      ['epoj', 'Kombinace', 'ePojištění, 2025. AI šimpanz, bankovky ručně.', 'Chyby popsal sám výrobce.'],
      ['eshop_full', 'AI', 'E-shop, 2025. Doloženo vyšetřováním iROZHLAS.', 'Doma přišly jiné hračky.'],
    ];
    const box = [
      { x: c.T.M, y: 1.45 }, { x: 6.75, y: 1.45 }, { x: c.T.M, y: 4.2 }, { x: 6.75, y: 4.2 },
    ];
    for (let i = 0; i < 4; i++) {
      const [k, verdict, who, tell] = items[i];
      await c.img(s, k, { x: box[i].x, y: box[i].y, w: 3.1, h: 2.3 }, { mode: 'cover' });
      const tx = box[i].x + 3.3;
      c.text(s, `${i + 1}  ${verdict}`, tx, box[i].y, 2.7, 0.5, { face: c.T.head, size: 24, bold: true, color: verdict === 'Fotka' ? c.T.ink : c.T.accentText });
      c.text(s, who, tx, box[i].y + 0.55, 2.68, 0.95, { size: 13 });
      c.text(s, tell, tx, box[i].y + 1.5, 2.68, 0.8, { size: 13, bold: true });
    }
    c.src(s, ['mediar_rohlik', 'commons_car', 'focus_princ', 'irozhlas_eshop'], 'Foto 2 upraveno (rozmazané SPZ).');
  },
});

// ---------------------------------------------------------------- 22 Suspicion vs proof
add({
  title: 'Vzhled vzbudí podezření. Doložit ho musí zdroj.',
  id: 'dolozeni', name: 'Podezření a doložení', pause: 3,
  say: [
    'Co si z toho vzít? Vzhled vzbudí podezření, ale nic nedokazuje. V reprezentativní studii s třemi tisíci lidmi z USA, Německa a Číny poznali lidé AI obrázky v méně než polovině případů, hůř než při hodu mincí. A chyby jako prsty a nápisy s každým modelem ubývají.',
    'Doložit původ může autor nebo popis postupu, jako u Rohlíku nebo ePojištění. Pomohou i technické značky. Naše obrázky od OpenAI mají v souboru podepsaný záznam, že je vytvořil ChatGPT. Snímek obrazovky ho ale smaže. Chybějící značka tedy nic nedokazuje.',
    'A od 2. srpna 2026 platí evropský AI Act: realistický obsah z AI, který by mohl působit jako skutečný, se musí označit.',
  ],
  points: ['Lidé poznají AI obrázky méně než v 50 % (3 002 lidí, 3 země)', 'Doložení: autor, popis postupu', 'Technické značky (C2PA): potvrdí, ale nevyvrátí', 'AI Act čl. 50 od 2. 8. 2026: označit realistický AI obsah'],
  cue: '',
  sources: ['frank2024', 'own_c2pa', 'oai_prov', 'aiact_faq', 'eurlex_aiact'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const X = c.T.M;
    await c.sketch(s, 'skica-05-podezreni-dolozeni', { x: X, y: 1.55, w: 12.13, h: 1.2 });
    const L = c.sk.LADDER;
    const lab = [['Divný detail', 'prsty, nápisy, odrazy'], ['Obecný text', 'fráze bez konkrétních faktů'], ['Vyjádření autora', 'popis postupu, zadání'], ['Technická značka', 'C2PA, vodoznak, štítek AI']];
    lab.forEach(([h, t], i) => {
      const x = X + L.xs[i] - 1.35;
      c.text(s, h, x, 2.85, 2.7, 0.4, { size: 16, bold: true, align: 'center', color: i >= 2 ? c.T.accentText : c.T.ink });
      c.text(s, t, x, 3.25, 2.7, 0.4, { size: 13, align: 'center', color: c.T.ink2 });
    });
    c.text(s, 'jen podezření', X + 0.2, 1.25, 3, 0.3, { size: 12, color: c.T.ink2 });
    c.text(s, 'doložení', X + 9.8, 1.25, 2.3, 0.3, { size: 12, color: c.T.ink2, align: 'right' });
    const cols = [
      ['pod 50 %', 'úspěšnost lidí při rozpoznání AI obrázků v reprezentativní studii (3 002 lidí, USA, Německo, Čína)'],
      ['C2PA', 'Naše obrázky od OpenAI nesou podpis „ChatGPT, gpt-image“. Snímek obrazovky ho smaže.'],
      ['2. 8. 2026', 'AI Act, čl. 50: realistický AI obsah, který by působil jako skutečný, se musí označit.'],
    ];
    cols.forEach(([n, t], i) => {
      const x = X + i * 4.1;
      c.text(s, n, x, 4.1, 3.9, 0.7, { size: 32, bold: true });
      c.text(s, t, x, 4.8, 3.8, 1.5, { size: 14, color: c.T.ink2 });
    });
    c.src(s, ['frank2024', 'own_c2pa', 'oai_prov', 'aiact_faq'], 'C2PA: vlastní rozbor metadat obrázků z 22. 9. 2026.');
  },
});

// ---------------------------------------------------------------- 23 Our surroundings
add({
  title: 'AI reklama v našem okolí',
  id: 'okoli', name: 'AI reklama v našem okolí', pause: 5, master: 'FOTO3',
  say: [
    'A AI reklama u nás? Kromě Rohlíku a ePojištění třeba O2. To letos s AI obnovilo slavnou reklamu Eurotelu z roku 1998. Herce natočilo ve studiu a záběry krajiny s vlakem zrekonstruovalo s AI obraz po obrazu. Reklamní kritici ji v týdenním hodnocení Médiáře ocenili jako nejlepší.',
    'Baťa vytvořil kampaň s AI z fotek skutečných bot, aby seděly švy i logo, a vizuály označuje vodoznakem. A Livesport má virtuální moderátorku s digitální tváří na pohybu skutečné herečky.',
    'Až půjdete kolem billboardu nebo budete scrollovat, zkuste se zeptat: kdo to udělal a jak.',
  ],
  points: ['O2 2026: remake Eurotelu, herci ve studiu + AI, kladné hodnocení', 'Baťa 2026: AI z fotek skutečných bot, vodoznak', 'Livesport 2026: virtuální moderátorka', 'Otázka na odchod: kdo to udělal a jak?'],
  cue: 'Obrázky lze nahradit vlastními fotografiemi: klepnout na obrázek, Změnit obrázek.',
  sources: ['o2_blog', 'mediar_o2', 'cc_bata', 'mg_livesport'],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const cols = [
      ['o2', 'O2 a Eurotel, 2026', 'Herci ve studiu, krajina a vlak rekonstruované s AI.'],
      ['bata', 'Baťa, 2026', 'AI vizuály z fotek skutečných bot, s vodoznakem.'],
      ['livesport', 'Livesport, 2026', 'Digitální tvář na pohybu skutečné herečky.'],
    ];
    const xs = [c.T.M, 4.85, 9.1];
    for (let i = 0; i < 3; i++) {
      const [k, h, t] = cols[i];
      await c.img(s, k, { x: xs[i], y: 1.5, w: 3.63, h: 3.0 }, { mode: 'cover', placeholder: `foto${i + 1}` });
      c.text(s, h, xs[i], 4.65, 3.8, 0.45, { face: c.T.head, size: 20, bold: true });
      c.text(s, t, xs[i], 5.1, 3.63, 0.8, { size: 14, color: c.T.ink2 });
    }
    c.prov(s, 'real', 'snímky z reklam podle tiskových zpráv a oborových médií', c.T.M, 6.1, 8);
    c.src(s, ['o2_blog', 'mediar_o2', 'cc_bata', 'mg_livesport']);
  },
});

// ---------------------------------------------------------------- 24 Close
add({
  title: 'Co si odnést',
  id: 'zaver', name: 'Co si odnést', pause: 3,
  say: [
    'Co si z dneška odnést?',
    'Za prvé: AI je v reklamě běžný nástroj. Práce lidí se přesouvá k zadání, výběru a kontrole.',
    'Za druhé: každý výstup AI je potřeba zkontrolovat. Hlavně fakta, text v obrázku, produkt a cizí značky.',
    'Za třetí: podle vzhledu původ nepoznáte. Ptejte se na zdroj a hledejte označení.',
    'Děkujeme.',
  ],
  points: ['AI = běžný nástroj; lidé zadávají, vybírají, kontrolují', 'Kontrolovat fakta, text v obrázku, produkt, značky', 'Původ doloží zdroj, ne vzhled'],
  cue: 'Po poděkování zůstat na tomto slidu.',
  sources: [],
  build: async (s, c) => {
    c.title(s, c.spec.title);
    const items = [
      ['AI je v reklamě běžný nástroj.', 'Práce lidí se přesouvá k zadání, výběru a kontrole.'],
      ['Každý výstup AI zkontrolujte.', 'Fakta, text v obrázku, produkt a cizí značky.'],
      ['Podle vzhledu původ nepoznáte.', 'Ptejte se na zdroj a hledejte označení.'],
    ];
    items.forEach(([h, t], i) => {
      const y = 1.75 + i * 1.6;
      c.text(s, String(i + 1), c.T.M, y - 0.05, 0.6, 0.8, { face: c.T.head, size: 40, bold: true, color: c.T.accentText });
      c.text(s, h, c.T.M + 0.8, y, 11, 0.6, { face: c.T.head, size: 30, bold: true });
      c.text(s, t, c.T.M + 0.8, y + 0.62, 11, 0.45, { size: 18, color: c.T.ink2 });
    });
  },
});

module.exports = { MAIN, APPX, add };
