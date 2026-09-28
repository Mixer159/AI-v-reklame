// Visual registry: every picture placed on a slide, with provenance and terms.
// kind: real (skutečná reklama / kampaň), hist (dobová ukázka), own (vlastní ukázka),
// photo (fotografie), shot (snímek obrazovky / grafika zdroje), sketch (vlastní skica).
// Paths are relative to the project root.
const P = '04_Podklady/obrazky/';
const CITE = 'Autorsky chráněno; použito jako citace s uvedením zdroje (§ 31 autorského zákona)';
const OWN_OAI = 'Vlastní ukázka vytvořená generátorem OpenAI v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image), 22. 9. 2026';
const OWN_SDXL = 'Vlastní ukázka: model SDXL 1.0 (Stability AI, červenec 2023) spuštěný lokálně 22. 9. 2026, licence modelu CreativeML Open RAIL++-M';

const V = {
  // Own demos
  t1_now: { file: P + 'vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/T1_pokus1.png', kind: 'own', depicts: 'Lahev ZÁTOKA u jezera, zadání T1, pokus 1 ze 4', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' },
  t1_now3_label: { file: P + 'upravene/T1_dnes_pokus3_etiketa_vyrez.png', kind: 'own', depicts: 'Výřez etikety, zadání T1, pokus 3: slovenské texty a „bez konzervantov“', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba (výřez)' },
  t1_sdxl: { file: '_work/tests/sdxl/T1_seed1.png', kind: 'own', depicts: 'Lahev s nápisem „ZÀTKA“, zadání T1, seed 1 ze 4', owner: OWN_SDXL, source: 'own_img', license: 'Vlastní tvorba' },
  t1_sdxl_label: { file: P + 'upravene/T1_sdxl_seed1_etiketa_vyrez.png', kind: 'own', depicts: 'Výřez etikety SDXL, zadání T1, seed 1', owner: OWN_SDXL, source: 'own_img', license: 'Vlastní tvorba (výřez)' },
  t2_now: { file: P + 'vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/T2_pokus2.png', kind: 'own', depicts: 'Plakát pekárny „Čerstvé rohlíky každé ráno“, zadání T2, pokus 2 ze 4', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' },
  t2_sdxl: { file: '_work/tests/sdxl/T2_seed4.png', kind: 'own', depicts: 'Plakát pekárny, zadání T2, seed 4 ze 4: nadpis „CERRASTVI KRU KAKA ROILKY“', owner: OWN_SDXL, source: 'own_img', license: 'Vlastní tvorba' },
  t3_now: { file: P + 'vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/T3_pokus2.png', kind: 'own', depicts: 'Cyklistka ve žluté bundě na Starém Městě, zadání T3, pokus 2 ze 4 (s logem nextbike, které nebylo zadáno)', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba; obsahuje cizí ochrannou známku vloženou modelem' },
  t3_sdxl: { file: '_work/tests/sdxl/T3_seed1.png', kind: 'own', depicts: 'Cyklistka, zadání T3, seed 1 ze 4: jede, ale nedrží kávu', owner: OWN_SDXL, source: 'own_img', license: 'Vlastní tvorba' },
  d1: { file: P + 'vlastni-ukazky/02_upravy-a-varianty/D1_zatoka-v-zime.png', kind: 'own', depicts: 'Úprava: stejná lahev v zimních horách', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' },
  d2: { file: P + 'vlastni-ukazky/02_upravy-a-varianty/D2_pekarstvi-nemecky.png', kind: 'own', depicts: 'Úprava: plakát přeložený do němčiny', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' },
  d3a: { file: P + 'vlastni-ukazky/02_upravy-a-varianty/D3_stejna-postava-kavarna.png', kind: 'own', depicts: 'Stejná postava v kavárně (reference T3 pokus 2)', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' },
  d3b: { file: P + 'vlastni-ukazky/02_upravy-a-varianty/D3_stejna-postava-stanice.png', kind: 'own', depicts: 'Stejná postava u stanice kol za soumraku', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' },
  d4: { file: P + 'vlastni-ukazky/02_upravy-a-varianty/D4_bez-log-a-sloganu.png', kind: 'own', depicts: 'Úprava: z fotky odstraněna loga a slogany', owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' },

  // Real campaigns
  coke24: { file: P + 'prevzate/kampane-influenceri/coca-cola-2024-silverside-trucks-village-01.jpg', kind: 'real', depicts: 'Coca-Cola „Holidays Are Coming“ 2024, kamiony ve vesnici', owner: 'The Coca-Cola Company / Silverside AI', source: 'silverside', license: CITE },
  kalshi: { file: P + 'upravene/kalshi-2025-bez-cerneho-okraje.jpg', kind: 'real', depicts: 'Kalshi, reklama během finále NBA 2025 (náhled videa tvůrce, oříznutý černý okraj)', owner: 'PJ Accetturo pro Kalshi', source: 'npr_kalshi', license: CITE },
  mcd_end: { file: P + 'prevzate/kampane-influenceri/mcdonalds-nl-2025-terrible-time-endcard-ai-label.jpg', kind: 'real', depicts: 'McDonald’s NL 2025, závěrečný snímek se štítkem „AI generated“', owner: 'McDonald’s NL / TBWA\\Neboko / The Sweetshop', source: 'commons_mcd', license: 'Wikimedia Commons uvádí volné dílo (tvrzení nahrávajícího); ochranné známky McDonald’s; snímek z videa' },
  coke25: { file: P + 'prevzate/kampane-influenceri/coca-cola-2025-holidays-are-coming-still-01.jpg', kind: 'real', depicts: 'Coca-Cola „Holidays Are Coming“ 2025 (náhled oficiálního videa)', owner: 'The Coca-Cola Company', source: 'coke2025', license: CITE },
  aitana: { file: P + 'prevzate/kampane-influenceri/aitana-lopez-instagram-images-euronews.jpg', kind: 'real', depicts: 'Aitana López, tři příspěvky z Instagramu (koláž Euronews)', owner: 'The Clueless / Euronews', source: 'euronews_aitana', license: CITE },
  lu: { file: P + 'prevzate/kampane-influenceri/lu-do-magalu-ogilvy-motion-capture.jpg', kind: 'real', depicts: 'Lu do Magalu: herečka v obleku pro snímání pohybu a 3D postava', owner: 'Magazine Luiza / Ogilvy', source: 'ogilvy_lu', license: CITE },
  hm: { file: P + 'prevzate/kampane-influenceri/hm-2025-digital-twin-denim-01.jpg', kind: 'real', depicts: 'H&M digitální dvojče modelky s označením „Digital Twin“', owner: 'H&M', source: 'hm_group', license: 'Tiskový obrázek H&M, redakční užití s uvedením zdroje' },

  // Period samples
  dalle_sign: { file: P + 'prevzate/historie-data/2022-04_dalle2-paper-fig16_text-sign-deep-learning.png', kind: 'hist', depicts: 'DALL-E 2, zadání „A sign that says deep learning“, 4 výstupy (obr. 16)', owner: 'Ramesh a kol. (OpenAI), arXiv 2204.06125', source: 'dalle2paper', license: 'CC BY 4.0' },
  heinz: { file: P + 'prevzate/historie-data/2022-08_heinz-ai-ketchup_dalle2_via-adweek.jpg', kind: 'real', depicts: 'Heinz „A.I. Ketchup“ 2022, vizuály z DALL-E 2', owner: 'Kraft Heinz / Rethink (via Adweek)', source: 'adweek_heinz', license: CITE },
  pope: { file: P + 'prevzate/historie-data/2023-03_pope-puffer-jacket_midjourney_reddit-original-1of4.jpg', kind: 'hist', depicts: 'Papež v péřové bundě, Midjourney, 24. 3. 2023 (1 ze 4)', owner: 'u/trippy_art_special (Pablo Xavier)', source: 'pope_reddit', license: 'Licence neuvedena; AI obraz skutečné osoby, použito jako zpravodajský příklad s označením' },
  ws23: { file: P + 'upravene/will-smith-2023-poster.png', kind: 'hist', depicts: '„Will Smith eating spaghetti“, ModelScope, březen 2023 (snímek)', owner: 'u/chaindrop', source: 'ws2023', license: 'Commons: PD-algorithm, osobnostní práva; AI obraz skutečné osoby' },
  ws25: { file: P + 'upravene/will-smith-2025-poster.png', kind: 'hist', depicts: 'Stejné zadání ve Veo 3, květen 2025 (snímek)', owner: 'Javi Lopez', source: 'ws2025', license: 'Citace; soubor na Commons navržen ke smazání; AI obraz skutečné osoby' },
  dreambooth: { file: P + 'prevzate/historie-data/2022-08_dreambooth-paper-fig2_product-fidelity-clock_dalle2-imagen-vs-finetune.png', kind: 'hist', depicts: 'DreamBooth obr. 2: DALL-E 2 a Imagen nezvládnou konkrétní budík, dotrénovaný model ano', owner: 'Ruiz a kol. (Google Research)', source: 'dreambooth', license: 'CC BY 4.0' },

  // Czech and detection
  rohlik: { file: P + 'prevzate/cesko-rozpoznavani/rohlik-vanoce-ai-2025_czechcrunch.jpg', kind: 'real', depicts: 'Rohlík, vánoční spot 2025 (snímek)', owner: 'Rohlik Group (via CzechCrunch)', source: 'cc_rohlik', license: CITE },
  rohlik_milk: { file: P + 'upravene/rohlik-krabice-mleka_vyrez.png', kind: 'real', depicts: 'Výřez: krabice mléka s nečitelným textem', owner: 'Rohlik Group (via CzechCrunch)', source: 'cc_rohlik', license: CITE },
  car: { file: P + 'prevzate/cesko-rozpoznavani/rohlik-auto-realne-foto-2022_commons_spz-rozmazane.jpg', kind: 'photo', depicts: 'Skutečná fotografie auta Rohlík, Praha-Třebešín 2022 (SPZ rozmazány námi)', owner: 'JiriMatejicek, Wikimedia Commons', source: 'commons_car', license: 'CC BY-SA 3.0; upraveno (rozmazané SPZ), úprava šířena pod stejnou licencí' },
  epoj: { file: P + 'prevzate/cesko-rozpoznavani/epojisteni-opice-ai-tv-2025_mediaguru.png', kind: 'real', depicts: 'ePojištění.cz 2025, šimpanz s bankovkami', owner: 'ePojisteni.cz / Ydeal (via MediaGuru)', source: 'mg_epoj', license: CITE },
  eshop_left: { file: P + 'upravene/eshop-reklama-leva-polovina_vyrez.jpg', kind: 'real', depicts: 'Reklamní obrázek e-shopu (levá polovina koláže iROZHLAS)', owner: 'Český rozhlas (koláž)', source: 'irozhlas_eshop', license: CITE },
  eshop_full: { file: P + 'prevzate/cesko-rozpoznavani/eshop-ai-foto-vs-realita-2026_irozhlas.jpg', kind: 'real', depicts: 'Reklama e-shopu a hračky, které zákazník dostal (koláž iROZHLAS)', owner: 'Český rozhlas; foto vpravo Ivan Pacholík', source: 'irozhlas_eshop', license: CITE },
  o2: { file: P + 'prevzate/cesko-rozpoznavani/o2-eurotel-ai-remake-2026_spot-still_mediar.jpg', kind: 'real', depicts: 'O2, AI remake reklamy Eurotelu 2026 (snímek)', owner: 'O2 Czech Republic / Free Andy (via Médiář)', source: 'mediar_o2', license: CITE },
  bata: { file: P + 'prevzate/cesko-rozpoznavani/bata-barefoot-ai-kampan-2026_czechcrunch.jpg', kind: 'real', depicts: 'Baťa, AI kampaň 2026 (redakční koláž CzechCrunch s logem, vychází z vizuálu kampaně)', owner: 'Baťa (via CzechCrunch)', source: 'cc_bata', license: CITE },
  livesport: { file: P + 'prevzate/cesko-rozpoznavani/livesport-ailu-avatar-2026_mediaguru.jpg', kind: 'real', depicts: 'Livesport, virtuální moderátorka AILU', owner: 'Livesport (via MediaGuru)', source: 'mg_livesport', license: CITE },
};

// All attempts of the own comparison (appendix grids).
for (const k of ['T1', 'T2', 'T3']) {
  for (let i = 1; i <= 4; i++) {
    V[`${k.toLowerCase()}_sdxl_${i}`] = { file: `_work/tests/sdxl/${k}_seed${i}.png`, kind: 'own', depicts: `Zadání ${k}, SDXL 1.0, seed ${i}`, owner: OWN_SDXL, source: 'own_img', license: 'Vlastní tvorba' };
    V[`${k.toLowerCase()}_now_${i}`] = { file: `${P}vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/${k}_pokus${i}.png`, kind: 'own', depicts: `Zadání ${k}, generátor OpenAI, pokus ${i}`, owner: OWN_OAI, source: 'own_img', license: 'Vlastní tvorba' };
  }
}

module.exports = { V, P };
