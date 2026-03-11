// ./src/_plugin.ts
// License: Apache-2.0 (disclaimer at bottom of file)
import createPlugin, { Plugin } from "@extism/extism";
import { encode, decode } from "@msgpack/msgpack";

// ── Helpers ───────────────────────────────────────────────────────────────────

function dump(val: unknown): unknown {
  if (val instanceof Uint8Array) return val;
  if (typeof val === "object" && val !== null && "toMsgpack" in val) {
    return (val as PluginModel).toMsgpack();
  }
  return val;
}

export function pack(...args: unknown[]): Uint8Array {
  if (args.length === 1) return encode(dump(args[0]));
  return encode(args.map(dump));
}

function normalize(obj: unknown): unknown {
  if (obj instanceof Uint8Array) return obj;
  if (Array.isArray(obj)) {
    if (obj.every((v) => typeof v === "number")) return new Uint8Array(obj);
    return obj.map(normalize);
  }
  if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [k, normalize(v)]),
    );
  }
  return obj;
}

export function unpack(result: Uint8Array): Record<string, unknown> {
  return normalize(decode(result)) as Record<string, unknown>;
}

// ── Base model ────────────────────────────────────────────────────────────────

export abstract class PluginModel {
  abstract toMsgpack(): Record<string, unknown>;
}

// ── Plugin ────────────────────────────────────────────────────────────────────

let _plugin: Plugin | null = null;

export async function initPlugin(wasmBytes: ArrayBuffer): Promise<void> {
  _plugin = await createPlugin(wasmBytes, { useWasi: true });
}

/**
 * Convenience loader for Node.js — reads the bundled WASM from the package's
 * own dist directory. Call this instead of initPlugin when you don't want to
 * manage the WASM path yourself.
 *
 * @example
 * import { initPluginFromBundle } from "@aloecraft/aloecrypt";
 * await initPluginFromBundle();
 */
export async function initPluginFromBundle(): Promise<void> {
  const { readFile } = await import("fs/promises");
  const { fileURLToPath } = await import("url");
  const { dirname, join } = await import("path");
  const dir = dirname(fileURLToPath(import.meta.url));
  const wasm = await readFile(join(dir, "aloecrypt_plugin.wasm"));
  await initPlugin(new Uint8Array(wasm).buffer);
}

export async function call(
  fn: string,
  payload: Uint8Array,
): Promise<Uint8Array> {
  if (!_plugin)
    throw new Error("Plugin not initialised — call initPlugin() first");
  const result = await _plugin.call(fn, payload);
  if (!result) throw new Error(`Plugin call '${fn}' returned no output`);
  return result.bytes();
}
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
