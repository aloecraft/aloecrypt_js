# @aloecraft/aloecrypt

<div align="center">

<img src="https://raw.githubusercontent.com/Aloecraft-org/aloecrypt_py/main/docs/icon.png" style="height:96px; width:96px;"/>

[![npm version](https://img.shields.io/npm/v/@aloecraft/aloecrypt)](https://www.npmjs.com/package/@aloecraft/aloecrypt)
[![npm downloads](https://img.shields.io/npm/dm/@aloecraft/aloecrypt)](https://www.npmjs.com/package/@aloecraft/aloecrypt)
[![License](https://img.shields.io/npm/l/@aloecraft/aloecrypt)](https://github.com/Aloecraft-org/aloecrypt_js/blob/main/LICENSE)

**A post-quantum secure messaging library for JavaScript and TypeScript**

</div>

Provides mutual authentication and encrypted sessions using ML-KEM-768 (Kyber)
for key encapsulation and ML-DSA-65 (Dilithium) for signatures, with
ChaCha20-Poly1305 for symmetric encryption. The cryptographic core runs as a
WebAssembly plugin — no native dependencies.

## Installation
```bash
npm install @aloecraft/aloecrypt
```

## Setup

The WASM plugin must be initialised before any other calls. In Node:
```typescript
import { initPluginFromBundle } from "@aloecraft/aloecrypt";

await initPluginFromBundle();
```

Or if you need control over the WASM path:
```typescript
import { readFile } from "fs/promises";
import { initPlugin } from "@aloecraft/aloecrypt";

const wasm = await readFile("path/to/aloecrypt_plugin.wasm");
await initPlugin(new Uint8Array(wasm).buffer);
```

In a browser (requires COOP/COEP headers):
```typescript
import { initPlugin } from "@aloecraft/aloecrypt";

const wasm = await fetch("/aloecrypt_plugin.wasm").then(r => r.arrayBuffer());
await initPlugin(wasm);
```

## Quick example
```typescript
import { DilithiumSigner, SessionBuilder, performHandshake } from "@aloecraft/aloecrypt";

const EMPTY_TIMESTAMP = new Uint8Array(8);

// Each party creates a root identity once and persists it
const rootA = await DilithiumSigner.new();
const rootB = await DilithiumSigner.new();

// Build sessions targeting each other's address
const builderA = await SessionBuilder.create(rootB.address, rootA);
const builderB = await SessionBuilder.create(rootA.address, rootB);

// Run the handshake
const [sessionA, sessionB] = await performHandshake(builderA, builderB);

// Encrypt and decrypt
const ciphertext = await sessionA.encrypt(new TextEncoder().encode("hello"));
const plaintext  = new TextDecoder().decode(await sessionB.decrypt(ciphertext));
console.log(plaintext); // hello
```

## Custom sessions from pre-shared secrets
```typescript
import { AloecryptSession } from "@aloecraft/aloecrypt";
import { randomBytes } from "crypto";

const rand = (n: number) => new Uint8Array(randomBytes(n));

const sessionA = await AloecryptSession.fromSecrets(
    rand(32), rand(32), rand(3309), rand(32), rand(32),  // party A
    rand(32), rand(32), rand(3309), rand(32), rand(32),  // party B
    rand(32),                                            // shared salt
);
```

## Key encapsulation
```typescript
import { KyberFullKEM } from "@aloecraft/aloecrypt";

const EMPTY_TIMESTAMP = new Uint8Array(8);
const delegate = await rootA.createDelegate(EMPTY_TIMESTAMP, EMPTY_TIMESTAMP, 0, 0);
const fullKem  = await KyberFullKEM.create(delegate, EMPTY_TIMESTAMP, EMPTY_TIMESTAMP, 0, 0);
const pubKem   = await fullKem.toPublic();

const [ciphertext, sentSecret] = await pubKem.encapsulate();
const recvSecret = await fullKem.decapsulate(ciphertext);
// sentSecret and recvSecret are identical
```

## Algorithms

| Role | Algorithm |
|---|---|
| Signing | ML-DSA-65 (Dilithium) |
| Key encapsulation | ML-KEM-768 (Kyber) |
| Symmetric encryption | ChaCha20-Poly1305 |
| Key derivation | HKDF-SHA256 |

## License

Apache-2.0 — Copyright Michael Godfrey 2026 | [aloecraft.org](https://aloecraft.org)
