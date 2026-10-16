import { cp, rm, writeFile } from "node:fs/promises";
await rm("docs", { recursive: true, force: true });
await cp("out", "docs", { recursive: true });
await writeFile("docs/.nojekyll", "");
console.log("GitHub Pages output is ready in docs/");
