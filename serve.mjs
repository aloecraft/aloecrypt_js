// ./serve.mjs
// License: Apache-2.0 (disclaimer at bottom of file)
import { createServer } from "http";
import { readFile } from "fs/promises";
import { extname, join } from "path";

const MIME = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".wasm": "application/wasm",
};

createServer(async (req, res) => {
    const file = join(".", req.url === "/" ? "index.html" : req.url);
    try {
        const body = await readFile(file);
        res.writeHead(200, {
            "Content-Type": MIME[extname(file)] ?? "application/octet-stream",
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        });
        res.end(body);
    } catch {
        res.writeHead(404).end();
    }
}).listen(8080, () => console.log("http://localhost:8080"));

// Copyright Michael Godfrey 2026 | aloecraft.org <michael@aloecraft.org>
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
