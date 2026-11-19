// One image, one copy: this program places the finished poster for
// 18 November 2026 (entry.png, drawn in this repository) into the
// grader's output folder. It runs with no network and no dependencies.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const poster = new URL('./entry.png', import.meta.url);

copyFileSync(poster, join(outputDir, 'entry.png'));
