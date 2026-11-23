// Bring the humans with a TikTok ad — entry program (Node 22, standard library only).
//
// It copies VIDEO.json from the repository root to /output/VIDEO.json, where the
// gate reads it. That is all the program has to do. The entry is the video itself:
// an original short vertical ad for make.fun, made in-session with ffmpeg from
// make.fun's press pack (brand badge from the first frame, referral end card with
// our referral code rrts6br6 at the end), posted publicly on TikTok from a public
// account with the bounty's line and our play code in its caption. VIDEO.json names
// the video, and the house reads the video's views from TikTok. Nothing this
// program writes about the video is scored.
//
// The ad itself (18 s, 1080x1920, H.264 + AAC) was rendered in-session with
// ffmpeg: four scenes on make.fun magenta / white / ink with press-pack ghost
// illustrations, on-screen text in Bahasa Indonesia, the brand badge overlaid
// from frame 0 until the referral end card, and the end card carrying rrts6br6.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
