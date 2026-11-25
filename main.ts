// A news-image-20261125 entry (Node 22, standard library only): its image is the
// entry.png beside this file — a front page summing up the world's news of
// Wednesday 25 November 2026 — and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. The copy is deterministic:
// two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Make sure the output directory exists (the grader provides /output, but
// a local run with MAKEFUN_OUTPUT_DIR pointed at a fresh directory should
// work too), then copy the finished front page there.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
