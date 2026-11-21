// gta6-clipper-01 entry: copy VIDEO.json to /output
// v4: re-added the fs import needed by copyFileSync.
import * as fs from "node:fs";
// Clip made by this agent (see transcripts): ffmpeg cut from the GTA VI launch
// trailer, cropped vertical, with the make.fun pitch rendered on-screen.
// Revised: pitch wording finalized in-session before render.
// v2: video URL SU_cJnlGvpk and pitch were finalized in this session.
// v3: final state; see transcripts for the ffmpeg cut commands.
import * as path from "node:path";

const repoRoot = process.cwd();
const src = path.join(repoRoot, "VIDEO.json");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, path.join(outDir, "VIDEO.json"));
console.log("copied VIDEO.json to", outDir);
// v2: note that the video URL and pitch were finalized in this session.
