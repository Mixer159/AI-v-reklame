#!/bin/zsh
# Usage: export.sh <abs pptx> <abs pdf> [timeout s]. Launches PowerPoint without
# window restoration (a restore prompt blocks AppleScript after a forced quit).
IN=$1; PDF=$2; TO=${3:-240}
ensure() {
  if ! pgrep -x "Microsoft PowerPoint" >/dev/null; then
    open -a "Microsoft PowerPoint" --args -ApplePersistenceIgnoreState YES; sleep 12
  fi
}
ensure
rm -f $PDF
timeout $TO osascript <<OSA >/dev/null 2>&1
with timeout of $TO seconds
tell application "Microsoft PowerPoint"
  open POSIX file "$IN"
  delay 2
  save active presentation in (POSIX file "$PDF") as save as PDF
  close active presentation saving no
end tell
end timeout
OSA
if [[ -f $PDF ]]; then echo "OK $PDF"; else echo "FAIL $IN"; pkill -9 -x "Microsoft PowerPoint"; sleep 3; fi
