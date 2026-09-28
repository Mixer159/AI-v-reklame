# Umělá inteligence v reklamě: podklady k vystoupení

## Aktuální zjednodušená verze, 28. 9. 2026

K promítání použijte [nový PowerPoint](01_Prezentace/Umela-inteligence-v-reklame_zjednodusena.pptx) nebo [nové PDF](01_Prezentace/Umela-inteligence-v-reklame_zjednodusena.pdf).

17 slidů, orientačně 15 až 17 minut včetně ukázek a krátkého hlasování, bez závěrečné diskuse. Nová posloupnost: krátká historie, srovnání obrázků, dnešní využití, příklady kampaní, kontrola výstupu a hlasování.

- PowerPoint obsahuje poznámky řečníka a dvě vložená videa na slidu 6. Spouštějí se kliknutím v režimu prezentace.
- PDF obsahuje místo videí statické náhledy.
- [Zkrácený scénář](02_Scenar/Umela-inteligence-v-reklame_scenar_zjednodusena.md) a [zdroje podle nového číslování](03_Zdroje/Zdroje_zjednodusena.md) odpovídají nové verzi.
- Graf má dvě hodnoty pro rok 2025, tabulka tři řádky. Technické podrobnosti jsou v poznámkách; dlouhé přílohy se v nové verzi nepromítají.

Generátor nové verze: `_work/build/revised.js`, obsah a poznámky: `_work/build/revised-content.js`. Příkaz `bash _work/build/rebuild-revised.sh` sestaví a zkontroluje PPTX i PDF. Výstupy jsou ve složce `01_Prezentace`, pracovní náhledy a protokoly v `_work/revision`.

## Původní delší verze, zachovaná pro dohledání

Soubory bez přípony `_zjednodusena` jsou původní. Stav rešerše: 22. 9. 2026. Délka: 24 hlavních slidů a 13 příloh, plán hlavní části 24:55 min včetně ukázek, hlasování a přechodů, bez diskuse. Původní scénář DOCX/PDF má původní číslování.

| Složka | Obsah |
|---|---|
| 01_Prezentace | Nový PPTX 16:9 a PDF; původní delší soubory zůstávají zachované |
| 02_Scenar | Nový scénář v Markdownu; původní scénář v DOCX a PDF |
| 03_Zdroje | Zdroje a vizuály (XLSX a MD, přiřazení ke slidům), ověření hlavních tvrzení, podkladové rešerše subagentů |
| 04_Podklady | Převzaté a vlastní obrázky, skici (SVG a PNG), data grafů (CSV), výstupy testu modelů |
| _work | Skripty, ze kterých se vše generuje (build/), testy a náhledy |

V původní verzi: slide 23 má tři rámečky s dohledanými příklady. Obrázek vyměníte přes Změnit obrázek. Prázdná šablona je příloha P13.

Znovu sestavení původní verze: `_work/build`, příkazy `node deck.js`, `python3 postprocess.py out/Umela-inteligence-v-reklame.pptx`, `node script.js`, `python3 register.py`.
