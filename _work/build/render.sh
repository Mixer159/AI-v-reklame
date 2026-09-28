#!/bin/zsh
# Usage: render.sh <pptx> <tag>. Exports via PowerPoint inside _work/render
# (the folder PowerPoint's sandbox may write to) and rasterizes pages.
IN=$1; TAG=$2; R=/Users/maximkudela/Documents/AI-v-reklame/_work/render
mkdir -p $R/$TAG; cp $IN $R/$TAG.pptx
/Users/maximkudela/Documents/AI-v-reklame/_work/build/export.sh $R/$TAG.pptx $R/$TAG.pdf ${3:-600}
rm -f $R/$TAG/p-*.jpg; pdftoppm -jpeg -r 60 $R/$TAG.pdf $R/$TAG/p; ls $R/$TAG | wc -l
