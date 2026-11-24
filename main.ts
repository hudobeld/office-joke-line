// Office joke one-liner entry (Node 22, standard library only):
// writes the chosen joke to /output/entry.txt. That is all it has to do.
// Gate: entry.txt must be UTF-8, 1-199 characters, not only whitespace.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  '老板说团建是为了增进感情，结果全公司唯一达成的共识是：下次能不能直接发钱。';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
