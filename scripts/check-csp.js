const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const scriptTags = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];

if (scriptTags.length !== 1 || (scriptTags.length === 1 && /\bsrc\s*=/i.test(scriptTags[0][1]))) {
  throw new Error("Expected exactly one inline script and no external script tags.");
}

const policyTag = html.match(/<meta\s+http-equiv="Content-Security-Policy"\s+content="([^"]+)"/i);
if (!policyTag) {
  throw new Error("Content-Security-Policy meta tag was not found.");
}

const policyStart = html.indexOf(policyTag[0]);
const scriptStart = html.indexOf(scriptTags[0][0]);
if (policyStart > scriptStart) {
  throw new Error("Content-Security-Policy must appear before the inline script.");
}

const scriptSource = scriptTags[0][2].replace(/\r\n?/g, "\n");
const scriptHash = crypto.createHash("sha256").update(scriptSource, "utf8").digest("base64");
const policy = policyTag[1];
const scriptDirective = policy.match(/(?:^|;)\s*script-src\s+([^;]+)/i)?.[1] ?? "";

if (!scriptDirective.includes(`'sha256-${scriptHash}'`)) {
  throw new Error("CSP script hash does not match the inline script.");
}
if (/'unsafe-(?:inline|eval)'/i.test(scriptDirective)) {
  throw new Error("script-src must not allow unsafe-inline or unsafe-eval.");
}
if (!/(?:^|;)\s*object-src\s+'none'(?:;|$)/i.test(policy)) {
  throw new Error("CSP must disable object sources.");
}
if (!/(?:^|;)\s*base-uri\s+'none'(?:;|$)/i.test(policy)) {
  throw new Error("CSP must disable base URL overrides.");
}

console.log(`CSP check passed: ${scriptTags.length} inline script pinned with sha256-${scriptHash}.`);
