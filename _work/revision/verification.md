# Kontrola zjednodušené verze, 28. 9. 2026

## Výstupy

- `01_Prezentace/Umela-inteligence-v-reklame_zjednodusena.pptx`, 17 slidů, poznámky u všech slidů, dvě videa na slidu 6.
- `01_Prezentace/Umela-inteligence-v-reklame_zjednodusena.pdf`, 17 stran, statické náhledy videí.
- `02_Scenar/Umela-inteligence-v-reklame_scenar_zjednodusena.md`, stejná osnova i poznámky, orientační plán 15:25 bez závěrečné diskuse.
- `03_Zdroje/Zdroje_zjednodusena.md`, přiřazení tvrzení a vizuálů k novému číslování, zdroje a nejistoty.

Původní PPTX, PDF, DOCX a původní generátor nebyly přepsány. Rozcestník odlišuje starý scénář od nové prezentace.

## Výsledek

- Původních 24 hlavních slidů a 13 příloh nahrazuje 17 hlavních slidů bez promítaných příloh.
- Editovatelný text na hlavních slidech klesl z 1 772 na 392 slov (včetně zdrojových řádků, mimo text uvnitř obrázků a grafu). Medián klesl ze 79 na 25 slov.
- Všech 17 slidů vizuálně prohlédnuto v renderu 1280 × 720. Opravené slidy 2 a 11 znovu prohlédnuty po exportu. Ostatních 15 výsledných náhledů je s první kontrolovanou verzí pixelově shodných.
- Kontrola struktury PPTX: bez nálezů. 17 slidů a 17 poznámkových částí.
- Kontrola geometrie, nadpisů a fontů: bez nálezů. 16:9, Georgia a Arial, nativní tabulka na slidu 12.
- Nativní graf na slidu 9: dvě číselné hodnoty, vložený XLSX, vzorce i cache odpovídají buněčným datům. Kontrola přenositelného editovatelného grafu prošla.
- Eurostat API `isoc_eb_ai`, 2025: Česko 17,60 %, EU 19,95 %. Znovu staženo 28. 9. 2026, datová aktualizace 15. 6. 2026. Odpověď v `eurostat-2025.json`.
- Oba vložené soubory videa se SHA-256 shodují se zdrojovými MP4. FFprobe potvrzuje H.264 (u novějšího i AAC) a délky 19,866 s / 8,064 s. V PPTX jsou dva mediální odkazy pro spuštění kliknutím.
- PDF má 17 stran, čísla 18 % a 20 % i znak + na slidu 11 se zobrazují správně. Závěrečné soubory jsou beze změny zkopírované z ověřených pracovních výstupů.

## Rozsah kontroly

Render proběhl v LibreOffice s odděleným uživatelským profilem. Přehrání videí v živém PowerPointu ani zkušební přednes nebyly provedeny. Časy ve scénáři jsou plán, nikoli změřená délka. Nezávislé ověření produkčního údaje studia Silverside není k dispozici; zdroj je výslovně uveden u čísla.

## Sestavení

`bash _work/build/rebuild-revised.sh`

`revised-package.py` upravuje pouze nově generované kopie: odstraňuje nevyužité deklarace neexistujících předloh, normalizuje prázdný identifikátor akce médií a převádí jednoúrovňové kategorie grafu na jednoduchý odkaz do stejného vloženého sešitu. Zdroje videí, hodnoty grafu a původní soubory se nemění. Statická kopie pro PDF se liší pouze nahrazením videí jejich náhledy.

## Otisky předaných souborů

- PPTX SHA-256: `fab2cdca3f5ed4ad27b22d33be08e940c4dbd18c21dde732ce56a0354eb81969`
- PDF SHA-256: `ab254cb5579dfd3394b774c88bd07583ca5bd5cb9960647c6f5cbd9b49fca753`
