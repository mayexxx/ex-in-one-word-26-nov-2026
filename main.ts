import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "Buffering";
if (text.length > 111 || !/^\S+$/u.test(text) || /[\r\n]/u.test(text)) {
  throw new Error("Entry must be one word, at most 111 characters, on one line");
}
const output = Buffer.from(`${text}\n`, "utf8");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", output);
if (!readFileSync("/output/entry.txt").equals(output)) {
  throw new Error("Written entry does not match expected output");
}
