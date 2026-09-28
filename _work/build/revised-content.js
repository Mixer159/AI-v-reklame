// Content for the shorter talk. Notes, the source register and the PPTX share
// this order so the presenter never has to reconcile different slide numbers.
const SLIDES = [
  {
    id: 'cover', title: 'Umělá inteligence v reklamě', seconds: 30,
    say: [
      'Nejdřív se krátce vrátíme do historie. Potom si na obrázcích ukážeme, co se změnilo, a projdeme, kde dnes AI pomáhá při tvorbě reklamy.',
      'Na konci si zkusíme dvě ukázky sami posoudit. Nejde o přehled všech nástrojů, ale o to, abychom rozuměli jejich možnostem a věděli, co si u výsledku ověřit.',
    ], cue: 'Klidný úvod. Konkrétní reklamy přijdou až po historii a obrazových srovnáních.', sources: [],
  },
  {
    id: 'history', title: 'Začalo to dávno před ChatGPT', seconds: 85,
    say: [
      'Rok 1956 se běžně bere jako začátek AI coby výzkumného oboru. V Dartmouthu se tehdy sešli vědci, kteří chtěli zkoumat, jak stroje mohou napodobit některé schopnosti lidské inteligence. Samotný název je už v návrhu setkání z roku 1955.',
      'V roce 1997 porazil počítač Deep Blue mistra světa Garriho Kasparova v šestipartiovém šachovém zápase. Zajímavost: podle IBM dokázal vyhodnotit přibližně 200 milionů pozic za sekundu. Byl to specializovaný systém pro šachy.',
      'V reklamě se AI dlouho projevovala hlavně v pozadí. Google v roce 2016 představil název Smart Bidding pro automatické nabídky založené na strojovém učení. Rok 2022 pak přinesl DALL-E 2 a veřejný ChatGPT. Tvorbu začali zkoušet i lidé bez programování.',
    ], cue: 'Postupovat zleva doprava. Jde o vybrané milníky, nikoli časovou osu v přesném měřítku.',
    sources: ['dartmouth_history', 'dartmouth', 'deepblue', 'smartbid2016', 'chatgpt2022', 'dalle2paper'],
  },
  {
    id: 'product', title: 'Stejné zadání pro dva generátory', seconds: 60,
    say: [
      'Zadání znělo: reklamní obrázek lahve limonády ZÁTOKA u jezera při západu slunce. Značka je vymyšlená. Vlevo je SDXL 1.0 vydaný v roce 2023, vpravo generátor OpenAI použitý v září 2026.',
      'Oba jsme spustili 22. září 2026 se stejným textovým zadáním. Každý měl čtyři pokusy, vybírali jsme podle stejných kritérií. Nejde tedy o dobový snímek ani o obecný test všech modelů.',
      'Nejdřív si všimněte světla a kompozice. Potom se podívejte na název na etiketě. U novějšího nástroje je přesnější. Přesnou verzi jeho obrazového modelu použité rozhraní neuvádělo.',
    ], cue: 'Nechat několik sekund jen na prohlédnutí. Ukázat na etikety. Technické nastavení je v původním protokolu.',
    sources: ['own_img', 'sdxl'], visuals: ['t1_sdxl', 't1_now'],
  },
  {
    id: 'lettering', title: 'Rozdíl je vidět i na češtině', seconds: 50,
    say: [
      'Tentokrát jsme chtěli plakát pekárny s nadpisem Čerstvé rohlíky každé ráno. Vlevo je výstup staršího modelu, vpravo novějšího generátoru.',
      'Pečivo a světlo vypadají přesvědčivě na obou obrázcích. Nadpis ale starší model komolí. Novější nástroj zvládl hlavní nadpis i s diakritikou ve všech čtyřech našich pokusech.',
      'To ještě neznamená hotový plakát. Nástroj přidal i vlastní drobné nápisy. Při přípravě skutečné reklamy proto přečteme všechno, co je na obrázku napsané.',
    ], cue: 'Porovnat jen hlavní nadpis. Nečíst celé zadání a nevysvětlovat každý detail fotografie.',
    sources: ['own_img'], visuals: ['t2_sdxl', 't2_now'],
  },
  {
    id: 'variation', title: 'Jeden produkt, dvě prostředí', seconds: 45,
    say: [
      'Další možností je upravit už vytvořený obrázek. Z původní letní scény jsme chtěli udělat zimní variantu a zachovat lahev.',
      'Vpravo je výsledek jednoho zadání s přiloženou referencí. Pro kampaň se tak dá rychle zkoušet jiné prostředí nebo sezonní varianta. Před použitím ale vždy porovnáme tvar produktu, logo a etiketu s originálem.',
      'Oba obrázky jsou naše AI ukázky fiktivní limonády, nikoli fotografie prodávaného výrobku.',
    ], cue: 'Krátce ukázat původní obrázek vlevo a změnu prostředí vpravo.',
    sources: ['own_img'], visuals: ['t1_now', 'd1'],
  },
  {
    id: 'video', title: 'Dva roky rozdílu ve videu', seconds: 55,
    say: [
      'Možná znáte internetovou ukázku Will Smith jí špagety. Vlevo je klip z března 2023 vytvořený pomocí ModelScope. Vpravo je zpracování stejného námětu ve Veo 3 z května 2025.',
      'Podívejte se na obličej, ruce a pohyb jídla. Tenhle námět se stal oblíbenou ukázkou vývoje generovaného videa. Nejde o standardizovaný test, protože neznáme stejné podmínky tvorby obou klipů.',
      'Oba klipy jsou vygenerované. Skutečný herec v nich nehraje.',
    ], cue: 'V režimu prezentace kliknout na levý klip, potom na pravý. Přibližně 6 a 8 sekund. V PDF jsou statické snímky.',
    sources: ['ws2023', 'ws2025'], visuals: ['ws23', 'ws25'],
  },
  {
    id: 'pope', title: 'Papežova bunda, která neexistovala', seconds: 45,
    say: [
      'Na jaře 2023 se po internetu rozšířil obrázek papeže Františka v bílé péřové bundě. Vznikl v Midjourney a lidé ho sdíleli i jako skutečnou fotografii.',
      'Na první pohled funguje: známý člověk, ulice, módní fotografie. Právě tak se přesvědčivý obrázek může dostat dál, aniž by někdo ověřil jeho původ.',
      'Je to historická ukázka AI obrazu. K tomu, jak původ ověřovat, se vrátíme na konci.',
    ], cue: 'Lehké odlehčení po srovnáních. Případně nechat publikum zvednout ruku, kdo obrázek zná.',
    sources: ['verge_pope', 'pope_reddit'], visuals: ['pope'],
  },
  {
    id: 'uses', title: 'Kde dnes AI v reklamě pomáhá', seconds: 75,
    say: [
      'Obrázky jsou nejviditelnější část. AI ale pomáhá i před jejich vznikem a po zveřejnění kampaně.',
      'V přípravě umí shrnout dodané podklady nebo navrhnout varianty sdělení. Při tvorbě vznikají texty, obrázky, video, překlady a různé formáty. V reklamním systému potom modely odhadují, komu reklamu zobrazit a kolik v aukci nabídnout.',
      'Při vyhodnocení může AI pomoci shrnout výsledky z dat, která má k dispozici. Každý krok potřebuje jiné nástroje a vstupy. Samotný chat nemá automaticky přístup k reklamnímu účtu nebo firemním výsledkům.',
    ], cue: 'U každého kroku jeden konkrétní příklad. Nevyjmenovávat značky všech dostupných nástrojů.',
    sources: ['smartbid2016', 'own_img'],
  },
  {
    id: 'adoption', title: 'AI používá téměř pětina českých firem', seconds: 45,
    say: [
      'Pro představu o rozšíření stačí jedno srovnání. V roce 2025 používalo některou technologii AI přibližně 18 procent českých podniků a 20 procent podniků v Evropské unii.',
      'Jde o podniky s alespoň deseti zaměstnanci ve vybraných odvětvích. Číslo nezahrnuje všechny živnostníky a neříká, kolik firem tvoří AI reklamu. Měří jakékoli sledované využití AI.',
      'V grafu jsou hodnoty zaokrouhlené. Zdrojové hodnoty jsou 17,60 procenta pro Česko a 19,95 procenta pro EU.',
    ], cue: 'Vysvětlit nejprve, koho údaj zahrnuje. Nepřidávat další procenta ani časové řady.',
    sources: ['eurostat_ent'],
  },
  {
    id: 'heinz', title: 'Heinz z AI udělal nápad na reklamu', seconds: 50,
    say: [
      'V kampani A.I. Ketchup z roku 2022 se Heinz s agenturou Rethink ptal generátoru DALL-E 2, jak vypadá kečup.',
      'Mnoho zveřejněných obrázků připomínalo známou lahev Heinz. Značka z toho udělala samotnou myšlenku kampaně a zapojila i náměty od fanoušků.',
      'To je na ukázce zajímavé: podivné nápisy a nedokonalost vizuálů byly součástí nápadu. Kampaň nepředkládá nezávislý důkaz, že AI nějakou značku preferuje. Ukazuje, jak tvůrci využili vybrané výstupy.',
    ], cue: 'Ponechat obrázku prostor. Nepřidávat výsledky prodeje ani čísla z jiných kampaní Heinz.',
    sources: ['heinz_awards2022', 'heinz_awards2023', 'adweek_heinz'], visuals: ['heinz'],
  },
  {
    id: 'coke', title: 'Kolik lidí pracovalo na AI reklamě?', seconds: 55,
    say: [
      'Tohle je vánoční reklama Coca-Coly z roku 2024 od studia Silverside. Přestože využívala AI generování, vznikala prací celé skupiny lidí.',
      'Studio uvádí více než čtyřicet tvůrců. Patřili mezi ně výtvarníci, animátoři, art directoři a hudebníci. Číslo se vztahuje k této konkrétní produkci.',
      'Je to údaj samotného studia, nikoli nezávislý audit. Dobře ale ilustruje, že za označením AI reklama se může skrývat rozsáhlá lidská práce na výběru a zpracování výsledků.',
    ], cue: 'Jediné číslo na slidu. Nevracet se k původnímu srovnání rozpočtů a rychlosti produkce.',
    sources: ['silverside'], visuals: ['coke24'],
  },
  {
    id: 'table', title: 'Co u výstupu kontroluje člověk', seconds: 65,
    say: [
      'U tří běžných výstupů stačí pamatovat na jednu hlavní kontrolu.',
      'U textu kontrolujeme fakta a to, co skutečně nabízíme. U obrázku porovnáváme podobu produktu a značky s originálem. U kampaně hlídáme, jaký má cíl a kolik smí utratit.',
      'Tabulka je naše pracovní doporučení pro prezentaci, nikoli popis toho, co za nás automaticky zaručí konkrétní aplikace. Zbytek podrobností má smysl řešit až u konkrétního úkolu.',
    ], cue: 'Projít tři řádky. Připravit přechod na konkrétní chybu v etiketě.', sources: [],
  },
  {
    id: 'invented', title: 'AI si může domyslet vlastnosti výrobku', seconds: 55,
    say: [
      'Vraťme se k naší limonádě. Tohle je zvětšený detail třetího pokusu novějšího generátoru. Není to stejný pokus, který byl před chvílí na srovnávacím slidu.',
      'Na etiketě přibylo slovenské tvrzení bez konzervantov. Nikdo ho do zadání nenapsal a pro fiktivní výrobek nemáme žádné podklady, které by ho potvrzovaly.',
      'Na první pohled je to drobnost, na skutečném obalu by ale šlo o konkrétní slib zákazníkovi. Proto je čtení drobného textu součástí kontroly každého návrhu.',
    ], cue: 'Ukázat na skutečný nápis ve výřezu. Nedělat z jednoho pokusu statistiku spolehlivosti.',
    sources: ['own_img'], visuals: ['t1_now3_label'],
  },
  {
    id: 'agents', title: 'Agent propojí více kroků práce', seconds: 60,
    say: [
      'Agent je systém, který používá model a nástroje k provedení více kroků. Podle dostupného připojení může například načíst podklady, připravit návrh a uložit ho do aplikace.',
      'Na obrázku je námi navržený pracovní postup pro reklamu: zadání, návrh, kontrola člověkem a teprve potom spuštění. Zvýrazněné schválení a nastavení rozpočtu je naše doporučená kontrola.',
      'Není to záznam provedeného testu celé kampaně ani příslib, že každý agent umí sám obsloužit každý reklamní systém. Schopnosti závisejí na konkrétních nástrojích a oprávněních.',
    ], cue: 'Vysvětlit princip na jedné větě. Technické zkratky, rozhraní a žebříčky sem nepatří.',
    sources: ['anth_cu2024'],
  },
  {
    id: 'quiz', title: 'Který obrázek vytvořila AI?', seconds: 50,
    say: [
      'Na závěr dvě ukázky ze stejného světa rozvozu potravin. Který obrázek podle vás vznikl pomocí AI?',
      'Hlasujte pro A, B, oba, nebo žádný. Potom se podíváme, co k jejich původu říkají zdroje.',
    ], cue: 'Nechat přibližně 20 sekund na prohlédnutí a hlasování. Řešení neprozrazovat před dalším slidem. Zdroje jsou záměrně až na odhalení a v poznámkách.',
    sources: ['mediar_rohlik', 'cc_rohlik', 'commons_car'], visuals: ['rohlik', 'car'],
  },
  {
    id: 'reveal', title: 'Původ obou obrázků je doložený', seconds: 65,
    say: [
      'A je z vánočního spotu Rohlíku z roku 2025. Firma popsala, že spot vznikl pomocí AI, a její vyjádření zveřejnil Médiář. Fotografie auta B pochází z Wikimedia Commons, pořídil ji JiriMatejicek v roce 2022. Registrační značky jsme na převzatém obrázku rozmazali.',
      'Správná odpověď je tedy A. Doložili jsme ji vyjádřením tvůrce a původním záznamem fotografie. Samotný dojem z rukou, světla nebo textu by nám takovou jistotu nedal.',
      'Když je původ důležitý, hledáme autora, popis vzniku a originální soubor. Když podklady nemáme, necháme výsledek otevřený.',
    ], cue: 'Obrázky zůstávají na stejném místě jako při hlasování. Změní se pouze označení a krátké zdroje.',
    sources: ['mediar_rohlik', 'cc_rohlik', 'commons_car'], visuals: ['rohlik', 'car'],
  },
  {
    id: 'close', title: 'AI zrychluje tvorbu.\nVýsledek potřebuje úsudek.', seconds: 35,
    say: [
      'Viděli jsme, jak se AI posunula od specializovaných úloh k textu, obrazu a propojeným pracovním krokům. V reklamě nám umožňuje rychle zkoušet nápady a připravovat varianty.',
      'Na člověku zůstává výběr, ověření faktů a rozhodnutí, co pustit ven. A když posuzujeme cizí obrázek, pátráme po jeho původu.',
      'Děkujeme. Co vás na ukázkách nejvíc překvapilo?',
    ], cue: 'Zůstat na závěru a otevřít diskusi. Prezentace nemá další promítané přílohy.', sources: [],
  },
];

const EXTRA_SOURCES = {
  dartmouth_history: { short: 'Dartmouth', title: 'Artificial Intelligence (AI) Coined at Dartmouth', pub: 'Dartmouth', url: 'https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth', type: 'primary' },
  deepblue: { short: 'IBM', title: 'Deep Blue', pub: 'IBM', url: 'https://www.ibm.com/history/deep-blue', type: 'primary' },
  heinz_awards2022: { short: 'Applied Arts 2022', title: 'A.I Ketchup, Out-of-Home Series, 2022', pub: 'Applied Arts, soutěžní přihláška Rethink', url: 'https://www.appliedartsmag.com/winners/advertising/a-i-ketchup-w495/?year=2022', type: 'maker' },
  heinz_awards2023: { short: 'Applied Arts 2023', title: 'A.I Ketchup, Content-Social/Viral/Promotional Series, 2023', pub: 'Applied Arts, soutěžní přihláška Rethink', url: 'https://www.appliedartsmag.com/winners/design/a-i-ketchup-w246/?year=2023', type: 'maker' },
};

module.exports = { SLIDES, EXTRA_SOURCES };
