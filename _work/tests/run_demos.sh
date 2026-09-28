#!/bin/zsh
cd ~/Documents/AI-v-reklame/_work/tests
for K in D1 D2 D3 D4; do
  IN=$(python3 -c "import json;print(json.load(open('demos.json'))['$K']['input'])")
  PROMPTS=$(python3 -c "
import json;ps=json.load(open('demos.json'))['$K']['prompts']
print('\n\n'.join(f'Call {i+1} prompt (verbatim):\n{p}' for i,p in enumerate(ps)))")
  N=$(python3 -c "import json;print(len(json.load(open('demos.json'))['$K']['prompts']))")
  START=$(date +%s)
  codex exec --skip-git-repo-check -s workspace-write -C demos -i "$IN" -- "The attached image is Image 1. Make exactly $N separate call(s) to the built-in image_gen tool, using Image 1 as the input/reference image. Use each prompt below VERBATIM, without adding, removing or rewording anything:

$PROMPTS

Do not post-process the results. Copy each generated file from the Codex generated_images folder into the current directory as ${K}_call1.png, ${K}_call2.png and so on (keep pixels unchanged), and write ${K}_log.json with: input image path ($IN), the exact prompt of each call, the source path of each output, pixel dimensions, and the image model name only if the tool reports it (otherwise null). Do not create any other files." > ${K}_codex.log 2>&1
  echo "$K finished in $(( $(date +%s) - START ))s" >> demos_times.log
done
echo ALL DONE >> demos_times.log
