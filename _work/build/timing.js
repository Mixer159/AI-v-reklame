// Planned timing derived from the script itself, so the deck notes and the
// script document always agree. Assumption (not a measured rehearsal): 110 words
// per minute of live Czech delivery, plus the authored pause and 2 s transition.
const WPM = 110;
const TRANSITION = 2;

function words(spec) {
  return spec.say.join(' ').replace(/…/g, ' ').split(/\s+/).filter((x) => /[\p{L}\d]/u.test(x)).length;
}

function plan(MAIN) {
  let clock = 0;
  return MAIN.map((spec, i) => {
    const w = words(spec);
    const speak = Math.round((w / WPM) * 60);
    const dur = Math.ceil((speak + spec.pause + TRANSITION) / 5) * 5;
    const start = clock;
    clock += dur;
    return { n: i + 1, id: spec.id, words: w, speak, pause: spec.pause, dur, start, end: clock };
  });
}

const mmss = (t) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;

module.exports = { plan, words, mmss, WPM, TRANSITION };
