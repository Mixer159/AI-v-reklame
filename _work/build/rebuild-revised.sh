#!/bin/bash
# Rebuild the shorter presentation using the project's installed dependencies.
set -euo pipefail

revision_build_dir="$(cd "$(dirname "$0")" && pwd)"
revision_root="$(cd "$revision_build_dir/../.." && pwd)"
revision_work="$revision_root/_work/revision"
revision_name="Umela-inteligence-v-reklame_zjednodusena"
revision_skill="/Users/maximkudela/.codex/plugins/cache/openai-primary-runtime/presentations/26.909.12148/skills/presentations/container_tools"

cd "$revision_build_dir"
node revised.js
python3 revised-package.py "$revision_work/$revision_name.pptx" "$revision_work/${revision_name}_staticke.pptx"
python3 "$revision_skill/inspect_presentation_package_integrity.py" "$revision_work/$revision_name.pptx" --fail-on-findings > "$revision_work/package-check.json"
python3 "$revision_skill/inspect_presentation_layout_geometry.py" "$revision_work/$revision_name.pptx" --expected-slide-count 17 --expected-aspect 16:9 --require-native-table-slide 12 --approved-font-family Georgia --approved-font-family Arial --validate-heading-fit --validate-bullet-geometry --fail-on-findings > "$revision_work/layout-check.json"
python3 "$revision_skill/native_quantitative_chart_gate.py" "$revision_work/$revision_name.pptx" --expected-chart-slides 9 --require-embedded-workbook-slide 9

# An isolated LibreOffice profile avoids touching the user's open documents.
mkdir -p "$revision_work/final-render"
soffice "-env:UserInstallation=file://$revision_work/lo-profile" --headless --convert-to pdf --outdir "$revision_work/final-render" "$revision_work/${revision_name}_staticke.pptx"
pdftoppm -jpeg -r 96 "$revision_work/final-render/${revision_name}_staticke.pdf" "$revision_work/final-render/slide"
cp "$revision_work/$revision_name.pptx" "$revision_root/01_Prezentace/$revision_name.pptx"
cp "$revision_work/final-render/${revision_name}_staticke.pdf" "$revision_root/01_Prezentace/$revision_name.pdf"
printf '%s\n' "Built PPTX and PDF in $revision_root/01_Prezentace. Inspect rendered slides before delivery."
