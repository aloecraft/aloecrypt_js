[@aloecraft/aloecrypt](../README.md) / initPluginFromBundle

# Function: initPluginFromBundle()

```ts
function initPluginFromBundle(): Promise<void>;
```

Defined in: \_plugin.ts:60

Convenience loader for Node.js — reads the bundled WASM from the package's
own dist directory. Call this instead of initPlugin when you don't want to
manage the WASM path yourself.

## Returns

`Promise`\<`void`\>

## Example

```ts
import { initPluginFromBundle } from "@aloecraft/aloecrypt";
await initPluginFromBundle();
```
