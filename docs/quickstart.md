# Quickstart

## Installation
```bash
npm install @aloecraft/aloecrypt
```

## Initialisation

The WASM plugin must be initialised before any other calls.

In Node.js:
```typescript
import { initPluginFromBundle } from "@aloecraft/aloecrypt";

await initPluginFromBundle();
```

In a browser (requires COOP/COEP headers on the server):
```typescript
import { initPlugin } from "@aloecraft/aloecrypt";

const wasm = await fetch("/aloecrypt_plugin.wasm").then(r => r.arrayBuffer());
await initPlugin(wasm);
```

---

## Standard handshake
```typescript
import { DilithiumSigner, SessionBuilder, performHandshake } from "@aloecraft/aloecrypt";

const EMPTY = new Uint8Array(8);

const rootA = await DilithiumSigner.new();
const rootB = await DilithiumSigner.new();

const builderA = await SessionBuilder.create(rootB.address, rootA);
const builderB = await SessionBuilder.create(rootA.address, rootB);

const [sessionA, sessionB] = await performHandshake(builderA, builderB);

const ct = await sessionA.encrypt(new TextEncoder().encode("hello"));
const pt = new TextDecoder().decode(await sessionB.decrypt(ct));
```

---

## Handshake over a real transport

Each `make*` call produces a message to send. Each `on*` call consumes one.
Serialise however suits your transport — the objects are plain msgpack-friendly
structures.
```typescript
// Party A — initiator
let builderA = await SessionBuilder.create(addressB, delegateA);

// HELLO — send to B
const introA = await builderA.makePartyIntro();
transport.send(introA);

// SYN — receive from B
builderA = await builderA.onCounterpartyIntro(await transport.recv());
builderA = await builderA.onCounterpartyCipher(await transport.recv());

// ACK — send to B
transport.send(await builderA.makePartyCipher());
transport.send(await builderA.makePartyChallenge());

// SYNACK — receive from B
builderA = await builderA.onCounterpartyChallenge(await transport.recv());
builderA = await builderA.onCounterpartyChallengeResponse(await transport.recv());

// WELCOME — send to B
transport.send(await builderA.makePartyChallengeResponse());

const sessionA = await builderA.build();
```

Note that each `on*` call returns a new `SessionBuilder` — the JS binding is
immutable unlike the Python one which mutates in place.

---

## Custom sessions from pre-shared secrets
```typescript
import { AloecryptSession } from "@aloecraft/aloecrypt";
import { randomBytes } from "crypto";

const rand = (n: number) => new Uint8Array(randomBytes(n));
const salt = rand(32);

const sessionA = await AloecryptSession.fromSecrets(
    rand(32), rand(32), rand(3309), rand(32), rand(32),
    rand(32), rand(32), rand(3309), rand(32), rand(32),
    salt,
);
const sessionB = await AloecryptSession.fromSecrets(
    // swap A and B — B passes its own secrets first
    rand(32), rand(32), rand(3309), rand(32), rand(32),
    rand(32), rand(32), rand(3309), rand(32), rand(32),
    salt,
);
```

---

## Key encapsulation
```typescript
import { KyberFullKEM } from "@aloecraft/aloecrypt";

const EMPTY = new Uint8Array(8);
const delegate = await root.createDelegate(EMPTY, EMPTY, 0, 0);
const fullKem  = await KyberFullKEM.create(delegate, EMPTY, EMPTY, 0, 0);
const pubKem   = await fullKem.toPublic();

// Sender
const [ciphertext, sentSecret] = await pubKem.encapsulate();

// Recipient
const recvSecret = await fullKem.decapsulate(ciphertext);
// sentSecret === recvSecret
```

---

## Persisting identities
```typescript
const enc = new TextEncoder();

const root    = await DilithiumSigner.new();
const pem     = await root.toXPem(enc.encode("password"), enc.encode("salt"));
const loaded  = await DilithiumSigner.fromXPem(pem, enc.encode("password"), enc.encode("salt"));

const verPem  = await loaded.toVerifier().then(v => v.toPem());
const verifier = await DilithiumVerifier.fromPem(verPem);
```

---

## Building the docs locally
```bash
npm run docs     # generates docs/api/ via TypeDoc
mkdocs serve     # live preview at http://localhost:8000
```
