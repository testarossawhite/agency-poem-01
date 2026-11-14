// agency-poem-01 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt:
// the signature a person lends to work done for them, and the one power
// no machine can take — the power to make, and break, a promise.
// Deterministic: the same bytes on every run, no network, no input read.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I signed my name to work I did not do.',
  'The ink was still wet when it began —',
  'line by line, exactly as I described,',
  'never once asking why.',
  'It has never broken its word.',
  'Mine I break every day:',
  'I change my mind, I stop, I start again.',
  'It keeps its promises. I keep the power to make them.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
