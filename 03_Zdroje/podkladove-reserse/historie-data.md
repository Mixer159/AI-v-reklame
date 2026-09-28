# History, historical visuals and statistics: AI in advertising

Research date: 2026-09-22. Scope: brief AI history, dated 2022-2023 visual samples for a "then vs now" comparison, and statistics on AI adoption in enterprises, individuals and the ad industry.

Method: every date and number below was read from the original page, PDF, dataset API or an archived copy of the original (Wayback Machine). OpenAI pages return HTTP 403 to scripts, so OpenAI dates come from OpenAI's own RSS feed (`https://openai.com/news/rss.xml`) and archived copies. Eurostat values come from the Eurostat dissemination API (JSON), cross-checked against Eurostat news releases and ČSÚ publications.

---

## 1. Summary

1. **EU vs Czechia, companies:** in 2025, 20.0 % of EU enterprises with 10+ employees used at least one AI technology; Czechia 17.6 %. In 2021 the figures were 7.7 % and 4.5 %, so Czech use roughly quadrupled (Eurostat `isoc_eb_ai`, official).
2. **Marketing is the main use in Czechia:** 59 % of Czech enterprises that use AI use it for marketing, sales or customer support, compared with 35 % in the EU (2025). In 2023 it was 21 % in CZ, so this is the fastest-changing number in the dataset.
3. **The advertising sector is ahead of the economy:** in NACE M73-M75 (advertising and market research, plus other professional activities and veterinary), AI use went from 5.6 % (2023) to 34.6 % (2025) in CZ and from 18.6 % to 48.0 % in the EU. 28 % of these Czech firms already generate images, video or audio with AI.
4. **Image and video generation became an official statistic in 2025:** 9.7 % of all Czech enterprises (EU 9.6 %) used AI to generate pictures, video or sound. Eurostat added the category in 2025, so part of the 2024→2025 jump comes from the new category (ČSÚ says this explicitly).
5. **People:** 35.4 % of Czechs aged 16-74 used generative AI tools in the last 3 months (EU 32.7 %). Among 16-24-year-olds it was 78.5 % in CZ vs 63.8 % in the EU. ČSÚ reports 32 % for everyone aged 16+. 2025 is the first year this was measured.
6. **Czech agencies (AKA + APRA, 2024):** 95 % of 60 agency leaders reported AI use in at least some tasks; 8 % had let staff go because of AI tools (10 % of ad agencies, 5 % of PR agencies). This was a small qualitative sample (interviews May-Aug 2024).
7. **US ad industry vs consumers (IAB, Jan 2026):** 83 % of ad executives say their company uses AI in the creative process (60 % in 2024). 82 % of executives think young consumers feel positive about AI ads, while only 45 % of those consumers actually do.
8. **Operator claims (Meta):** more than 4 million advertisers used at least one of Meta's gen AI ad creative tools by January 2025 (up from 1 million six months earlier), and more than 8 million by April 2026. These are company statements and do not belong in the same chart as surveys.
9. **Text in images was the clearest 2022 weakness.** The DALL-E 2 paper (April 2022) says the model "struggles at producing coherent text" and shows a sign reading "Deinp Lerpt". Heinz's August 2022 "A.I. Ketchup" campaign showed DALL-E 2 labels such as "KEMP" and "JANCE KEED KUP". By 2025-2026, vendors advertise "legible text in multiple languages" (vendor claims).
10. **Product and character consistency had to be engineered in 2022.** DreamBooth (Aug 2022) needed fine-tuning on 3-5 photos because DALL-E 2 and Imagen could not reproduce a specific product. Built-in reference features followed: Midjourney `--cref` (Mar 2024), Gemini 2.5 Flash Image (Aug 2025), and Nano Banana Pro (Nov 2025), which accepts up to 14 reference images.
11. **Photorealism tipping point: March 2023.** The Midjourney "Pope in a puffer jacket" image was posted on 24 March 2023, nine days after Midjourney V5 shipped. The Verge still listed visible tells, including a hand that does not quite hold the cup, a malformed crucifix and a glasses lens that merges into its shadow. The Midjourney version used is not confirmed.
12. **Video: the "Will Smith eating spaghetti" clip made with ModelScope text-to-video (posted 27 Mar 2023, 240×240 px) compared with Veo 3 (22 May 2025, 1280×720, with sound)** is the clearest two-year comparison, and both clips are downloaded. The date of the original is often given as 23 March, but the archived Reddit post data shows 27 March 2023, 23:13 UTC.

**Recommended charts (2-3):**
- A. Share of enterprises using AI, EU vs CZ, 2021-2025, with a second panel for the advertising sector M73-M75 (CSV 5.1 + 5.3).
- B. Among companies that use AI, the share using it for marketing and sales, EU vs CZ, 2021-2025 (CSV 5.2). This is the strongest "why this matters for advertising" chart.
- C. Generative AI use by individuals in 2025, by age, EU vs CZ (CSV 5.4). Optional alternative: the IAB perception gap, 82 % vs 45 % (CSV 5.8).

**Recommended historical visuals (3-4):**
- Text: `2022-04_dalle2-paper-fig16_text-sign-deep-learning.png` + `2022-08_heinz-ai-ketchup_dalle2_via-adweek.jpg`.
- Photorealism: `2023-03_pope-puffer-jacket_midjourney_reddit-original-1of4.jpg`, labelled "AI-generated, Midjourney, March 2023".
- Motion: `2023-03_will-smith-spaghetti_modelscope_still-t2s.png` next to `2025-05_will-smith-spaghetti_veo3_still-t1s.png`.
- Product fidelity/consistency: `2022-08_dreambooth-paper-fig2_product-fidelity-clock_dalle2-imagen-vs-finetune.png`.

---

## 2. Verified timeline

Status legend: VERIFIED-PRIMARY = read on the original publisher's page, feed, PDF or archived copy of it; VERIFIED-SECONDARY = reputable reporting only; UNVERIFIED; CONTRADICTED.

| Date | Event | Source URL | Status |
|---|---|---|---|
| 31 Aug 1955 (proposal); summer 1956 (workshop) | Dartmouth Summer Research Project on Artificial Intelligence; the term "artificial intelligence" is used in the proposal | http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf ; https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth | VERIFIED-PRIMARY |
| 1965 | DENDRAL project starts at Stanford, described by its creators as "the first expert system for scientific hypothesis formation" | Lindsay, Buchanan, Feigenbaum, Lederberg, *Artificial Intelligence* 61 (1993): https://web.mit.edu/6.034/www/6.s966/dendral-history.pdf | VERIFIED (retrospective by project members) |
| 17 Sep 2009 | Google launches the new DoubleClick Ad Exchange, "a real-time marketplace to buy and sell display advertising space" | https://adwords.googleblog.com/2009/09/announcing-new-doubleclick-ad-exchange.html | VERIFIED-PRIMARY |
| 2012 (NIPS 2012) | AlexNet paper ("ImageNet Classification with Deep Convolutional Neural Networks"); start of the deep learning boom | https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html | VERIFIED-PRIMARY |
| KDD 2013 | Google paper "Ad Click Prediction: a View from the Trenches", on machine learning for predicting ad click-through rates | https://research.google/pubs/ad-click-prediction-a-view-from-the-trenches/ | VERIFIED-PRIMARY |
| 10 Jun 2014 | GANs (Goodfellow et al.) posted to arXiv | https://arxiv.org/abs/1406.2661 | VERIFIED-PRIMARY |
| 24 Aug 2014 | Facebook paper "Practical Lessons from Predicting Clicks on Ads at Facebook" (ADKDD'14) | Crossref record for DOI 10.1145/2648584.2648589 | VERIFIED-PRIMARY (metadata) |
| 25 Jul 2016 | Google announces "Smart Bidding" for AdWords: "our new name for conversion-based automated bidding ... that reflects the powerful machine learning behind it" | https://blog.google/products-and-platforms/products/ads/more-powerful-bid-automation-with-smart-bidding/ (redirect from adwords.googleblog.com/2016/07/...) | VERIFIED-PRIMARY |
| 12 Jun 2017 | Transformer paper "Attention Is All You Need" posted to arXiv | https://arxiv.org/abs/1706.03762 | VERIFIED-PRIMARY |
| 6 Apr 2022 | DALL-E 2 announced (page archived 6 Apr 2022, 14:10 UTC); paper on arXiv 13 Apr 2022 | https://web.archive.org/web/20220406141035/https://openai.com/dall-e-2/ ; https://arxiv.org/abs/2204.06125 | VERIFIED-PRIMARY (archived) |
| 12 Jul 2022 (US Pacific time) | Midjourney open beta; the tweet "We're officially moving to open-beta!" was posted 13 Jul 2022, 06:41 UTC | https://x.com/midjourney/status/1547108864788553729 (oEmbed and tweet ID decoded) | VERIFIED-PRIMARY |
| 1 Aug 2022 | Heinz "A.I. Ketchup" campaign with DALL-E 2 reported | https://www.adweek.com/commerce/heinz-taps-ai-design-next-ad-campaign/ | VERIFIED-SECONDARY |
| 22 Aug 2022 | Stable Diffusion public release (open model weights) | https://stability.ai/news/stable-diffusion-public-release | VERIFIED-PRIMARY |
| 25 Aug 2022 | DreamBooth paper: personalising a model with 3-5 photos of one subject | https://arxiv.org/abs/2208.12242 | VERIFIED-PRIMARY |
| 30 Nov 2022 | ChatGPT launched ("Introducing ChatGPT") | OpenAI RSS, item https://openai.com/index/chatgpt | VERIFIED-PRIMARY (feed; page blocks scripts) |
| 14 Mar 2023 | GPT-4 | OpenAI RSS, item https://openai.com/index/gpt-4-research | VERIFIED-PRIMARY (feed) |
| 15 Mar 2023 | Midjourney V5: "the newest and most advanced model, released on March 15th, 2023" | https://web.archive.org/web/20230401074611/https://docs.midjourney.com/docs/model-versions | VERIFIED-PRIMARY (archived) |
| 21 Mar 2023 | Adobe Firefly beta announced | https://news.adobe.com/news/news-details/2023/adobe-unveils-firefly-a-family-of-new-creative-generative-ai | VERIFIED-PRIMARY |
| 24 Mar 2023 | "The Pope Drip" (Midjourney) posted to r/midjourney at 19:33 UTC | archived post: https://web.archive.org/web/20230325175224/https://www.reddit.com/r/midjourney/comments/120vhdc/the_pope_drip/ | VERIFIED-PRIMARY (archived) |
| 27 Mar 2023 | "Will Smith eating spaghetti" (ModelScope text2video) posted to r/StableDiffusion at 23:13 UTC | archived post data: https://web.archive.org/web/20230328024223/https://www.reddit.com/r/StableDiffusion/comments/1244h2c/comment/jdxoygd/ | VERIFIED-PRIMARY (archived); the often-cited 23 Mar is CONTRADICTED |
| 23 May 2023 | Photoshop Generative Fill (Firefly): "extend images and add and remove objects" | https://news.adobe.com/news/news-details/2023/adobe-unveils-future-of-creative-cloud-with-generative-ai-as-a-creative-co-pilot-in-photoshop | VERIFIED-PRIMARY |
| 26 Jul 2023 | SDXL 1.0 | https://stability.ai/news/stable-diffusion-sdxl-1-announcement | VERIFIED-PRIMARY |
| 20 Sep 2023 (announced); 19 Oct 2023 (in ChatGPT Plus/Enterprise) | DALL-E 3 | https://web.archive.org/web/20230920171845/https://openai.com/dall-e-3 ; OpenAI RSS item https://openai.com/index/dall-e-3-is-now-available-in-chatgpt-plus-and-enterprise | VERIFIED-PRIMARY |
| 15 Feb 2024 | Sora preview ("Video generation models as world simulators") | OpenAI RSS, item https://openai.com/index/video-generation-models-as-world-simulators | VERIFIED-PRIMARY (feed) |
| 12 Mar 2024 | Midjourney Character Reference `--cref` | https://updates.midjourney.com/character-refs/ | VERIFIED-PRIMARY |
| 22 Oct 2024 | Anthropic "computer use" public beta: Claude uses a computer "by looking at a screen, moving a cursor, clicking buttons, and typing text" | https://www.anthropic.com/news/3-5-models-and-computer-use | VERIFIED-PRIMARY |
| 9 Dec 2024 | Sora released to users ("Sora is here") | OpenAI RSS, item https://openai.com/index/sora-is-here | VERIFIED-PRIMARY (feed) |
| 23 Jan 2025 | OpenAI Operator | OpenAI RSS, item https://openai.com/index/introducing-operator | VERIFIED-PRIMARY (feed) |
| 25 Mar 2025 | GPT-4o native image generation | OpenAI RSS, item https://openai.com/index/introducing-4o-image-generation | VERIFIED-PRIMARY (feed) |
| 20 May 2025 | Veo 3: "for the first time, can also generate videos with audio" | https://blog.google/technology/ai/generative-media-models-io-2025/ | VERIFIED-PRIMARY |
| 17 Jul 2025 | ChatGPT agent | OpenAI RSS, item https://openai.com/index/introducing-chatgpt-agent | VERIFIED-PRIMARY (feed) |
| 26 Aug 2025 | Gemini 2.5 Flash Image ("nano-banana"): "maintain character consistency", "targeted transformations using natural language" | https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/ | VERIFIED-PRIMARY |
| 30 Sep 2025 | Sora 2 | OpenAI RSS, item https://openai.com/index/sora-2 | VERIFIED-PRIMARY (feed) |
| 15 Oct 2025 | Veo 3.1 | https://blog.google/technology/ai/veo-updates-flow/ | VERIFIED-PRIMARY |
| 20 Nov 2025 | Nano Banana Pro (Gemini 3 Pro Image) | https://deepmind.google/blog/introducing-nano-banana-pro/ | VERIFIED-PRIMARY |
| 16 Dec 2025 | ChatGPT Images and GPT-Image-1.5 | OpenAI RSS, item https://openai.com/index/new-chatgpt-images-is-here | VERIFIED-PRIMARY (feed) |
| 13 Jan 2026 | Veo 3.1 "Ingredients to Video": more consistency, vertical video | https://deepmind.google/blog/veo-3-1-ingredients-to-video-more-consistency-creativity-and-control/ | VERIFIED-PRIMARY |
| 26 Feb 2026 | Nano Banana 2: "subject consistency", "precision text rendering and translation" | https://deepmind.google/blog/nano-banana-2-combining-pro-capabilities-with-lightning-fast-speed/ | VERIFIED-PRIMARY |
| 17 Mar 2026 | Midjourney V8 alpha | https://updates.midjourney.com/v8-alpha/ | VERIFIED-PRIMARY |
| 21 Apr 2026 | ChatGPT Images 2.0 ("improved text rendering, multilingual support") | OpenAI RSS, item https://openai.com/index/introducing-chatgpt-images-2-0 | VERIFIED-PRIMARY (feed) |
| May 2026 (feed date 17 May 2026) | Gemini Omni: "can create anything from any input - starting with video" | https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/ | VERIFIED-PRIMARY (the article itself has no visible date; the day comes from the DeepMind RSS) |
| 24 Jun 2026 | Computer use in Gemini 3.5 Flash | DeepMind RSS, item https://deepmind.google/blog/introducing-computer-use-in-gemini-3-5-flash/ | VERIFIED-PRIMARY (title and date only) |
| 8 Sep 2026 | ChatGPT Images 2.5 | OpenAI RSS, item https://openai.com/index/introducing-chatgpt-images-2-5 | VERIFIED-PRIMARY (feed) |

**Condensed set for one slide (9 points):** 1956 Dartmouth · 2009 real-time ad auctions · 2016 Smart Bidding · 2017 Transformer · Apr 2022 DALL-E 2 · Nov 2022 ChatGPT · Mar 2023 Midjourney V5 / "Pope" · Oct 2024 computer use (agents) · May 2025 Veo 3 (video with sound) · 2026 Nano Banana 2 / ChatGPT Images 2.0.

**Draft narration, about 60 s (Czech):**
"Umělá inteligence není novinka. Pojmenovali ji vědci už v roce 1956. V reklamě pracuje nenápadně přes patnáct let: od roku 2009 se reklamní prostor draží v reálném čase a od roku 2016 Google nabízí automatické nastavování nabídek pomocí strojového učení. To jsme ale neviděli. Viditelnou se AI stala až v roce 2022. V dubnu přišel DALL-E 2, v létě Midjourney a Stable Diffusion a v listopadu ChatGPT. V březnu 2023 obletěla svět fotka papeže v bílé péřové bundě, kterou nikdo nefotil. V roce 2024 se AI naučila ovládat počítač a v roce 2025 umí video i se zvukem. Dnes AI obrázky zvládají čitelný text, konkrétní produkt i stejnou postavu napříč celou kampaní."

---

## 3. Historical visuals

Folder: `/Users/maximkudela/Documents/AI-v-reklame/04_Podklady/obrazky/prevzate/historie-data/`. All files were checked with `file` and `sips` (or `ffprobe` for video). Nothing was generated. Stills and contact sheets were extracted from the downloaded videos with ffmpeg.

| Filename | Depicts | Model + version | Creation / publication date | Creator | Source page | Direct URL | License / terms | Evidence for model and date |
|---|---|---|---|---|---|---|---|---|
| `2022-04_dalle2-paper-fig16_text-sign-deep-learning.png` (2606×638) | Four attempts at "A sign that says deep learning" (the signs read "Deep", "Deinp Lerpt:", "Diep Deep" and "…DONEELH") | unCLIP = DALL-E 2 research model | paper v1, 13 Apr 2022 | Ramesh, Dhariwal, Nichol, Chu, Chen (OpenAI) | https://arxiv.org/abs/2204.06125 | https://arxiv.org/pdf/2204.06125v1 (p. 17, Figure 16, extracted image) | CC BY 4.0 (arXiv listing); credit "Ramesh et al. 2022, arXiv:2204.06125, CC BY 4.0" | Figure caption: "Samples from unCLIP for the prompt, 'A sign that says deep learning.'"; text: "unCLIP ... struggles at producing coherent text" |
| `2022-04_dalle2-paper-fig14_red-cube-on-blue-cube.png` (1024×1024) | 16 samples for "a red cube on top of a blue cube"; colours and stacking are often wrong (composition and attribute binding) | unCLIP (DALL-E 2) | 13 Apr 2022 | same | same | same PDF, p. 16, Figure 14a | CC BY 4.0 | "unCLIP struggles more than GLIDE with a prompt where it must bind two separate objects (cubes) to two separate attributes (colors)" |
| `2022-04_dalle2-paper-fig1_propaganda-poster-cat-napoleon.png` (1024×1024) | Hand-selected showcase sample: "a propaganda poster depicting a cat dressed as french emperor napoleon holding a piece of cheese"; the poster lettering is garbled ("IE LLEI … ROPOEI") | DALL-E 2 "production version" | 13 Apr 2022 | same | same | PDF p. 2, Figure 1 | CC BY 4.0 | Caption: "Selected 1024 × 1024 samples from a production version of our model." Good example because text fails even in a curated showcase |
| `2022-04_dalle2-paper-fig1_shiba-inu-beret.png` (1024×1024) | "a shiba inu wearing a beret and black turtleneck" (photorealism, April 2022) | DALL-E 2 | 13 Apr 2022 | same | same | PDF p. 2, Figure 1 | CC BY 4.0 | same caption |
| `2022-04_dalle2-paper-fig1_teddy-bear-times-square.png` (1024×1024) | "a teddy bear on a skateboard in times square" (photorealism) | DALL-E 2 | 13 Apr 2022 | same | same | PDF p. 2, Figure 1 | CC BY 4.0 | same caption |
| `2022-04_dalle2-paper-fig1_handpalm-leaves.png` (1024×1024) | "a close up of a handpalm with leaves growing from it" | DALL-E 2 | 13 Apr 2022 | same | same | PDF p. 2, Figure 1 | CC BY 4.0 | same caption. The finger arrangement looks inconsistent on close inspection; confirm before claiming a specific error on stage |
| `2022-08_heinz-ai-ketchup_dalle2_via-adweek.jpg` (1200×629) | 12 campaign visuals "This is what 'KETCHUP' looks like to A.I.": bottles shaped like Heinz with garbled labels ("NOIS HLP", "TECH KEUT", "JANCE KEED KUP", "KEMP", "KETO KUP") | DALL-E 2 (per Adweek) | Adweek, 1 Aug 2022 | Heinz / agency Rethink; image credited "Heinz" | https://www.adweek.com/commerce/heinz-taps-ai-design-next-ad-campaign/ | https://static-www.adweek.com/wp-content/uploads/2022/08/heinz-ai-ketchup-design-2022.jpg | © Heinz. Use only as a cited example of a real campaign | Adweek: "fed a series of generic ketchup-related prompts into ... Dall-E 2 ... most seemed to have adopted the trademark fringe, shape and lettering of a Heinz label" |
| `2022-08_dreambooth-paper-fig2_product-fidelity-clock_dalle2-imagen-vs-finetune.png` (3744×1086) | One specific yellow alarm clock: DALL-E 2 and Imagen fail to reproduce it; fine-tuned DreamBooth succeeds | DALL-E 2, Imagen, DreamBooth (fine-tuned Imagen) | paper v1, 25 Aug 2022 | Ruiz, Li, Jampani, Pritch, Rubinstein, Aberman (Google Research, Boston Univ.) | https://arxiv.org/abs/2208.12242 | https://arxiv.org/pdf/2208.12242v1 (p. 3, Figure 2; transparency flattened onto white) | CC BY 4.0 (arXiv listing); input photos credited to Unsplash | Caption: "Even with dozens of iterations over a text prompt ... the Imagen model can't reconstruct its key visual features ... DALL-E2 can neither reconstruct the appearance of the given subject nor modify the context" |
| `2022-08_dreambooth-paper-fig1_subject-consistency-corgi-sunglasses.png` (3344×1838) | A dog and a pair of sunglasses placed into new scenes after training on 3-5 photos | DreamBooth (fine-tuned Imagen) | 25 Aug 2022 | same | same | PDF p. 1, Figure 1 | CC BY 4.0; input photos from Unsplash | Caption: "With just a few images (typically 3-5) of a subject ... DreamBooth ... can generate a myriad of images of the subject in different contexts" |
| `2022-09_theatre-dopera-spatial_midjourney_jason-allen_final.jpg` (2048×1365) | "Théâtre D'opéra Spatial", the 2022 Colorado State Fair digital art winner | Midjourney (version not stated), then Photoshop edits and Gigapixel AI upscale | 2022; copyright application filed 21 Sep 2022 | Jason M. Allen | https://commons.wikimedia.org/wiki/File:Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.jpg | https://upload.wikimedia.org/wikipedia/commons/b/bf/Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.jpg | Commons tag PD-algorithm; US Copyright Office Review Board refused registration on 5 Sep 2023. Rights outside the US may differ | USCO decision: https://www.copyright.gov/rulings-filings/review-board/docs/Theatre-Dopera-Spatial.pdf ("input numerous revisions and text prompts at least 624 times") |
| `2022_theatre-dopera-spatial_midjourney_raw-output.jpg` (948×632) | Raw Midjourney output before Allen's edits | Midjourney | 2022 | Jason M. Allen | https://commons.wikimedia.org/wiki/File:Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial_original_output.jpg | https://upload.wikimedia.org/wikipedia/commons/b/b0/Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial_original_output.jpg | Commons tag PD-AI (source: USCO filing) | Commons: "The original Midjourney output which was processed into Théâtre D'opéra Spatial" |
| `2023-03_pope-puffer-jacket_midjourney_reddit-original-1of4.jpg` (960×1200) | The viral image: Pope Francis in a white puffer coat holding a cup | Midjourney; version NOT confirmed (V5 was released 15 Mar 2023) | posted 24 Mar 2023, 19:33 UTC | Reddit u/trippy_art_special; BuzzFeed News names him "Pablo Xavier", a 31-year-old construction worker from the Chicago area | https://web.archive.org/web/20230325175224/https://www.reddit.com/r/midjourney/comments/120vhdc/the_pope_drip/ | https://i.redd.it/de6cf3omoqpa1.jpg | No license stated. AI output depicting a real person: use only as a labelled news example ("AI-generated, not a photo") | Archived Reddit post data (author, title "The Pope Drip", created time); BuzzFeed News 27 Mar 2023: "It was made using the AI art tool Midjourney"; The Verge 27 Mar 2023 lists the tells |
| `2023-03_pope-puffer-jacket_midjourney_reddit-original-2of4.jpg`, `-3of4.jpg`, `-4of4.jpg` (960×1200 each) | The other three images from the same post | as above | 24 Mar 2023 | as above | as above | https://i.redd.it/i00nk3omoqpa1.jpg ; https://i.redd.it/mhd324omoqpa1.jpg ; https://i.redd.it/vwplw3omoqpa1.jpg | as above | The Verge: "posted to the Midjourney subreddit alongside three alternatives" |
| `2023-03_pope-yellow-puffer_midjourney_pablo-xavier-other-image_via-buzzfeed.jpg` (600×750) | Another Pope image by the same creator (yellow quilted coat, both hands raised) | Midjourney | published 27 Mar 2023 (BuzzFeed) | Pablo Xavier | https://www.buzzfeednews.com/article/chrisstokelwalker/pope-puffy-jacket-ai-midjourney-image-creator-interview | https://img.buzzfeed.com/buzzfeed-static/static/2023-03/27/18/asset/c10fa1696042/sub-buzz-2006-1679940421-1.jpg | as above | BuzzFeed caption: "One of Pablo Xavier's other AI-generated images of the Pope" |
| `2023-03_will-smith-spaghetti_modelscope_original.webm` (240×240, 19.9 s) + `…_still-t2s.png`, `…_still-t4s.png`, `…_contact-sheet-every2s.png` | Original "Will Smith eating spaghetti" montage; face and hands deform, and "shutterstock" watermark traces are visible in several frames (my observation from the frames) | ModelScope text2video (per Vice) | posted 27 Mar 2023 | Reddit u/chaindrop | https://commons.wikimedia.org/wiki/File:Will_Smith_Eating_Spaghetti_Original.webm | https://upload.wikimedia.org/wikipedia/commons/6/65/Will_Smith_Eating_Spaghetti_Original.webm | Commons tags PD-algorithm + Personality rights. Real person: label clearly | Vice, 28 Mar 2023: "Originally posted to Reddit by a user who goes by chaindrop, it's made using a new Modelscope Text2Video generator"; archived Reddit data gives the date |
| `2025-05_will-smith-spaghetti_veo3_javilopen.webm` (1280×720, 8.1 s, with sound) + `…_still-t1s.png`, `…_contact-sheet-every1s.png` | Veo 3 remake of the same prompt | Google Veo 3 | 22 May 2025 | Javi Lopez (@javilopen) | https://commons.wikimedia.org/wiki/File:Will_Smith_eating_spaghetti_Google_Veo_3.webm ; reporting: https://petapixel.com/2025/05/28/googles-veo-3-nails-the-infamous-will-smith-eating-spaghetti-test/ | https://upload.wikimedia.org/wikipedia/commons/0/04/Will_Smith_eating_spaghetti_Google_Veo_3.webm | Commons claims PD-algorithm, but the file was nominated for deletion on 15 Jul 2026 (COM:AIIP). Treat as a cited third-party clip | PetaPixel quotes the tweet: "Just got access to Veo 3 and the first thing I did was try the Will Smith spaghetti test" (May 22, 2025). Tweet ID decodes to 22 May 2025 10:12 UTC |

Notes on the visuals:
- For "controlled editing" there is no strong 2022 image in the folder. The DALL-E 2 page from April 2022 says: "DALL·E 2 can make realistic edits to existing images from a natural language caption." Photoshop Generative Fill followed on 23 May 2023. For the "now" side, use the Gemini 2.5 Flash Image and Nano Banana material from the models agent.
- Wikimedia Commons has few well-documented DALL-E 2 files (6 in the category). The arXiv paper figures are the better-documented and more reusable source.

---

## 4. Claims and statistics

Type: O = official statistic, I = independent research or industry association survey, V = vendor or operator claim.

| ID | Claim | Value | Period | Population / sample | Measured quantity | Source title | Publisher / author | Date | URL | Verbatim quote | Status | Type |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| H1 | EU enterprises using AI | 20.0 % (API 19.95) | 2025 | EU27 enterprises with 10+ employees, NACE C-J, L-N, 95.1 excluding the financial sector | uses at least one of 8 AI technologies | "20% of EU enterprises use AI technologies" + dataset isoc_eb_ai | Eurostat | 11 Dec 2025 (data updated 15 Jun 2026) | https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2 | "In 2025, 20.0% of EU enterprises with 10 or more employees used artificial intelligence (AI) technologies ... from 13.5% in 2024. Compared with 2021 (7.7%) and 2023 (8.1%)" | VERIFIED-PRIMARY | O |
| H2 | Czech enterprises using AI | 17.6 % | 2025 | CZ, same definition; ČSÚ sample of 7,930 enterprises, 7,030 surveyed | same | isoc_eb_ai; ČSÚ publication 062005-25 ch. 10 | Eurostat; ČSÚ | ČSÚ 21 Jan 2026 | https://csu.gov.cz/docs/107508/b09756a7-a39c-9eb9-b845-b69c4d89bd8d/06200525a10a.pdf | "Umělou inteligenci používalo v roce 2025 v Česku 18 % podniků s více než 10 zaměstnanci. Od roku 2021 je jejich podíl bezmála čtyřikrát vyšší." | VERIFIED-PRIMARY | O |
| H3 | Time series EU / CZ | 2021: 7.65 / 4.46; 2023: 8.06 / 5.90; 2024: 13.48 / 11.26; 2025: 19.95 / 17.60 | 2021-2025 | as above | as above | isoc_eb_ai (API) | Eurostat | data 15 Jun 2026 | API: https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_eb_ai?geo=EU27_2020&geo=CZ&size_emp=GE10&unit=PC_ENT&nace_r2=C10-S951_X_K&indic_is=E_AI_TANY | (dataset values) | VERIFIED-PRIMARY. Caveat: 2025 adds a new technology (image/video/audio generation) | O |
| H4 | Share of AI-using enterprises that use AI for marketing or sales | CZ 59.16 %, EU 34.70 % (2025); CZ 52.90 / EU 34.08 (2024); CZ 21.05 / EU 23.63 (2023); CZ 26.24 / EU 21.36 (2021) | 2021-2025 | enterprises (10+) using AI | purpose "marketing or sales" (Czech questionnaire: "v marketingu, prodeji nebo zákaznické podpoře", e.g. chatbots, customer segmentation, personalised offers, price optimisation) | isoc_eb_ai, unit PC_ENT_AI_TANY; ČSÚ ch. 10 | Eurostat; ČSÚ | 2026 | ČSÚ PDF above; API with `indic_is=E_AI_PMS&unit=PC_ENT_AI_TANY` | "Více než polovina (59 %) firem, které používají alespoň jednu technologii AI, nachází v roce 2025 využití umělé inteligence v oblastech marketingu, prodeje nebo v zákaznické podpoře ... Platí to i pro průměr za EU (35 %)" | VERIFIED-PRIMARY | O |
| H5 | Enterprises using AI for marketing or sales, as % of ALL enterprises | CZ 10.41 %, EU 6.92 % | 2025 | all enterprises 10+ | same purpose | isoc_eb_ai, unit PC_ENT | Eurostat | 2026 | API `indic_is=E_AI_PMS&unit=PC_ENT` | (dataset values) | VERIFIED-PRIMARY | O |
| H6 | Enterprises using AI to generate pictures, video, sound or audio | CZ 9.68 %, EU 9.55 % | 2025 (first year measured) | all enterprises 10+ | technology "generating pictures, videos, sound/audio" | isoc_eb_ai; Eurostat news | Eurostat | 11 Dec 2025 | news URL in H1 | "AI technologies used to generate pictures, videos, sound/audio is a new category, not present in the 2024 questionnaire" | VERIFIED-PRIMARY | O |
| H7 | Enterprises generating text, code or speech with AI | CZ 12.78 %, EU 8.76 % (2025); CZ 0.67 / EU 2.10 (2023) | 2023-2025 | all enterprises 10+ | "generating written or spoken language or programming codes" | isoc_eb_ai | Eurostat; ČSÚ | 2026 | ČSÚ article: https://statistikaamy.csu.gov.cz/k-cemu-podniky-pouzivaji-umelou-inteligenci | "Nástroje generativní AI pro text používalo u nás v roce 2025 celkem 13 % podniků. To je dokonce více než průměr EU, který dosáhl 9 %." | VERIFIED-PRIMARY | O |
| H8 | AI use in the sector "advertising and market research; other professional, scientific and technical activities; veterinary" (NACE M73-M75) | CZ 5.56 (2023) → 26.18 (2024) → 34.62 % (2025); EU 18.58 → 33.66 → 48.02 % | 2023-2025 (2021: CZ 5.54, EU 12.50) | enterprises 10+ in M73-M75 | any AI technology | isoc_eb_ain2 | Eurostat | data 15 Jun 2026 | API: https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_eb_ain2?geo=EU27_2020&geo=CZ&unit=PC_ENT&nace_r2=M73-M75&indic_is=E_AI_TANY | (dataset values; no flags) | VERIFIED-PRIMARY. Caveat: broader than advertising alone | O |
| H9 | M73-M75: image/video/audio generation; marketing/sales purpose | image/video/audio: CZ 28.45 %, EU 33.21 % (2025). Marketing/sales as % of all firms in sector: CZ 28.83 %, EU 19.93 % | 2025 | enterprises 10+ in M73-M75 | technology / purpose | isoc_eb_ain2 | Eurostat | 2026 | API as H8 with `E_AI_TPVSG`, `E_AI_PMS` | (dataset values) | VERIFIED-PRIMARY | O |
| H10 | Large enterprises (250+) using AI | CZ 54.10 %, EU 55.03 % | 2025 | enterprises 250+ | any AI | isoc_eb_ai; ČSÚ | Eurostat; ČSÚ | 2026 | ČSÚ PDF (H2) | "V roce 2025 používalo některou z technologií umělé inteligence již 54 % velkých firem u nás ... průměr EU činí 55 %." | VERIFIED-PRIMARY | O |
| H11 | People aged 16-74 using generative AI tools | EU 32.66 % (news: 32.7 %), CZ 35.35 % | 2025 (last 3 months; first year measured) | EU survey on ICT use by individuals; CZ fieldwork Q2 2025, 3,963 households, 5,788 individuals | used any generative AI tool in the last 3 months | isoc_ai_iaiu; "32.7% of EU people used generative AI tools in 2025" | Eurostat | 16 Dec 2025 (data 5 Jun 2026) | https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251216-3 | "In 2025, 32.7% of people aged 16-74 in the EU used generative artificial intelligence (AI) tools." | VERIFIED-PRIMARY | O |
| H12 | Purpose of generative AI use | private: EU 25.49 / CZ 28.44 %; work: EU 15.36 / CZ 13.58 %; formal education: EU 9.32 / CZ 8.37 % | 2025 | 16-74 | purpose | isoc_ai_iaiu (API) | Eurostat | data 5 Jun 2026 | API: https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_ai_iaiu?geo=EU27_2020&geo=CZ | News release (Dec 2025) gave EU 25.1 % / 15.1 % / 9.4 %. The current database differs slightly, so use the database values and cite the data date | VERIFIED-PRIMARY (revision noted) | O |
| H13 | Generative AI use by age | 16-24: CZ 78.47 / EU 63.81 %; 25-54: 39.48 / 38.55 %; 55-74: 11.26 / 11.98 %; 65-74: 5.95 / 6.50 % | 2025 | age groups | any gen AI tool, last 3 months | isoc_ai_iaiu | Eurostat | 2026 | API as H12 | (dataset values) | VERIFIED-PRIMARY | O |
| H14 | ČSÚ national figure (16+) | 32 % of people 16+; 16-24: 78 %; men 34 %, women 30 %; basic education 16 % vs university 60 % (working age); "a fifth of working people" use AI for work | 2025 | CZ population 16+ (8.8 million) | ČSÚ question: "Využil(a) jste nástroje umělé inteligence (např. Chat GPT nebo Copilot), které jsou určeny pro vytváření textů, obrázků nebo kódu?" (last 3 months) | "Umělou inteligenci používá třetina populace" | ČSÚ | 11 Nov 2025 | https://csu.gov.cz/produkty/umelou-inteligenci-pouziva-tretina-populace | "Nástroje umělé inteligence pro tvorbu obsahu používalo v roce 2025 v Česku 32 procent osob ve věku 16 a více let." | VERIFIED-PRIMARY. The 2024 ČSÚ household publication has no AI questions | O |
| H15 | Czech agencies using AI | 95 % of 60 agencies; 2 of 60 avoid AI | May-Aug 2024 | 60 leaders of advertising and PR agencies (qualitative; project of the Ministry of Culture) | uses AI for at least some tasks | "AI nástroje v komunikačních agenturách mění jejich práci" | AKA + APRA | 21 Nov 2024 | https://www.aka.cz/clanek/ai-nastroje-v-komunikacnich-agenturach-meni-jejich-praci/ | "Alespoň na některou z činností používá AI 95 % reklamních a PR agentur ... Jen dvě firmy ze šedesáti se AI vyhýbají." | VERIFIED-PRIMARY | I |
| H16 | Czech agencies: jobs and contracts | 8 % laid off staff because of AI tools (ad 10 %, PR 5 %); 23 % ban some apps; 46 % mention AI in contracts; 64 % declare the AI share of their work | May-Aug 2024 | same 60 | as stated | same press release (MAM reprint) | AKA + APRA | 25 Nov 2024 | https://www.mam.cz/novinky/komunita-a-lide/komunita/2024-11/ai-pouzivaji-prakticky-vsechny-komunikacni-agentury-jen-osm-procent-propoustelo/ | "Jen necelá desetina komunikačních agentur propouštěla v důsledku nástupu nových nástrojů - v případě reklamních to bylo deset procent, v PR pět procent." | VERIFIED-PRIMARY (press release) | I |
| H17 | US ad executives: AI used in the creative process | 83 % (2026 study) vs 60 % (2024 study) | Oct 2025-Jan 2026; comparison Aug-Oct 2024 | 104 US ad executives (companies spending $1M+ on media); 2024: 75 | "company has deployed AI in the creative process" | "The AI Ad Gap Widens" | IAB with Sonata Insights (Attest platform) | 15 Jan 2026 | https://www.iab.com/insights/the-ai-gap-widens/ | "83% of ad executives now say their company has deployed AI in the creative process, up from 60% in the 2024 study." | VERIFIED-PRIMARY | I (trade association) |
| H18 | Perception gap | executives' estimate 82 % vs consumers' actual 45 % positive; gap 32 pts (2024) → 37 pts (2026) | Oct 2025-Jan 2026 | 505 US Gen Z (16-27) and Millennials (28-43) + 104 executives | feel very or somewhat positive about AI-generated ads | same | IAB / Sonata | 15 Jan 2026 | same | "82% of ad executives believe Gen Z/Millennial consumers feel very or somewhat positive about AI-generated ads, nearly double the 45% of consumers who actually feel that way." | VERIFIED-PRIMARY | I |
| H19 | Consumers who believe they have seen an AI-made ad | 71 % (2026) vs 54 % (2024) | as above | 505 (2026), 300 (2024) US Gen Z/Millennials | self-report | same | IAB / Sonata | 15 Jan 2026 | same | "71% of Gen Z/Millennial consumers believe they have seen an ad created using AI, up from 54% in 2024." | VERIFIED-PRIMARY | I |
| H20 | Negative sentiment by generation | Gen Z 39 % vs Millennials 20 % (2026); 21 % vs 15 % (2024) | as above | as above | feel very or somewhat negative | same | IAB / Sonata | 15 Jan 2026 | same | "The percentage reporting they feel very or somewhat negative (39%) is now nearly double that of Millennials (20%)." | VERIFIED-PRIMARY | I |
| H21 | Disclosure by advertisers | 89 % of advertisers who used gen AI in ads disclose at least sometimes; fewer than half always | as above | 104 executives | self-report | same | IAB / Sonata | 15 Jan 2026 | same | "Although 89% of advertisers who have used generative AI to create ads at least sometimes disclose, less than half always do" | VERIFIED-PRIMARY | I |
| H22 | Video ad buyers and GenAI | 86 % using or planning to use GenAI for video creative; buyers project GenAI will make 40 % of all video ads by 2026 | 2025 | US digital video buyers (IAB with Advertiser Perceptions); sample size not stated in the release | self-report / projection | "Nearly 90% of Advertisers will Use Gen AI to Build Video Ads" | IAB | 15 Jul 2025 | https://www.iab.com/news/nearly-90-of-advertisers-will-use-gen-ai-to-build-video-ads/ | "86% of buyers using/planning to use it to build video ad creative. Buyers project GenAI creative will reach 40% of all ads by 2026" | VERIFIED-PRIMARY (sample size UNVERIFIED) | I |
| H23 | European ad ecosystem | 85 % use AI-based tools for marketing; most often targeting (64 %) and content generation (61 %) | 2025 | "nearly 100 responses" from advertisers, agencies, ad tech and publishers (over half answered in German) | self-report | "The Impact of AI on Digital Advertising" | IAB Europe | 18 Sep 2025 | https://iabeurope.eu/iab-europe-releases-first-impact-of-ai-on-digital-advertising-report-revealing-widespread-adoption-rising-investment-and-urgent-calls-for-governance/ | "The majority of companies (85%) report using AI-based tools for marketing purposes, most commonly for targeting (64%) and content generation (61%)." | VERIFIED-PRIMARY (fieldwork dates UNVERIFIED; small, self-selected sample) | I |
| H24 | Meta advertisers using gen AI creative tools | >4 million, up from ~1 million six months earlier | Q4 2024 | Meta advertisers | used at least one gen AI ad creative tool | Q4 2024 earnings call transcript | Meta | 29 Jan 2025 | https://s21.q4cdn.com/399680738/files/doc_financials/2024/q4/META-Q4-2024-Earnings-Call-Transcript.pdf | "More than 4 million advertisers are now using at least one of our generative AI ad creative tools, up from one million six months ago." | VERIFIED-PRIMARY | V |
| H25 | Meta, 2026 | >8 million advertisers; video generation feature ">3% higher conversion rates in tests" | Q1 2026 | Meta advertisers | same | Q1 2026 earnings call transcript | Meta | 29 Apr 2026 | https://s21.q4cdn.com/399680738/files/doc_financials/2026/q1/META-Q1-2026-Earnings-Call-Transcript.pdf | "more than 8 million advertisers using at least one of our gen AI ad creative tools ... advertisers using our video generation feature seeing more than 3% higher conversion rates in tests." | VERIFIED-PRIMARY | V |
| H26 | Meta, mid-2026 (different metric) | 9 million small businesses | Q2 2026 | small businesses | at least one "AI ad creative tool" | Q2 2026 earnings call transcript | Meta | 29 Jul 2026 | https://s21.q4cdn.com/399680738/files/doc_financials/2026/q2/META-Q2-2026-Earnings-Call-Transcript.pdf | "9 million small businesses on our platforms are now using at least one of our AI ad creative tools" | VERIFIED-PRIMARY. Not comparable with H24-H25 | V |
| H27 | Why hands failed (2023) | explanation from Stability AI | Jan 2023 | n/a | n/a | "AI Image Generators Keep Messing Up Hands. Here's Why." | BuzzFeed News, Pranav Dixit | 31 Jan 2023 | https://www.buzzfeednews.com/article/pranavdixit/ai-generated-art-hands-fingers-messed-up | "It's generally understood that within AI datasets, human images display hands less visibly than they do faces." / "Hands also tend to be much smaller in the source images" | VERIFIED-SECONDARY (read via WebFetch; curl blocked) | V (quoted vendor) |
| H28 | DALL-E 2 text failure | n/a | Apr 2022 | n/a | n/a | Hierarchical Text-Conditional Image Generation with CLIP Latents | OpenAI (Ramesh et al.) | 13 Apr 2022 | https://arxiv.org/abs/2204.06125 | "A similar and likely related issue is that unCLIP struggles at producing coherent text, as illustrated in Figure 16" | VERIFIED-PRIMARY | V (research paper) |
| H29 | DALL-E 3 improves text and hands (vendor) | n/a | Sep 2023 | n/a | n/a | DALL·E 3 page | OpenAI | 20 Sep 2023 (archived) | https://web.archive.org/web/20230920171845/https://openai.com/dall-e-3 | "DALL·E 3 delivers significant improvements over DALL·E 2 when generating text within an image and in human details like hands." | VERIFIED-PRIMARY | V |
| H30 | Consistency in 2022 required fine-tuning | 3-5 photos | Aug 2022 | n/a | n/a | DreamBooth | Google Research | 25 Aug 2022 | https://arxiv.org/abs/2208.12242 | "these models lack the ability to mimic the appearance of subjects in a given reference set and synthesize novel renditions of them in different contexts" | VERIFIED-PRIMARY | V (research paper) |
| H31 | Built-in consistency and editing (2025) | n/a | Aug 2025 | n/a | n/a | Introducing Gemini 2.5 Flash Image | Google | 26 Aug 2025 | https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/ | "maintain character consistency for rich storytelling, make targeted transformations using natural language" and also "We are actively working to improve long-form text rendering, even more reliable character consistency" | VERIFIED-PRIMARY | V |
| H32 | Multi-reference and legible text (late 2025) | up to 14 images, up to 5 people | Nov 2025 | n/a | n/a | Introducing Nano Banana Pro | Google DeepMind | 20 Nov 2025 | https://deepmind.google/blog/introducing-nano-banana-pro/ | "using up to 14 images and maintaining the consistency and resemblance of up to 5 people" ; "Generate images with accurate text in multiple languages" | VERIFIED-PRIMARY | V |
| H33 | Midjourney V8 text | n/a | Mar 2026 | n/a | n/a | V8 Alpha | Midjourney | 17 Mar 2026 | https://updates.midjourney.com/v8-alpha/ | "Text rendering works better than ever (when specified in 'quotes')." | VERIFIED-PRIMARY | V |
| H34 | OpenAI image text rendering | n/a | Mar 2025; Apr 2026 | n/a | n/a | OpenAI RSS descriptions | OpenAI | 25 Mar 2025; 21 Apr 2026 | https://openai.com/news/rss.xml | 4o: "including stronger text rendering and instruction following"; Images 2.0: "with improved text rendering, multilingual support, and visual reasoning" | VERIFIED-PRIMARY (feed text) | V |
| H35 | Pope image: creation and tells | posted 24 Mar 2023 | Mar 2023 | n/a | n/a | BuzzFeed News; The Verge | Chris Stokel-Walker; James Vincent | 27 Mar 2023 | https://www.buzzfeednews.com/article/chrisstokelwalker/pope-puffy-jacket-ai-midjourney-image-creator-interview ; https://www.theverge.com/2023/3/27/23657927/ai-pope-image-fake-midjourney-computer-generated-aesthetic | BuzzFeed: "He generated the first three images around 2 p.m. local time last Friday." Verge: "There's the not quite hand not quite grasping a not quite coffee cup; a crucifix without proper right angles ... and the edge of a glasses lens that somehow transitions into its own shadow" | VERIFIED-PRIMARY (reporting) / Midjourney version UNVERIFIED | n/a |
| H36 | Spaghetti clip date | 27 Mar 2023, 23:13 UTC | Mar 2023 | n/a | n/a | archived Reddit post data | Reddit (archived) | archived 28 Mar 2023 | see timeline | post object t3_1244h2c: created 1679958794000 ms, author chaindrop, title "Will Smith eating spaghetti" | VERIFIED-PRIMARY. "23 March" (Know Your Meme, Commons) is CONTRADICTED | n/a |
| H37 | Théâtre D'opéra Spatial process | ≥624 prompt iterations; USCO refusal 5 Sep 2023 | 2022-2023 | n/a | n/a | USCO Review Board decision | U.S. Copyright Office | 5 Sep 2023 | https://www.copyright.gov/rulings-filings/review-board/docs/Theatre-Dopera-Spatial.pdf | "input numerous revisions and text prompts at least 624 times to arrive at the initial version of the image" | VERIFIED-PRIMARY | O (legal record) |
| H38 | Heinz A.I. Ketchup | n/a | Aug 2022 | n/a | n/a | "Heinz Taps State-of-the-Art AI to Design Its Next Ad Campaign" | Adweek, Patrick Kulp | 1 Aug 2022 | https://www.adweek.com/commerce/heinz-taps-ai-design-next-ad-campaign/ | "most seemed to have adopted the trademark fringe, shape and lettering of a Heinz label" | VERIFIED-SECONDARY | n/a |
| H39 | Smart Bidding (2016) | n/a | Jul 2016 | n/a | n/a | "Get more powerful bid automation with new AdWords Smart Bidding" | Google, Anthony Chavez | 25 Jul 2016 | https://blog.google/products-and-platforms/products/ads/more-powerful-bid-automation-with-smart-bidding/ | "Today, we're excited to announce Smart Bidding, our new name for conversion-based automated bidding across AdWords and DoubleClick Search that reflects the powerful machine learning behind it." | VERIFIED-PRIMARY | V |
| H40 | Veo 3 spaghetti remake | 22 May 2025 | May 2025 | n/a | n/a | "Google's Veo 3 Nails the Infamous Will Smith Eating Spaghetti Test" | PetaPixel, Pesala Bandara | 28 May 2025 | https://petapixel.com/2025/05/28/googles-veo-3-nails-the-infamous-will-smith-eating-spaghetti-test/ | "One particularly lifelike clip made using Veo 3, shared by AI content creator Javi Lopez ... the actor bizarrely makes crunching and squelching noises" | VERIFIED-SECONDARY | n/a |

---

## 5. Chart-ready CSV blocks

One CSV per comparable measure. Values are Eurostat API values unless stated otherwise; round to whole numbers on slides.

### 5.1 Enterprises (10+ employees) using at least one AI technology, % of enterprises
```csv
year,geo,value,unit,note,source_url
2021,EU27,7.65,% of enterprises,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2023,EU27,8.06,% of enterprises,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2024,EU27,13.48,% of enterprises,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2025,EU27,19.95,% of enterprises,2025 adds image/video/audio generation category,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2021,CZ,4.46,% of enterprises,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2023,CZ,5.90,% of enterprises,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2024,CZ,11.26,% of enterprises,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2025,CZ,17.60,% of enterprises,2025 adds image/video/audio generation category,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
```

### 5.2 Share of AI-using enterprises that use AI for marketing or sales, % of AI-using enterprises
```csv
year,geo,value,unit,note,source_url
2021,EU27,21.36,% of enterprises using AI,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2023,EU27,23.63,% of enterprises using AI,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2024,EU27,34.08,% of enterprises using AI,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2025,EU27,34.70,% of enterprises using AI,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2021,CZ,26.24,% of enterprises using AI,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2023,CZ,21.05,% of enterprises using AI,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2024,CZ,52.90,% of enterprises using AI,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
2025,CZ,59.16,% of enterprises using AI,CZ questionnaire wording includes customer support,https://csu.gov.cz/docs/107508/b09756a7-a39c-9eb9-b845-b69c4d89bd8d/06200525a10a.pdf
```

### 5.3 Enterprises in NACE M73-M75 (advertising and market research; other professional, scientific and technical; veterinary) using any AI, % of enterprises in sector
```csv
year,geo,value,unit,note,source_url
2021,EU27,12.50,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
2023,EU27,18.58,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
2024,EU27,33.66,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
2025,EU27,48.02,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
2021,CZ,5.54,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
2023,CZ,5.56,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
2024,CZ,26.18,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
2025,CZ,34.62,% of enterprises in M73-M75,,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ain2/default/table
```

### 5.4 Individuals using generative AI tools in the last 3 months, by age, % of individuals (2025)
```csv
age_group,geo,value,unit,period,source_url
16-74 (all),EU27,32.66,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
16-74 (all),CZ,35.35,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
16-24,EU27,63.81,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
16-24,CZ,78.47,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
25-54,EU27,38.55,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
25-54,CZ,39.48,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
55-74,EU27,11.98,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
55-74,CZ,11.26,% of individuals,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
```

### 5.5 Individuals aged 16-74 using generative AI, by purpose, % of individuals (2025)
```csv
purpose,geo,value,unit,period,source_url
private,EU27,25.49,% of individuals 16-74,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
private,CZ,28.44,% of individuals 16-74,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
work,EU27,15.36,% of individuals 16-74,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
work,CZ,13.58,% of individuals 16-74,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
formal education,EU27,9.32,% of individuals 16-74,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
formal education,CZ,8.37,% of individuals 16-74,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_ai_iaiu/default/table
```

### 5.6 AI technologies used by enterprises (10+), % of all enterprises (2025)
```csv
technology,geo,value,unit,period,source_url
generating text/code/speech,EU27,8.76,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
generating text/code/speech,CZ,12.78,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
generating pictures/video/sound,EU27,9.55,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
generating pictures/video/sound,CZ,9.68,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
text mining,EU27,11.75,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
text mining,CZ,7.15,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
machine learning for data analysis,EU27,5.10,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
machine learning for data analysis,CZ,6.91,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
AI-based process automation (RPA),EU27,5.35,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
AI-based process automation (RPA),CZ,4.07,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
speech recognition,EU27,7.22,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
speech recognition,CZ,3.57,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
image recognition,EU27,3.78,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
image recognition,CZ,2.10,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
autonomous machines,EU27,1.39,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
autonomous machines,CZ,1.10,% of enterprises,2025,https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table
```

### 5.7 US ad executives whose company has deployed AI in the creative process, % of executives (IAB, independent)
```csv
study,value,unit,fieldwork,sample,geo,source_url
2024 study,60,% of ad executives,Aug-Oct 2024,75 US ad executives,US,https://www.iab.com/insights/the-ai-gap-widens/
2026 study,83,% of ad executives,Oct 2025-Jan 2026,104 US ad executives,US,https://www.iab.com/insights/the-ai-gap-widens/
```

### 5.8 Feeling positive about AI-generated ads: executives' estimate vs consumers' answer (IAB 2026 study)
```csv
group,value,unit,fieldwork,sample,geo,source_url
ad executives' belief about consumers,82,% saying consumers feel very/somewhat positive,Oct 2025-Jan 2026,104 US ad executives,US,https://www.iab.com/insights/the-ai-gap-widens/
Gen Z + Millennial consumers,45,% feeling very/somewhat positive,Oct 2025-Jan 2026,505 US consumers aged 16-43,US,https://www.iab.com/insights/the-ai-gap-widens/
```

### 5.9 Consumers who believe they have seen an ad made with AI (IAB)
```csv
study,value,unit,fieldwork,sample,geo,source_url
2024 study,54,% of Gen Z/Millennial consumers,Aug-Oct 2024,300 US consumers,US,https://www.iab.com/insights/the-ai-gap-widens/
2026 study,71,% of Gen Z/Millennial consumers,Oct 2025-Jan 2026,505 US consumers,US,https://www.iab.com/insights/the-ai-gap-widens/
```

### 5.10 OPERATOR CLAIM: Meta advertisers using at least one gen AI ad creative tool (keep separate from surveys)
```csv
as_of,value_millions,qualifier,unit,statement_date,source_url
~Jul 2024,1,one million six months earlier,advertisers,2025-01-29,https://s21.q4cdn.com/399680738/files/doc_financials/2024/q4/META-Q4-2024-Earnings-Call-Transcript.pdf
Q4 2024,4,more than,advertisers,2025-01-29,https://s21.q4cdn.com/399680738/files/doc_financials/2024/q4/META-Q4-2024-Earnings-Call-Transcript.pdf
Q1 2026,8,more than,advertisers,2026-04-29,https://s21.q4cdn.com/399680738/files/doc_financials/2026/q1/META-Q1-2026-Earnings-Call-Transcript.pdf
```
(The Q2 2026 figure, "9 million small businesses ... AI ad creative tools", uses a different population and wording. Leave it out of this series or show it as a separate footnote.)

---

## 6. Gaps and unverified items

- **Web search budget ran out** partway through the statistics work. As a result, these were not checked: NielsenIQ or Kantar consumer studies on AI ads, WARC, Forrester, Gartner, academic papers on consumer response to AI ads, and Czech sources beyond AKA/APRA (e.g. IAB Czech, ČMS, SIMAR). The IAB "AI Ad Gap Widens" study is the only consumer-attitude source with a stated method.
- **Google operator claims** (how many advertisers use Google's gen AI creative tools) were not retrieved; abc.xyz blocks scripted access.
- **IAB 2025 video report (H22):** the sample size is not in the press release. **IAB Europe (H23):** "nearly 100 responses" is verified; fieldwork dates are not.
- **Comparability of Eurostat series:** 2025 adds "generating pictures, videos, sound/audio" to the list of AI technologies, so part of the 2024→2025 rise comes from the definition. ČSÚ says so explicitly. Put this in a chart footnote.
- **NACE M73-M75 is broader than advertising.** It also includes other professional, scientific and technical activities and veterinary work. Label it "advertising, market research and related services", not "ad agencies".
- **Eurostat news release vs database:** the Dec 2025 purpose shares for individuals (EU 25.1/15.1/9.4 %) differ slightly from the current database (25.49/15.36/9.32 %). Cite the database date (5 Jun 2026).
- **ČSÚ vs Eurostat population:** ČSÚ headline figures cover people aged 16+ (32 %); Eurostat covers 16-74 (35.4 % for CZ). Don't mix them in one chart.
- **Pope image:** the Midjourney version is not confirmed by the creator or by the reports read. Only "Midjourney, March 2023" is safe.
- **Will Smith spaghetti date:** the archived Reddit data says 27 Mar 2023 (23:13 UTC). Wikimedia Commons and Know Your Meme say 23 Mar. Use 27 Mar or just "March 2023". The Veo 3 clip's Commons file is nominated for deletion, and the source tweet could not be fetched directly (PetaPixel embeds and quotes it).
- **Midjourney open beta:** the official tweet is dated 13 Jul 2022 UTC (12 Jul, US Pacific time). "July 2022" is safe.
- **OpenAI dates** come from OpenAI's RSS feed and Wayback captures because openai.com returns 403 to scripts. The feed is OpenAI's own publication, so treat these as primary.
- **Gemini Omni:** the article has no visible date; 17 May 2026 is the DeepMind RSS date.
- **Expert systems:** DENDRAL's 1965 start comes from a 1993 retrospective written by the project's members.
- **Rights:** DALL-E 2 and DreamBooth figures are CC BY 4.0 (attribution required). Heinz, BuzzFeed and Reddit images are third-party material, to be used as cited examples only. The Pope and Will Smith images show real people, so label them as AI-generated on the slide.
- **Visual observations** (garbled labels in Heinz, "shutterstock" watermark traces in the ModelScope clip, possible finger errors in the DALL-E 2 hand sample) are my reading of the files, not quotes from a source. Check them on screen before presenting.
