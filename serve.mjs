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
