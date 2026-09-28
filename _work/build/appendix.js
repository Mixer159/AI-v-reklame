// Appendix slides: details that support the talk but are not presented.
const fs = require('fs');
const path = require('path');
const { cz } = require('./lib');

const APPX = [];
const add = (spec) => APPX.push({ appendix: true, ...spec });

const ROOT = path.resolve(__dirname, '../..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

// Table helper: header row bold on a light panel, 11 pt body.
function table(s, c, rows, colW, box, o = {}) {
  const size = o.size ?? 11;
  const data = rows.map((r, i) => r.map((cell) => ({
    text: cz(typeof cell === 'string' ? cell : cell.text),
    options: {
      ...(typeof cell === 'string' ? {} : { colspan: cell.colspan }),
      bold: i === 0, fontFace: c.T.body, fontSize: i === 0 ? size : size, color: c.T.ink,
      fill: { color: i === 0 ? 'F3F4F6' : 'FFFFFF' }, valign: 'top', margin: [3, 5, 3, 5],
    },
  })));
  s.addTable(data, { x: box.x, y: box.y, w: box.w, colW, border: { type: 'solid', pt: 0.5, color: 'C9CCD2' }, autoPage: false });
}

function head(s, c, t, sub) {
  c.text(s, 'Příloha', c.T.M, 0.3, 3, 0.3, { size: 12, bold: true, color: c.T.accentText });
  c.text(s, t, c.T.M, 0.58, 12.1, 0.6, { face: c.T.head, size: 26, bold: true });
  if (sub) c.text(s, sub, c.T.M, 1.2, 12.1, 0.4, { size: 13, color: c.T.ink2 });
}

// ---------------------------------------------------------------- P1 protocol
add({
  id: 'p-protokol', name: 'Protokol srovnání obrázků',
  build: async (s, c) => {
    const P = JSON.parse(read('_work/tests/prompts.json'));
    head(s, c, 'Protokol vlastního srovnání obrázků', 'Provedeno 22. 9. 2026. Stejná zadání, stejný počet pokusů, bez následných úprav.');
    table(s, c, [
      ['', 'Model z roku 2023', 'Dnešní generátor'],
      ['Model', 'SDXL 1.0 base (Stability AI, vydán 26. 7. 2023), bez refineru', 'Generátor obrázků OpenAI přes vestavěný nástroj image_gen v Codex CLI 0.156.0; C2PA v souborech: „ChatGPT, gpt-image“. Nástroj přesnou verzi neuvádí; OpenAI od 8. 9. 2026 nabízí v Codexu Images 2.5.'],
      ['Spuštění', 'Lokálně, Mac M1 Pro, diffusers, 1024 × 1024 px, 30 kroků, CFG 7,0, výchozí plánovač, bez negativního zadání', 'Cloud OpenAI; nástroj nedovoluje zvolit rozměr (výstup 1145 × 1374, 1024 × 1536 a 1370 × 1148 px)'],
      ['Pokusy', '4 na zadání (seed 1 až 4)', '4 na zadání (4 samostatná volání)'],
      ['Zadání', { text: 'Stejný anglický text pro oba modely, předán doslova (ověřeno v logu nástroje). České nápisy jsou součástí zadání.', colspan: 2 }],
      ['Výběr na slide', 'Nejlepší ze 4 podle pořadí kritérií: 1. správnost nápisu, 2. věrohodnost produktu a lidí, 3. kompozice', 'Stejná kritéria'],
      ['Co nebylo stejné', { text: 'Starý model běžel lokálně bez dalších nástrojů. Dnešní generátor je služba s vlastním zpracováním zadání. Poměr stran se liší.', colspan: 2 }],
    ], [2.0, 5.05, 5.05], { x: c.T.M, y: 1.7, w: 12.1 }, { size: 11 });
    c.text(s, `T1: ${P.T1}`, c.T.M, 5.35, 12.1, 0.5, { size: 10, color: c.T.ink2 });
    c.text(s, `T2: ${P.T2}`, c.T.M, 5.85, 12.1, 0.45, { size: 10, color: c.T.ink2 });
    c.text(s, `T3: ${P.T3}`, c.T.M, 6.3, 12.1, 0.5, { size: 10, color: c.T.ink2 });
    c.src(s, ['own_img', 'sdxl', 'oai_images25']);
  },
});

// ---------------------------------------------------------------- P2-P4 all attempts
const ALL = [
  ['T1', 'Zadání T1: lahev ZÁTOKA u jezera', 'upravene/t1'],
  ['T2', 'Zadání T2: plakát pekárny s českým nadpisem', 'upravene/t2'],
  ['T3', 'Zadání T3: cyklistka na Starém Městě', 'upravene/t3'],
];
for (const [k, t] of ALL) {
  add({
    id: `p-pokusy-${k}`, name: `Všechny pokusy ${k}`,
    build: async (s, c) => {
      head(s, c, `Všechny pokusy: ${t.replace(/^Zadání T\d: /, '')}`, 'Horní řada SDXL 1.0 (model z 7/2023), seed 1 až 4. Dolní řada dnešní generátor OpenAI, pokus 1 až 4. Bez úprav.');
      for (let i = 1; i <= 4; i++) {
        await c.img(s, `${k.toLowerCase()}_sdxl_${i}`, { x: c.T.M + (i - 1) * 3.07, y: 1.7, w: 2.95, h: 2.45 }, { alignX: 'left' });
        await c.img(s, `${k.toLowerCase()}_now_${i}`, { x: c.T.M + (i - 1) * 3.07, y: 4.3, w: 2.95, h: 2.45 }, { alignX: 'left' });
      }
      c.src(s, ['own_img']);
    },
  });
}

// ---------------------------------------------------------------- P5 models by ad task
add({
  id: 'p-modely', name: 'Modely podle reklamních úloh',
  build: async (s, c) => {
    head(s, c, 'Claude Opus 5.5 a GPT-6 Astra podle reklamních úloh', 'Co je doloženo v dokumentaci výrobců k 22. 9. 2026. Čísla výrobců nejsou nezávislá měření. Žádný test neměří kvalitu reklamy ani češtinu.');
    table(s, c, [
      ['Úloha', 'Claude Opus 5.5 (Anthropic)', 'GPT-6 Astra (OpenAI)', 'Co z toho plyne'],
      ['Rešerše se zdroji', 'Vyhledávání na webu ve všech tarifech, Research od Pro. Výrobce: 16 z 18 rešeršních zpráv bez vymyšlených čísel (interní test).', 'Vyhledávání a deep research v ChatGPT. Výrobce: BrowseComp 91,5 %.', 'Oba uvádějí odkazy. Čísla ověřit u původce.'],
      ['Podklady značky', 'Projekty, Claude Design (návrhy, prezentace), konektory Canva, Figma, Adobe.', 'Projekty, ChatGPT Work. Výrobce: nejlepší v dodržování šablon.', 'Data značky leží v cloudu dodavatele.'],
      ['České texty', 'Čeština funguje, rozhraní není česky. Test pro češtinu výrobce nezveřejňuje.', 'Rozhraní i v češtině. Test pro češtinu výrobce nezveřejňuje.', 'Naše ukázka: oba splnili zadání, liší se stylem.'],
      ['Kreativní koncepty', 'Bez měřítka. Výrobce: přirozenější psaní.', 'Interní „Design Tasks“ 50 % (zadání nezveřejněno).', 'Hodnotí lidé a testy na publiku.'],
      ['Analýza dat', 'Spouštění kódu a práce se soubory ve všech tarifech.', 'Analýza dat pomocí kódu v ChatGPT.', 'Přístup k reklamním účtům vyžaduje přihlášení a oprávnění.'],
      ['Obrázky na vstupu', 'Rozumí obrázkům. Podle Anthropicu nepozná, zda obrázek vytvořila AI.', 'Rozumí obrázkům. ScreenSpot-Pro 92,7 % (výrobce).', 'Ani jeden není detektor AI obrázků.'],
      ['Tvorba výstupů', 'Jen text. Obrázky netvoří. Dokumenty přes kód, návrhy v Claude Design.', 'Text. Obrázky kreslí samostatný model Images 2.5. Video OpenAI teď nenabízí (Sora ukončena).', 'Vizuál s Claude vyžaduje jiný generátor.'],
      ['Nástroje a agenti', 'Claude v Chrome (placené tarify), konektory (MCP). AutomationBench 40,0 %.', 'Cloudový prohlížeč v ChatGPT Work, režim agenta. AutomationBench 41,4 %.', 'AutomationBench měří Zapier nezávisle. Oba se ptají před platbou.'],
    ], [1.75, 3.7, 3.55, 3.1], { x: c.T.M, y: 1.7, w: 12.1 }, { size: 10.5 });
    c.src(s, ['anth_opus55', 'oai_astra', 'zapier_ab', 'claude_pricing', 'anth_vision', 'anth_design', 'oai_capab', 'oai_images25', 'oai_sora_end']);
  },
});

// ---------------------------------------------------------------- P6 full outputs of the copy test
add({
  id: 'p-test-texty', name: 'Praktický test: plné výstupy',
  build: async (s, c) => {
    head(s, c, 'Praktický test: zadání a plné výstupy', 'Claude Opus 5.5 (subagent Claude Code, bez nástrojů) a GPT-6 Astra (Codex CLI, bez webu, úsilí high). 22. 9. 2026, jeden běh.');
    const clean = (t) => t.replace(/\*\*/g, '').replace(/^#+ /gm, '').replace(/\n{3,}/g, '\n\n').trim();
    const a = clean(read('_work/tests/llm/opus55_copy.md'));
    const b = clean(read('_work/tests/llm/gpt6astra_copy.md'));
    c.text(s, 'Claude Opus 5.5', c.T.M, 1.65, 5.9, 0.3, { size: 12, bold: true });
    c.text(s, a, c.T.M, 1.95, 5.9, 5.0, { size: 8.5, lsm: 1.0 });
    c.text(s, 'GPT-6 Astra', 6.83, 1.65, 5.9, 0.3, { size: 12, bold: true });
    c.text(s, b, 6.83, 1.95, 5.9, 5.0, { size: 8.5, lsm: 1.0 });
    c.src(s, ['own_llm']);
  },
});

add({
  id: 'p-test-resers', name: 'Praktický test: rešerše a ověření',
  build: async (s, c) => {
    head(s, c, 'Praktický test: rešerše s webem a naše ověření', 'Zadání: tři aktuální, ověřitelné údaje o trhu nealkoholických nápojů v Česku se zdrojem. Každý údaj jsme dohledali v původním zdroji.');
    table(s, c, [
      ['Model', 'Údaj', 'Zdroj uvedený modelem', 'Naše ověření'],
      ['GPT-6 Astra', '85,9 l limonád na obyvatele (2024)', 'ČSÚ, Spotřeba potravin, tab. 1', 'Sedí (ČSÚ PDF, řádek Limonády)'],
      ['GPT-6 Astra', 'Maloobchodní ceny nealka +38 % (1/2020 až 6/2024)', 'ÚOHS, sektorové šetření', 'Sedí (tisková zpráva 8. 4. 2026)'],
      ['GPT-6 Astra', 'Albert, Lidl, Kaufland, Penny, Makro cca 65 až 75 % tržeb', 'ÚOHS', 'Sedí'],
      ['Claude Opus 5.5', '232,7 l minerálek a nealka na obyvatele (2024), +8,9 l', 'ČSÚ, tisková zpráva 1. 12. 2025', 'Sedí'],
      ['Claude Opus 5.5', 'Tržby 35,7 mld. Kč (+0,7 %), objem −1,6 % (52 týdnů do 5. 4. 2026)', 'NIQ via Zboží&Prodej', 'Sedí v článku; data NIQ neveřejná, model to sám uvedl'],
      ['Claude Opus 5.5', 'Značky přes 75 % objemu a 85 % tržeb; 5 řetězců 65 až 75 %', 'ÚOHS', 'Sedí'],
    ], [1.7, 4.2, 2.9, 3.3], { x: c.T.M, y: 1.75, w: 12.1 }, { size: 11 });
    c.text(s, 'Čas běhu není srovnatelný: modely běžely v různých nástrojích s různým nastavením. Výstupy jsou v 04_Podklady/test-modelu.', c.T.M, 5.95, 12.1, 0.5, { size: 11, color: c.T.ink2 });
    c.src(s, ['own_llm', 'csu_spotreba', 'uohs_nealko', 'zap_niq']);
  },
});

// ---------------------------------------------------------------- P7 six areas
add({
  id: 'p-oblasti', name: 'Šest oblastí využití',
  build: async (s, c) => {
    head(s, c, 'Šest oblastí: vstup, úkol AI, výstup, přínos, omezení');
    table(s, c, [
      ['Oblast (kdo)', 'Vstup', 'Úkol AI', 'Výstup', 'Přínos', 'Omezení'],
      ['Průzkum (asistent)', 'Recenze, weby konkurence, statistiky', 'Najde a shrne, uvede zdroje', 'Přehled s odkazy', 'Rychlejší příprava briefu', 'Čísla ověřit u původce'],
      ['Strategie a texty (asistent)', 'Brief, fakta o produktu', 'Koncepty, slogany, varianty s limity', 'Texty ke schválení', 'Mnoho variant za minuty', 'Styl a pravdivost hlídá člověk'],
      ['Obraz, video, hlas (asistent, platforma)', 'Zadání, fotka produktu', 'Vytvoří nebo upraví vizuál, spot, hlas', 'Vizuály a spoty', 'Levnější produkce (Rohlík 400 € proti 300 tis. €, údaj firmy)', 'Vymyšlené nápisy, cizí značky, práva, důvěra publika'],
      ['Varianty a jazyky (asistent, platforma)', 'Hotový vizuál a text', 'Přeloží, přeformátuje', 'Jazykové a formátové verze', 'Jeden podklad pro více trhů', 'Kontrola rodilým mluvčím a právních textů'],
      ['Cílení a rozpočet (platforma)', 'Cíl, rozpočet, data o nákupech', 'Rozhodne komu, kde a za kolik, někdy dopíše texty', 'Běžící kampaň', 'Méně ruční práce (Google: +14 % konverzí, údaj výrobce)', 'Menší kontrola; nezávisle: dodatečné konverze o 16 % dražší'],
      ['Vyhodnocení a CRM (integrace)', 'Exporty, data z e-shopu a CRM', 'Analyzuje, přenáší kontakty a konverze', 'Reporty, kontakty v CRM', 'Rychlé reporty, zpětná vazba pro platformy', 'Ochrana osobních údajů, kvalita dat'],
    ], [2.05, 1.95, 2.1, 1.7, 2.15, 2.15], { x: c.T.M, y: 1.4, w: 12.1 }, { size: 10.5 });
    c.src(s, ['own_llm', 'own_img', 'cc_rohlik', 'g_aimax', 'smec_aimax', 'g_textcust']);
  },
});

// ---------------------------------------------------------------- P8 agent steps
add({
  id: 'p-agent', name: 'Agent: kroky a oprávnění',
  build: async (s, c) => {
    head(s, c, 'Agent od zadání po CRM: data, oprávnění, kontrola');
    table(s, c, [
      ['Krok', 'Způsob', 'Potřebná data', 'Oprávnění', 'Kontrola člověkem', 'Doložená samostatnost'],
      ['1 Zadání a průzkum', 'Asistent s webem', 'Brief, manuál značky, fakta o produktu', 'Účet asistenta', 'Otevřít citované zdroje', 'Návrh plně automaticky'],
      ['2 Text a vizuál', 'Jazykový model, obrazový model', 'Tón značky, fotky produktu, právní limity tvrzení', 'Práva k fotkám a osobám', 'Fakta, čeština, text v obrázku, práva', 'Tvorba automaticky, výrobci doporučují kontrolu'],
      ['3 Varianty', 'Asistent nebo nástroje platforem', 'Limity znaků, formáty, publika', 'Přístup k účtu', 'Výběr variant', 'Platformy některé varianty tvoří a zobrazují samy'],
      ['4 Reklamní systém', 'Klikání v prohlížeči, nebo rozhraní (Meta MCP, Google Ads API)', 'ID účtu, stránka, kreativa, publika, rozpočet', 'Meta: OAuth a ads_mcp_management; Google: projekt Google Cloud', 'Schválení plánu nebo kroků', 'Meta: kampaň vznikne pozastavená; Google MCP jen čte'],
      ['5 Spuštění a rozpočet', 'Člověk, nebo nástroj s potvrzením', 'Platební metoda, rozpočet', 'Vlastník účtu', 'Spuštění a výše rozpočtu', 'Claude v Chrome nesmí platit, ChatGPT se ptá; Meta: aktivace „začne utrácet rozpočet“'],
      ['6 Výsledky do CRM', 'Automatický tok (Zapier, n8n)', 'Kontakty z formulářů, nákupy', 'Zápis do CRM, právní základ', 'Ochrana údajů, kdo smí kontaktovat', 'Po nastavení automaticky'],
    ], [1.75, 2.2, 2.1, 2.0, 1.95, 2.1], { x: c.T.M, y: 1.4, w: 12.1 }, { size: 10 });
    c.text(s, 'Mimo agenty běžných aplikací: TikTok uvádí u svého rozhraní pracovní postupy „bez lidského zásahu v každém kroku“, Amazon kampaně, které „stačí zkontrolovat a schválit“. Každou reklamu navíc před zobrazením kontroluje platforma. Nezávislý test celé cesty jsme nenašli.', c.T.M, 6.05, 12.1, 0.8, { size: 11, color: c.T.ink2 });
    c.src(s, ['m_mcp_tools', 'm_mcp_help', 'g_mcp', 'g_mcp_api', 'a_chrome', 'o_cloudbrowser', 'zapier_int', 'tiktok_mcp', 'amazon_mcp']);
  },
});

// ---------------------------------------------------------------- P9 statistics
add({
  id: 'p-statistiky', name: 'Statistiky a definice',
  build: async (s, c) => {
    head(s, c, 'Použitá a doplňující čísla: co přesně měří');
    table(s, c, [
      ['Údaj', 'Hodnota', 'Období', 'Kdo a kolik', 'Co se měří', 'Zdroj (typ)'],
      ['Firmy používající AI', 'ČR 17,6 %, EU 20,0 %', '2025', 'Firmy s 10+ zaměstnanci', 'Alespoň 1 z 8 technologií AI', 'Eurostat (oficiální)'],
      ['AI v marketingu, prodeji, podpoře', 'ČR 59 %, EU 35 %', '2025', 'Firmy, které AI používají', 'Účel použití', 'Eurostat, ČSÚ (oficiální)'],
      ['Lidé používající generativní AI', 'ČR 35,4 %, EU 32,7 %', '2025, 3 měsíce před průzkumem', 'Lidé 16 až 74 let', 'Použití nástroje', 'Eurostat (oficiální)'],
      ['Agentury používající AI', '95 %', '5 až 8/2024', '60 vedoucích agentur v ČR', 'Alespoň na některé činnosti', 'AKA a APRA (průzkum)'],
      ['Mysleli si, že viděli AI reklamu', '6 z 10, jistě 28 %', '2026', '8 000 lidí, česká internetová populace 15+', 'Vlastní dojem', 'ResSolution Group (průzkum)'],
      ['Pozitivní vztah k AI reklamám', 'manažeři si myslí 82 %, lidé 45 %', '10/2025 až 1/2026', '104 manažerů, 505 lidí 16 až 43 let, USA', 'Postoj', 'IAB (oborový průzkum)'],
      ['Inzerenti s gen. AI nástroji Mety', 'přes 8 mil.', '4/2026', 'Inzerenti Mety', 'Alespoň 1 nástroj', 'Meta (tvrzení provozovatele)'],
    ], [2.3, 2.1, 1.7, 2.4, 1.8, 1.8], { x: c.T.M, y: 1.4, w: 12.1 }, { size: 10.5 });
    c.text(s, 'Nesrovnatelná měření nejsou v jednom grafu. Rok 2022 Eurostat u firem neměřil. Od 2025 přibyla kategorie AI pro obraz, video a zvuk, část nárůstu je proto definiční.', c.T.M, 5.95, 12.1, 0.6, { size: 11, color: c.T.ink2 });
    c.src(s, ['eurostat_ent', 'csu_ent', 'eurostat_ind', 'aka2024', 'ressolution', 'iab_gap', 'm_q1_2026']);
  },
});

// ---------------------------------------------------------------- P10 virtual faces
add({
  id: 'p-tvare', name: 'Virtuální tváře a dropshipping',
  build: async (s, c) => {
    head(s, c, 'Virtuální tváře: přehled a co víme o dropshippingu');
    table(s, c, [
      ['Tvář', 'Typ', 'Kdo ji provozuje', 'Sledující (22. 9. 2026)', 'Doloženo'],
      ['Aitana López', 'Vytvořená AI', 'The Clueless, Barcelona', '404 tis.', 'Bez focení, AI a Photoshop; příjmy až 10 000 €/měsíc jen podle provozovatele'],
      ['Mia Zelu', 'Vytvořená AI', 'Anonymní účet „zeluhouse“', '284 tis.', 'V roce 2025 měla označení AI skryté za „Více“; mnoho diváků ji mělo za skutečnou'],
      ['Lil Miquela', '3D postava (CGI)', 'Brud, od 2021 Dapper Labs', '2 mil.', 'Placená kampaň o leukémii (2025) rozdělila publikum'],
      ['Lu do Magalu', '3D postava a snímání pohybu', 'Magazine Luiza s Ogilvy', '10 mil.', 'Značka: „nikdy nechtěla předstírat, že je člověk“'],
      ['H&M Digital Twin', 'Člověk + AI', 'H&M s firmou Uncut', 'neuvádí se', 'Dvojčata skutečných modelek, označená na obrázku'],
      ['TikTok Symphony', 'Licencovaní herci, nově i AI', 'TikTok pro inzerenty', 'neuvádí se', 'Exporty automaticky označené „AI-generated“'],
      ['Livesport AILU (ČR)', 'Herečka + digitální tvář', 'Livesport', 'neuvádí se', 'Pohyb a herectví skutečné herečky, obličej digitální'],
    ], [2.0, 2.1, 2.3, 1.7, 4.0], { x: c.T.M, y: 1.4, w: 12.1 }, { size: 10.5 });
    c.text(s, 'Dropshipping: Zendrop prodává generátor reklam „vyber produkt, avatara a scénář“. The New York Times a 404 Media (7/2026) popsali AI „lékaře“ a falešné zákazníky prodávající doplňky. Kolik e-shopů nebo dropshipperů to používá, nikdo nezměřil. Žádný konkrétní účet nemáme doložený jako dropshipping.', c.T.M, 5.75, 12.1, 0.9, { size: 11, color: c.T.ink2 });
    c.src(s, ['euronews_aitana', 'ig_aitana', 'mia_zelu', 'miquela', 'magalu_pr', 'hm_group', 'tiktok_symphony', 'mg_livesport', 'zendrop', 'futurism_nyt', 'media404']);
  },
});

// ---------------------------------------------------------------- P11 labelling
add({
  id: 'p-oznacovani', name: 'Označování AI',
  build: async (s, c) => {
    head(s, c, 'Označování AI obsahu k 22. 9. 2026');
    table(s, c, [
      ['Pravidlo', 'Co říká', 'Od kdy'],
      ['AI Act, čl. 50 odst. 4', 'Kdo zveřejní realistický AI obsah (deepfake), který by působil jako skutečný, musí uvést, že je vytvořený nebo upravený AI. Mírnější režim pro zjevně uměleckou či fiktivní tvorbu.', '2. 8. 2026, obsah vytvořený dříve není třeba zpětně označovat'],
      ['AI Act, čl. 50 odst. 2', 'Poskytovatelé generátorů musí výstupy strojově označit.', '2. 8. 2026; pro systémy na trhu před tímto datem do 2. 12. 2026 (nařízení 2026/1744)'],
      ['Pokuty', 'Až 15 mil. € nebo 3 % celosvětového obratu.', ''],
      ['Kodex Evropské komise', 'Dobrovolný kodex pro označování, volitelné ikony EU.', 'zveřejněn 10. 6. 2026'],
      ['Dozor v ČR', 'ČTÚ jako jeden z orgánů dozoru; český zákon o AI jsme ke dni rešerše v seznamu sněmovních tisků nenašli.', 'tisková zpráva ČTÚ 31. 7. 2026'],
      ['Platformy', 'Meta označuje reklamy z vlastních AI nástrojů a od 1. 6. 2026 rozpoznává i cizí; TikTok zamítne neoznačenou AI reklamu.', 'průběžně'],
      ['Samoregulace ČR', 'Kodex reklamy RPR, čl. 3.7: AI používat „s vědomím odpovědnosti“. Povinnost označení nestanoví. Právnička na semináři AKA: archivujte zadání.', 'Kodex 2025; seminář 26. 8. 2026'],
    ], [2.3, 6.8, 3.0], { x: c.T.M, y: 1.4, w: 12.1 }, { size: 10.5 });
    c.src(s, ['eurlex_aiact', 'aiact_faq', 'eurlex_omnibus', 'code_practice', 'ctu_art50', 'meta_ai_labels', 'tiktok_aigc', 'rpr_kodex', 'aka_dolejsova']);
  },
});

// ---------------------------------------------------------------- P12 photo template
add({
  id: 'p-fotky', name: 'Šablona pro vlastní fotky', master: 'FOTO3',
  notes: 'Šablona: klepněte na ikonu obrázku v rámečku a vložte vlastní fotku. Obrázek se ořízne na rozměr rámečku. Totéž platí pro slide 23, kde jsou rámečky už vyplněné dohledanými příklady (klepnout na obrázek, Změnit obrázek, nebo obrázek smazat a vložit nový).',
  build: async (s, c) => {
    c.text(s, 'Šablona: vlastní fotky reklam z okolí', c.T.M, 0.42, 12.1, 0.8, { face: c.T.head, size: 32, bold: true });
    const xs = [c.T.M, 4.85, 9.1];
    xs.forEach((x, i) => {
      s.addShape('rect', { x, y: 1.5, w: 3.63, h: 3.0, fill: { color: 'F3F4F6' }, line: { color: 'C9CCD2', width: 0.75 } });
      c.text(s, 'Místo pro vlastní fotku', x, 2.8, 3.63, 0.4, { size: 14, align: 'center', color: c.T.ink2 });
      c.text(s, 'Kde a kdy vyfoceno', x, 4.65, 3.8, 0.45, { face: c.T.head, size: 20, bold: true });
      c.text(s, 'Co na ní ukazujeme a jak víme, že šlo o AI', x, 5.1, 3.63, 0.8, { size: 14, color: c.T.ink2 });
    });
    c.text(s, 'Původ doložte zdrojem: vyjádření autora, popis postupu, štítek AI nebo metadata. Samotný vzhled nestačí.', c.T.M, 6.2, 12.1, 0.4, { size: 13, bold: true });
  },
});

module.exports = { APPX };
