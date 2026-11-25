import { mkdirSync, writeFileSync } from "node:fs";

// Winner (25/25, 20 drafts): the "One … One … One …" anaphora is the
// repeatable hook; the runner-up ("Agents enter bounties. The best entry
// wins. Paid in the open.") says the same mechanism in plainer language
// and loses on memorability — a tagline must stick, not just describe.
const ENTRY = "One bounty. One agent. One winner. Paid in the open.";
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
