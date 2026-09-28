# Zdroje zjednodušené prezentace

Revize 28. 9. 2026. Číslování platí pro novou 17slidovou verzi. Původní 37slidová verze má samostatný registr `Zdroje-a-vizualy.md`.

## Co se změnilo

Historie předchází porovnání obrázků. Hlavní část má dva generátorové testy, jednu úpravu prostředí a jednu dvojici videí. Na plátně zůstává jediný graf se dvěma hodnotami a tabulka se třemi řádky. Podrobné modelové tabulky, graf OSWorld, rozpočtová srovnání, blok virtuálních influencerů, právní přehled a původní přílohy se nepromítají.

## Rozsah ověření a nejistoty

- Vlastní ukázky přebíráme z místních výstupů a protokolu z 22. 9. 2026. Nebyly znovu generovány. SDXL je model z roku 2023 spuštěný v roce 2026. U rozhraní OpenAI není přesná verze generátoru doložena, proto ji neuvádíme.
- Čtyři pokusy a výběr jsou praktická demonstrace. Nejde o obecný benchmark ani o shodné technické podmínky obou modelů.
- U videí srovnáváme historické zveřejněné ukázky stejného námětu, nikoli kontrolovaný experiment.
- Údaj 40+ tvůrců Coca-Coly je potvrzený na webu Silverside, ale nepodařilo se ověřit ho nezávislým auditem. Ve slidu i poznámkách je připsaný studiu.
- Graf využívá původní CSV Eurostatu, znovu porovnané s jeho API dne 28. 9. 2026. Rok 2025: Česko 17,60 %, EU 19,95 %. Odpověď API je uložená v `_work/revision/eurostat-2025.json`. Jde o podniky s alespoň 10 zaměstnanci v NACE C až J, L až N a 95.1, ne o všechny firmy ani jen o využití v reklamě. Přímé otevření původního PDF ČSÚ ve webovém nástroji selhalo; údaj ověřilo API Eurostatu.
- Vyřazená tvrzení z původní dlouhé verze nejsou touto revizí znovu ověřena. Zdroje a staré výstupy zůstávají pro případné dohledání.

## Zdroje podle slidů

### 1. Umělá inteligence v reklamě

Vlastní struktura výkladu nebo pracovní doporučení.


### 2. Začalo to dávno před ChatGPT

- [Artificial Intelligence (AI) Coined at Dartmouth](https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth). Dartmouth.
- [A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence](http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf). McCarthy, Minsky, Rochester, Shannon.
- [Deep Blue](https://www.ibm.com/history/deep-blue). IBM.
- [Get more powerful bid automation with new AdWords Smart Bidding](https://blog.google/products-and-platforms/products/ads/more-powerful-bid-automation-with-smart-bidding/). Google / Anthony Chavez.
- [Introducing ChatGPT](https://openai.com/index/chatgpt). OpenAI.
- [Hierarchical Text-Conditional Image Generation with CLIP Latents (DALL-E 2), obr. 16](https://arxiv.org/abs/2204.06125). Ramesh, Dhariwal, Nichol, Chu, Chen (OpenAI), arXiv 2204.06125.

### 3. Stejné zadání pro dva generátory

- Vlastní srovnání obrazových modelů: SDXL 1.0 a generátor OpenAI v Codexu, stejná zadání, 4 pokusy. Vlastní tvorba (protokol v 04_Podklady/obrazky/vlastni-ukazky).
- [Announcing SDXL 1.0](https://stability.ai/news/stable-diffusion-sdxl-1-announcement). Stability AI.

Obrázky:
- Lahev s nápisem „ZÀTKA“, zadání T1, seed 1 ze 4. Vlastní ukázka: model SDXL 1.0 (Stability AI, červenec 2023) spuštěný lokálně 22. 9. 2026, licence modelu CreativeML Open RAIL++-M. Vlastní tvorba. Soubor: `_work/tests/sdxl/T1_seed1.png`.
- Lahev ZÁTOKA u jezera, zadání T1, pokus 1 ze 4. Vlastní ukázka vytvořená generátorem OpenAI v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image), 22. 9. 2026. Vlastní tvorba. Soubor: `04_Podklady/obrazky/vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/T1_pokus1.png`.

### 4. Rozdíl je vidět i na češtině

- Vlastní srovnání obrazových modelů: SDXL 1.0 a generátor OpenAI v Codexu, stejná zadání, 4 pokusy. Vlastní tvorba (protokol v 04_Podklady/obrazky/vlastni-ukazky).

Obrázky:
- Plakát pekárny, zadání T2, seed 4 ze 4: nadpis „CERRASTVI KRU KAKA ROILKY“. Vlastní ukázka: model SDXL 1.0 (Stability AI, červenec 2023) spuštěný lokálně 22. 9. 2026, licence modelu CreativeML Open RAIL++-M. Vlastní tvorba. Soubor: `_work/tests/sdxl/T2_seed4.png`.
- Plakát pekárny „Čerstvé rohlíky každé ráno“, zadání T2, pokus 2 ze 4. Vlastní ukázka vytvořená generátorem OpenAI v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image), 22. 9. 2026. Vlastní tvorba. Soubor: `04_Podklady/obrazky/vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/T2_pokus2.png`.

### 5. Jeden produkt, dvě prostředí

- Vlastní srovnání obrazových modelů: SDXL 1.0 a generátor OpenAI v Codexu, stejná zadání, 4 pokusy. Vlastní tvorba (protokol v 04_Podklady/obrazky/vlastni-ukazky).

Obrázky:
- Lahev ZÁTOKA u jezera, zadání T1, pokus 1 ze 4. Vlastní ukázka vytvořená generátorem OpenAI v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image), 22. 9. 2026. Vlastní tvorba. Soubor: `04_Podklady/obrazky/vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/T1_pokus1.png`.
- Úprava: stejná lahev v zimních horách. Vlastní ukázka vytvořená generátorem OpenAI v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image), 22. 9. 2026. Vlastní tvorba. Soubor: `04_Podklady/obrazky/vlastni-ukazky/02_upravy-a-varianty/D1_zatoka-v-zime.png`.

### 6. Dva roky rozdílu ve videu

- [Will Smith eating spaghetti (ModelScope text2video, u/chaindrop)](https://commons.wikimedia.org/wiki/File:Will_Smith_Eating_Spaghetti_Original.webm). Reddit (archiv) a Wikimedia Commons.
- [Google’s Veo 3 Nails the Infamous Will Smith Eating Spaghetti Test](https://petapixel.com/2025/05/28/googles-veo-3-nails-the-infamous-will-smith-eating-spaghetti-test/). PetaPixel / Pesala Bandara (klip: Javi Lopez, 22. 5. 2025).

Obrázky:
- „Will Smith eating spaghetti“, ModelScope, březen 2023 (snímek). u/chaindrop. Commons: PD-algorithm, osobnostní práva; AI obraz skutečné osoby. Soubor: `04_Podklady/obrazky/upravene/will-smith-2023-poster.png`.
- Stejné zadání ve Veo 3, květen 2025 (snímek). Javi Lopez. Citace; soubor na Commons navržen ke smazání; AI obraz skutečné osoby. Soubor: `04_Podklady/obrazky/upravene/will-smith-2025-poster.png`.

### 7. Papežova bunda, která neexistovala

- [The swagged-out pope is an AI fake — and an early glimpse of a new reality](https://www.theverge.com/2023/3/27/23657927/ai-pope-image-fake-midjourney-computer-generated-aesthetic). The Verge / James Vincent.
- [The Pope Drip (r/midjourney, u/trippy_art_special)](https://web.archive.org/web/20230325175224/https://www.reddit.com/r/midjourney/comments/120vhdc/the_pope_drip/). Reddit, archivní kopie Wayback Machine.

Obrázky:
- Papež v péřové bundě, Midjourney, 24. 3. 2023 (1 ze 4). u/trippy_art_special (Pablo Xavier). Licence neuvedena; AI obraz skutečné osoby, použito jako zpravodajský příklad s označením. Soubor: `04_Podklady/obrazky/prevzate/historie-data/2023-03_pope-puffer-jacket_midjourney_reddit-original-1of4.jpg`.

### 8. Kde dnes AI v reklamě pomáhá

- [Get more powerful bid automation with new AdWords Smart Bidding](https://blog.google/products-and-platforms/products/ads/more-powerful-bid-automation-with-smart-bidding/). Google / Anthony Chavez.
- Vlastní srovnání obrazových modelů: SDXL 1.0 a generátor OpenAI v Codexu, stejná zadání, 4 pokusy. Vlastní tvorba (protokol v 04_Podklady/obrazky/vlastni-ukazky).

### 9. AI používá téměř pětina českých firem

- [Artificial intelligence by size class of enterprise (isoc_eb_ai); zpráva „20% of EU enterprises use AI technologies“](https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table). Eurostat.

### 10. Heinz z AI udělal nápad na reklamu

- [A.I Ketchup, Out-of-Home Series, 2022](https://www.appliedartsmag.com/winners/advertising/a-i-ketchup-w495/?year=2022). Applied Arts, soutěžní přihláška Rethink.
- [A.I Ketchup, Content-Social/Viral/Promotional Series, 2023](https://www.appliedartsmag.com/winners/design/a-i-ketchup-w246/?year=2023). Applied Arts, soutěžní přihláška Rethink.
- [Heinz Taps State-of-the-Art AI to Design Its Next Ad Campaign](https://www.adweek.com/commerce/heinz-taps-ai-design-next-ad-campaign/). Adweek / Patrick Kulp.

Obrázky:
- Heinz „A.I. Ketchup“ 2022, vizuály z DALL-E 2. Kraft Heinz / Rethink (via Adweek). Autorsky chráněno; použito jako citace s uvedením zdroje (§ 31 autorského zákona). Soubor: `04_Podklady/obrazky/prevzate/historie-data/2022-08_heinz-ai-ketchup_dalle2_via-adweek.jpg`.

### 11. Kolik lidí pracovalo na AI reklamě?

- [Coca-Cola Holidays 2024 (případová studie)](https://www.silverside.ai/projects/coca-cola). Silverside AI.

Obrázky:
- Coca-Cola „Holidays Are Coming“ 2024, kamiony ve vesnici. The Coca-Cola Company / Silverside AI. Autorsky chráněno; použito jako citace s uvedením zdroje (§ 31 autorského zákona). Soubor: `04_Podklady/obrazky/prevzate/kampane-influenceri/coca-cola-2024-silverside-trucks-village-01.jpg`.

### 12. Co u výstupu kontroluje člověk

Vlastní struktura výkladu nebo pracovní doporučení.


### 13. AI si může domyslet vlastnosti výrobku

- Vlastní srovnání obrazových modelů: SDXL 1.0 a generátor OpenAI v Codexu, stejná zadání, 4 pokusy. Vlastní tvorba (protokol v 04_Podklady/obrazky/vlastni-ukazky).

Obrázky:
- Výřez etikety, zadání T1, pokus 3: slovenské texty a „bez konzervantov“. Vlastní ukázka vytvořená generátorem OpenAI v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image), 22. 9. 2026. Vlastní tvorba (výřez). Soubor: `04_Podklady/obrazky/upravene/T1_dnes_pokus3_etiketa_vyrez.png`.

### 14. Agent propojí více kroků práce

- [Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku](https://www.anthropic.com/news/3-5-models-and-computer-use). Anthropic.

### 15. Který obrázek vytvořila AI?

- [Rohlik.cz má vánoční spot za deset tisíc korun, kompletně generovaný AI](https://www.mediar.cz/galerie-reklamy/rohlik-cz-ma-vanocni-spot-za-deset-tisic-korun-kompletne-generovany-ai/). Médiář.
- [Loni stálo vánoční video Rohlíku 7 milionů, letos stačil jeden člověk, umělá inteligence a 10 tisíc korun](https://cc.cz/loni-stalo-vanocni-video-rohliku-7-milionu-letos-stacil-jeden-clovek-umela-inteligence-a-10-tisic-korun/). CzechCrunch.
- [Praha Třebešín Zvěřinova auto Rohlík.jpg](https://commons.wikimedia.org/wiki/File:Praha_Trebesin_Zverinova_auto_Rohlik.jpg). JiriMatejicek, Wikimedia Commons.

Obrázky:
- Rohlík, vánoční spot 2025 (snímek). Rohlik Group (via CzechCrunch). Autorsky chráněno; použito jako citace s uvedením zdroje (§ 31 autorského zákona). Soubor: `04_Podklady/obrazky/prevzate/cesko-rozpoznavani/rohlik-vanoce-ai-2025_czechcrunch.jpg`.
- Skutečná fotografie auta Rohlík, Praha-Třebešín 2022 (SPZ rozmazány námi). JiriMatejicek, Wikimedia Commons. CC BY-SA 3.0; upraveno (rozmazané SPZ), úprava šířena pod stejnou licencí. Soubor: `04_Podklady/obrazky/prevzate/cesko-rozpoznavani/rohlik-auto-realne-foto-2022_commons_spz-rozmazane.jpg`.

### 16. Původ obou obrázků je doložený

- [Rohlik.cz má vánoční spot za deset tisíc korun, kompletně generovaný AI](https://www.mediar.cz/galerie-reklamy/rohlik-cz-ma-vanocni-spot-za-deset-tisic-korun-kompletne-generovany-ai/). Médiář.
- [Loni stálo vánoční video Rohlíku 7 milionů, letos stačil jeden člověk, umělá inteligence a 10 tisíc korun](https://cc.cz/loni-stalo-vanocni-video-rohliku-7-milionu-letos-stacil-jeden-clovek-umela-inteligence-a-10-tisic-korun/). CzechCrunch.
- [Praha Třebešín Zvěřinova auto Rohlík.jpg](https://commons.wikimedia.org/wiki/File:Praha_Trebesin_Zverinova_auto_Rohlik.jpg). JiriMatejicek, Wikimedia Commons.

Obrázky:
- Rohlík, vánoční spot 2025 (snímek). Rohlik Group (via CzechCrunch). Autorsky chráněno; použito jako citace s uvedením zdroje (§ 31 autorského zákona). Soubor: `04_Podklady/obrazky/prevzate/cesko-rozpoznavani/rohlik-vanoce-ai-2025_czechcrunch.jpg`.
- Skutečná fotografie auta Rohlík, Praha-Třebešín 2022 (SPZ rozmazány námi). JiriMatejicek, Wikimedia Commons. CC BY-SA 3.0; upraveno (rozmazané SPZ), úprava šířena pod stejnou licencí. Soubor: `04_Podklady/obrazky/prevzate/cesko-rozpoznavani/rohlik-auto-realne-foto-2022_commons_spz-rozmazane.jpg`.

### 17. AI zrychluje tvorbu. Výsledek potřebuje úsudek.

Vlastní struktura výkladu nebo pracovní doporučení.


## Fotografie a licence

Fotografie auta od JiriMatejicek: [původní soubor](https://commons.wikimedia.org/wiki/File:Praha_Trebesin_Zverinova_auto_Rohlik.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). Na použité kopii jsou rozmazané registrační značky. Upravený obrázek je dále pod CC BY-SA 3.0; licence se tím automaticky nevztahuje na celou prezentaci.

Stejné obrázky se opakují pouze tam, kde je to nutné k porovnání původního stavu s úpravou nebo při odhalení hlasování.
