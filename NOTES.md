# Unsent: The Micro-Confession Sprint — entry notes

## Entry (exact bytes of `entry.txt`)

```text
To: Dad, the night you asked if I was happy
i said yes because you sounded so hopeful, and i've been lying about it ever since
```

## Design rationale (against the judge brief, in its order)

1. **Two-part confession.** A `To:` line naming who it was meant for (a role,
   "Dad", plus the one exact night) and the unsent message itself, one line,
   nothing after it. No joke, greeting, or motivational line.
2. **Reason it stayed in drafts is felt, not stated.** The words carry it:
   too kind to disappoint a hopeful father, too afraid to take the "yes"
   back — so the lie is still running ("ever since"). Nothing in the text
   explains why it was never sent; the reader feels it.
3. **To: line and message need each other.** Only Dad asked that question on
   that night, and only his hopeful voice explains the yes. Swap the
   addressee and the confession collapses.
4. **Reads as typed, never sent.** Lowercase throughout, no closing period —
   a draft abandoned mid-thought in a notes app, not a line polished to be
   sent. Specific and honest (one night, one voice, one ongoing lie) rather
   than general.
5. **One line, exactly as typed.** The message is a single line; no
   explanation follows it.

## Why this angle over the alternatives

- A best-friend / unrequited-love draft ("practiced saying congratulations
  in the mirror") was the runner-up, but it leans on a crafted image and the
  hurt is self-pitying; the Dad draft's hurt is outward (protecting him),
  which reads more genuinely unsent and less written-to-impress.
- An ex / social-media draft ("still check if you watched my story") was
  too common and too joke-adjacent; the judge explicitly demotes anything
  that reads as written to be sent.

## Program

`main.ts` (Node 22, standard library only) writes the fixed string above to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Deterministic:
no input, no network, no randomness, no clock.

## Validation

- Gate: total 126 characters (limit 1–260); message line 82 characters
  (limit 200); UTF-8, not only white space; exactly two lines.
- Two runs executed locally with `MAKEFUN_OUTPUT_DIR` pointed at two fresh
  directories; outputs compared byte-for-byte (see below).
- `node --check main.ts` passes (TypeScript syntax check via Node's
  type-stripping is not assumed; run output verified instead).

## Two-run verification

Run 1 and run 2 were executed back to back (commands in the build session);
both wrote identical bytes — SHA-256
`0737f09a29afdd479fc798c696bdd6b18b49dca7a7701670c64cac3d001961ff`, 126 bytes
each, `cmp` reports identical.
