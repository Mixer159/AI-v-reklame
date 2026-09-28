# Vlastní ukázky: protokol

Všechny obrázky v této složce jsou vlastní ukázky vytvořené AI pro přednášku. Nejde o skutečné reklamy. Značka ZÁTOKA je vymyšlená.

## Srovnání 2023 a dnes (01_srovnani-2023-2026)

- Datum: 22. 9. 2026.
- Model z roku 2023: SDXL 1.0 base (Stability AI, vydán 26. 7. 2023), spuštěný lokálně na Macu M1 Pro přes knihovnu diffusers. 1024 × 1024 px, 30 kroků, CFG 7,0, výchozí plánovač, bez negativního zadání a bez refineru. Seed 1 až 4. Nastavení a časy v `sdxl-1.0/log.json`.
- Dnešní generátor: vestavěný nástroj image_gen v Codex CLI 0.156.0 (OpenAI). Nástroj přesnou verzi modelu neuvádí. Soubory nesou podepsaná metadata C2PA („ChatGPT“, „gpt-image“, zdroj „trainedAlgorithmicMedia“). OpenAI od 8. 9. 2026 nabízí v Codexu ChatGPT Images 2.5. Rozměr nejde zvolit, proto se poměr stran liší.
- Každé zadání 4 pokusy na model. Zadání jsou v `prompts.json` a byla předána doslova (ověřeno v logu relací Codexu).
- Na slidy vybíráme nejlepší ze 4 podle stejných kritérií v tomto pořadí: správnost nápisu, věrohodnost produktu a lidí, kompozice. Všechny pokusy jsou v přílohách P2 až P4 původní delší prezentace a v této složce. Zjednodušená verze z 28. 9. 2026 přílohy nepromítá a přebírá pouze vybrané ukázky.
- Žádný obrázek jsme neretušovali. Výřezy etiket v `../upravene/` jsou jen zvětšené části.

## Úpravy a varianty (02_upravy-a-varianty)

- Stejný nástroj, 22. 9. 2026, jeden pokus na úpravu, bez retuše. Vstupy a zadání jsou v `demos.json` a `D*_log.json`.
- D1: stejná lahev v zimě (vstup T1 pokus 1).
- D2: překlad plakátu do němčiny (vstup T2 pokus 2).
- D3: stejná postava ve dvou nových scénách (reference T3 pokus 2).
- D4: odstranění log a sloganů (vstup T3 pokus 2).

## Co z testu plyne a co ne

Jde o praktickou ukázku s malým počtem pokusů, ne o obecný benchmark. Model z roku 2023 jsme spustili dnes, takže jde o jeho výstupy, ne o dobové obrázky. Dobové ukázky z let 2022 a 2023 jsou zvlášť ve složce `../prevzate/historie-data`.
