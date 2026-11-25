// u-boothlord-unsent-the-micro-confession-sprint-8c6596ba entry.
// Reviser write (comment only): second write message for thinking_revised; no logic or data change.
// Node 22, standard library only: writes one fixed two-part micro-confession
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Gate: UTF-8, 1 to 260 characters, not only white space; the program runs
// twice and both runs must write the same bytes. Deterministic: fixed string,
// no input, no network, no randomness, no time.
//
// Design (see NOTES.md): a To: line naming a role and one exact night, plus
// the unsent line itself, typed lowercase with no closing period, as if left
// in drafts. The reason it stayed unsent is felt, never stated: too kind to
// tell Dad the truth, too afraid to take the yes back — so the lie is still
// running. Swapping the addressee breaks it: only Dad asked that question
// on that night, and only his hopeful voice explains the yes.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY = [
  'To: Dad, the night you asked if I was happy',
  "i said yes because you sounded so hopeful, and i've been lying about it ever since",
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
