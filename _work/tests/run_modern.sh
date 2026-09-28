#!/bin/zsh
cd ~/Documents/AI-v-reklame/_work/tests
for K in T1 T2 T3; do
  P=$(python3 -c "import json;print(json.load(open('prompts.json'))['$K'])")
  START=$(date +%s)
  codex exec --skip-git-repo-check -s workspace-write -C modern "Generate exactly 4 separate images with the built-in image_gen tool (4 separate calls, one image each). For every call use this prompt VERBATIM, without adding, removing or rewording anything, and request a square 1:1 image:

$P

Do not edit, upscale, crop or post-process the images. After all 4 are generated, copy them from the Codex generated_images folder into the current directory as ${K}_attempt1.png, ${K}_attempt2.png, ${K}_attempt3.png, ${K}_attempt4.png (convert to PNG only if needed, keep pixels unchanged), and write ${K}_log.json containing: the exact prompt string you passed to each call, the original source path of each file, pixel dimensions, and the image model name only if the tool reports it (otherwise null). Do not create any other files." > ${K}_codex.log 2>&1
  echo "$K finished in $(( $(date +%s) - START ))s" >> modern_times.log
done
echo ALL DONE >> modern_times.log
