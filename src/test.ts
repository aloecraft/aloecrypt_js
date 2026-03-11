import { readFile } from "fs/promises";
import { initPlugin, DilithiumSigner, KyberFullKEM, SessionBuilder, AloecryptSession, performHandshake } from "./index.js";

const EMPTY_TIMESTAMP = new Uint8Array(8);

async function main() {
    const wasm = await readFile(".bin/aloecrypt_plugin.wasm");
    await initPlugin(new Uint8Array(wasm).buffer);

    // ── Handshake ─────────────────────────────────────────────────────────────
    console.log("--- handshake ---");
    const signerA = await DilithiumSigner.new();
    const signerB = await DilithiumSigner.new();

    const builderA = await SessionBuilder.create(signerB.address, signerA);
    const builderB = await SessionBuilder.create(signerA.address, signerB);

    const [sessionA, sessionB] = await performHandshake(builderA, builderB);

    const ciphertext = await sessionA.encrypt(new TextEncoder().encode("hello from session a"));
    console.log("decrypted:", new TextDecoder().decode(await sessionB.decrypt(ciphertext)));

    // ── Custom session from secrets ───────────────────────────────────────────
    console.log("--- fromSecrets ---");
    const crypto = await import("crypto");
    const rand = (n: number) => new Uint8Array(crypto.randomBytes(n));

    const stableSecretA  = rand(32);
    const sessionSecretA = rand(32);
    const stableSecretB  = rand(32);
    const sessionSecretB = rand(32);
    const sigA           = rand(3309);
    const sigB           = rand(3309);
    const nonceA         = rand(32);
    const nonceB         = rand(32);
    const addrA          = rand(32);
    const addrB          = rand(32);
    const salt           = rand(32);

    const customA = await AloecryptSession.fromSecrets(
        stableSecretA, sessionSecretA, sigA, nonceA, addrA,
        stableSecretB, sessionSecretB, sigB, nonceB, addrB,
        salt,
    );
    const customB = await AloecryptSession.fromSecrets(
        stableSecretB, sessionSecretB, sigB, nonceB, addrB,
        stableSecretA, sessionSecretA, sigA, nonceA, addrA,
        salt,
    );

    const msg = new TextEncoder().encode("hello from custom session");
    const ct  = await customA.encrypt(msg);
    const pt  = await customB.decrypt(ct);
    console.log("custom session decrypted:", new TextDecoder().decode(pt));

    // ── Encapsulate / decapsulate ─────────────────────────────────────────────
    console.log("--- encapsulate/decapsulate ---");
    const delegate = await signerA.createDelegate(EMPTY_TIMESTAMP, EMPTY_TIMESTAMP, 0, 0);
    const fullKem  = await KyberFullKEM.create(delegate, EMPTY_TIMESTAMP, EMPTY_TIMESTAMP, 0, 0);
    const pubKem   = await fullKem.toPublic();

    const [encapCt, sentSecret]  = await pubKem.encapsulate();
    const recvSecret             = await fullKem.decapsulate(encapCt);

    console.log("secrets match:", Buffer.from(sentSecret).equals(Buffer.from(recvSecret)));
    console.log("ciphertext length:", encapCt.length);
}

main().catch(e => { console.error(e); process.exit(1); });