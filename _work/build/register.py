"""Builds the source and visual register (XLSX + Markdown) from out/registry.json,
which deck.js and the source/visual modules produce. Slide assignments come from
what the deck actually placed, so the register cannot drift from the slides."""
import json
from pathlib import Path
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill
from openpyxl.utils import get_column_letter

ROOT = Path(__file__).resolve().parents[2]
R = json.loads((Path(__file__).parent / 'out/registry.json').read_text())
S, V, TL, usage, plan = R['S'], R['V'], R['TYPE_LABEL'], R['usage']['slides'], R['plan']
tests = ROOT / '_work/tests'

# Sources the lead agent re-checked in the original (see _work/verification-log.md).
CHECKED = set('''silverside nbc_mcd npr_kalshi system1 futurism_coke commons_mcd mediar_rohlik cc_rohlik focus_princ
o2_blog mediar_o2 cc_bata mg_livesport irozhlas_eshop pid_bikes ressolution frank2024 aiact_faq eurlex_omnibus
eurostat_ent csu_ent eurostat_ind anth_opus55 oai_astra oai_gpt6pro oai_images25 anth_noimg a_chrome o_cloudbrowser
m_mcp_tools m_mcp_help g_mcp g_aimax g_textcust g_demandgen smec_aimax sklik_chytra osworld_paper anth_cu2024
anth_sonnet45 oai_cua oai_gpt54 oai_gpt55 xlang_verified osworld2 dalle2paper dreambooth adweek_heinz smartbid2016
adx2009 ws2025 verge_pope euronews_aitana hm_group zendrop ogilvy_lu csu_spotreba uohs_nealko zap_niq own_img own_llm own_c2pa'''.split())

def slide_label(u):
    return str(u['n']) if u['part'] == 'main' else f"P{u['n'] - len(plan)}"

src_slides, vis_slides = {}, {}
for u in usage:
    for k in u['sources']:
        src_slides.setdefault(k, []).append(slide_label(u))
    for k in u['visuals']:
        vis_slides.setdefault(k, []).append(slide_label(u))

KIND = {'real': 'Skutečná reklama nebo kampaň', 'hist': 'Dobová ukázka', 'own': 'Vlastní ukázka (AI, vytvořeno pro přednášku)', 'photo': 'Fotografie', 'shot': 'Snímek obrazovky'}

wb = Workbook()
head_font = Font(bold=True)
fill = PatternFill('solid', fgColor='F3F4F6')

def sheet(ws, header, rows, widths):
    ws.append(header)
    for c in ws[1]:
        c.font = head_font
        c.fill = fill
    for r in rows:
        ws.append(r)
    for i, w in enumerate(widths, 1):
        ws.column_dimensions[get_column_letter(i)].width = w
    for row in ws.iter_rows(min_row=2):
        for c in row:
            c.alignment = Alignment(wrap_text=True, vertical='top')
    ws.freeze_panes = 'A2'

# 1 Sources
ws = wb.active
ws.title = 'Zdroje'
rows = []
for k, s in S.items():
    used = src_slides.get(k, [])
    if not used:
        continue
    rows.append([k, s['short'], s['title'], s['pub'], s['date'], s['url'] or 'vlastní tvorba', TL[s['type']], ', '.join(used),
                 'ano, hlavní agent (viz _work/verification-log.md)' if k in CHECKED else 'podle rešerše subagenta s citací'])
sheet(ws, ['ID', 'Značka na slidu', 'Název', 'Vydavatel / autor', 'Datum', 'URL', 'Typ zdroje', 'Slidy', 'Ověřeno v původním zdroji'], rows, [16, 26, 60, 34, 22, 60, 22, 14, 30])

# 2 Visuals
ws = wb.create_sheet('Vizuály')
rows = []
for k, v in V.items():
    used = vis_slides.get(k, [])
    if not used:
        continue
    s = S.get(v['source'], {})
    rows.append([v['file'], v['depicts'], KIND.get(v['kind'], v['kind']), v['owner'], s.get('url', '') or 'vlastní tvorba', v['license'], ', '.join(used)])
for k, used in vis_slides.items():
    if k.startswith('sketch:'):
        name = k.split(':', 1)[1]
        rows.append([f'04_Podklady/obrazky/skici/{name}.svg (+ .png)', 'Ručně kreslená skica (rough.js)', 'Vlastní skica', 'Vlastní tvorba', 'vlastní tvorba', 'Vlastní tvorba, volně upravitelné (SVG)', ', '.join(used)])
sheet(ws, ['Soubor', 'Co zobrazuje', 'Druh', 'Autor / vlastník', 'Zdroj', 'Licence / podmínky užití', 'Slidy'], rows, [70, 60, 30, 45, 55, 55, 12])

# 3 Own demos with prompts
ws = wb.create_sheet('Vlastní ukázky')
prompts = json.loads((tests / 'prompts.json').read_text())
demos = json.loads((tests / 'demos.json').read_text())
sdxl = json.loads((tests / 'sdxl/log.json').read_text())
rows = []
for k, pr in prompts.items():
    for i in range(1, 5):
        rows.append([f'{k} pokus {i}', 'SDXL 1.0 base (Stability AI, 7/2023), lokálně, 1024×1024, 30 kroků, CFG 7, seed ' + str(i), '22. 9. 2026', pr, f'_work/tests/sdxl/{k}_seed{i}.png', 'bez úprav'])
        rows.append([f'{k} pokus {i}', 'Generátor OpenAI, nástroj image_gen v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image)', '22. 9. 2026', pr, f'04_Podklady/obrazky/vlastni-ukazky/01_srovnani-2023-2026/dnes-openai-codex/{k}_pokus{i}.png', 'bez úprav'])
names = {'D1': 'D1_zatoka-v-zime.png', 'D2': 'D2_pekarstvi-nemecky.png', 'D3': ['D3_stejna-postava-kavarna.png', 'D3_stejna-postava-stanice.png'], 'D4': 'D4_bez-log-a-sloganu.png'}
for k, d in demos.items():
    files = names[k] if isinstance(names[k], list) else [names[k]]
    for pr, f in zip(d['prompts'], files):
        rows.append([k, 'Generátor OpenAI, nástroj image_gen v Codex CLI 0.156.0 (C2PA: ChatGPT, gpt-image)', '22. 9. 2026', f'Vstup: {d["input"]}. Zadání: {pr}', f'04_Podklady/obrazky/vlastni-ukazky/02_upravy-a-varianty/{f}', '1 pokus, bez úprav'])
sheet(ws, ['Ukázka', 'Model a nastavení', 'Datum', 'Zadání (doslova)', 'Soubor', 'Úpravy'], rows, [14, 55, 12, 90, 70, 16])

# 4 Charts
ws = wb.create_sheet('Grafy')
sheet(ws, ['Graf', 'Slide', 'Data (upravitelný CSV)', 'Zdroj', 'Poznámka'], [
    ['Firmy s 10+ zaměstnanci používající AI, EU a ČR, 2021 až 2025', '15', '04_Podklady/grafy/graf-1_firmy-pouzivajici-ai.csv', 'Eurostat isoc_eb_ai (API, data 15. 6. 2026)', 'Rok 2022 se neměřil. Od 2025 nová kategorie AI (obraz, video, zvuk). Graf je v PPTX nativní a lze ho upravit v PowerPointu (Upravit data).'],
    ['Nejlepší zveřejněné výsledky v testu OSWorld', '18', '04_Podklady/grafy/graf-2_osworld-vysledky.csv', 'Autoři testu a výrobci modelů (viz CSV)', 'Dvě varianty testu jsou odlišené barvou. Body mimo graf a jejich důvod: graf-2b_osworld-mimo-graf.csv.'],
], [55, 8, 60, 45, 90])

# 5 Slides
ws = wb.create_sheet('Slidy')
rows = []
for u in usage:
    t = next((p for p in plan if p['n'] == u['n']), None)
    title = R['titles'][u['n'] - 1] if u['part'] == 'main' else u['name']
    rows.append([slide_label(u), title, f"{t['dur']} s" if t else 'příloha', f"{t['start'] // 60}:{t['start'] % 60:02d} až {t['end'] // 60}:{t['end'] % 60:02d}" if t else '', ', '.join(S[k]['short'] for k in u['sources']), ', '.join(u['visuals'])])
sheet(ws, ['Slide', 'Název', 'Délka', 'Průběžný čas', 'Zdroje', 'Vizuály (klíče)'], rows, [8, 55, 10, 16, 80, 60])

out = ROOT / '03_Zdroje'
out.mkdir(exist_ok=True)
wb.save(out / 'Zdroje-a-vizualy.xlsx')

# Markdown copy for quick reading
md = ['# Zdroje a vizuály', '', 'Stav k 22. 9. 2026. Čísla slidů odpovídají prezentaci Umela-inteligence-v-reklame.pptx (P = příloha).', '', '## Zdroje', '']
for k, s in S.items():
    if k in src_slides:
        link = f"[{s['url']}]({s['url']})" if s['url'] else 'vlastní tvorba'
        md.append(f"- **{s['short']}**: {s['pub']}, *{s['title']}*, {s['date']}. {link}. {TL[s['type']]}. Slidy {', '.join(src_slides[k])}.")
md += ['', '## Vizuály', '']
for k, v in V.items():
    if k in vis_slides:
        md.append(f"- `{v['file']}`: {v['depicts']}. {KIND.get(v['kind'], v['kind'])}. {v['owner']}. Licence: {v['license']}. Slidy {', '.join(vis_slides[k])}.")
md.append('- Skici: `04_Podklady/obrazky/skici/*.svg` a `.png`, vlastní tvorba.')
(out / 'Zdroje-a-vizualy.md').write_text('\n'.join(md) + '\n')
print('register written', len(src_slides), 'sources used,', len(vis_slides), 'visual keys used')
