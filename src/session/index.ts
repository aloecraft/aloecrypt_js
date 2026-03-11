// ./src/session/index.ts
// License: Apache-2.0 (disclaimer at bottom of file)
import { PluginModel, call, pack, unpack } from "../_plugin.js";
import { encode } from "@msgpack/msgpack";
import { DilithiumSigner, DilithiumVerifier } from "../signatory.js";
import { KyberFullKEM, KyberPublicKEM } from "../kem.js";

// ── CounterParty ──────────────────────────────────────────────────────────────

export class CounterParty extends PluginModel {
  address: Uint8Array;
  nonce: Uint8Array;
  signature: Uint8Array;
  stable_kem: KyberPublicKEM;
  session_kem: KyberPublicKEM;
  verifier: DilithiumVerifier;
  stable_secret: Uint8Array;
  session_secret: Uint8Array;

  constructor(fields: {
    address: Uint8Array;
    nonce: Uint8Array;
    signature: Uint8Array;
    stable_kem: KyberPublicKEM;
    session_kem: KyberPublicKEM;
    verifier: DilithiumVerifier;
    stable_secret: Uint8Array;
    session_secret: Uint8Array;
  }) {
    super();
    this.address = fields.address;
    this.nonce = fields.nonce;
    this.signature = fields.signature;
    this.stable_kem = fields.stable_kem;
    this.session_kem = fields.session_kem;
    this.verifier = fields.verifier;
    this.stable_secret = fields.stable_secret;
    this.session_secret = fields.session_secret;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      address: this.address,
      nonce: this.nonce,
      signature: this.signature,
      stable_kem: this.stable_kem.toMsgpack(),
      session_kem: this.session_kem.toMsgpack(),
      verifier: this.verifier.toMsgpack(),
      stable_secret: this.stable_secret,
      session_secret: this.session_secret,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): CounterParty {
    return new CounterParty({
      address: data.address as Uint8Array,
      nonce: data.nonce as Uint8Array,
      signature: data.signature as Uint8Array,
      stable_kem: KyberPublicKEM.fromMsgpack(
        data.stable_kem as Record<string, unknown>,
      ),
      session_kem: KyberPublicKEM.fromMsgpack(
        data.session_kem as Record<string, unknown>,
      ),
      verifier: DilithiumVerifier.fromMsgpack(
        data.verifier as Record<string, unknown>,
      ),
      stable_secret: data.stable_secret as Uint8Array,
      session_secret: data.session_secret as Uint8Array,
    });
  }
}

// ── Party ─────────────────────────────────────────────────────────────────────

export class Party extends PluginModel {
  nonce: Uint8Array;
  session_signature: Uint8Array;
  delegate_signer: DilithiumSigner;
  stable_kem: KyberFullKEM;
  session_kem: KyberFullKEM;
  stable_secret: Uint8Array;
  session_secret: Uint8Array;

  constructor(fields: {
    nonce: Uint8Array;
    session_signature: Uint8Array;
    delegate_signer: DilithiumSigner;
    stable_kem: KyberFullKEM;
    session_kem: KyberFullKEM;
    stable_secret: Uint8Array;
    session_secret: Uint8Array;
  }) {
    super();
    this.nonce = fields.nonce;
    this.session_signature = fields.session_signature;
    this.delegate_signer = fields.delegate_signer;
    this.stable_kem = fields.stable_kem;
    this.session_kem = fields.session_kem;
    this.stable_secret = fields.stable_secret;
    this.session_secret = fields.session_secret;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      nonce: this.nonce,
      session_signature: this.session_signature,
      delegate_signer: this.delegate_signer.toMsgpack(),
      stable_kem: this.stable_kem.toMsgpack(),
      session_kem: this.session_kem.toMsgpack(),
      stable_secret: this.stable_secret,
      session_secret: this.session_secret,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): Party {
    return new Party({
      nonce: data.nonce as Uint8Array,
      session_signature: data.session_signature as Uint8Array,
      delegate_signer: DilithiumSigner.fromMsgpack(
        data.delegate_signer as Record<string, unknown>,
      ),
      stable_kem: KyberFullKEM.fromMsgpack(
        data.stable_kem as Record<string, unknown>,
      ),
      session_kem: KyberFullKEM.fromMsgpack(
        data.session_kem as Record<string, unknown>,
      ),
      stable_secret: data.stable_secret as Uint8Array,
      session_secret: data.session_secret as Uint8Array,
    });
  }
}

// ── AloecryptSession ──────────────────────────────────────────────────────────

export class AloecryptSession extends PluginModel {
  party: Party;
  counter_party: CounterParty;
  session_salt: Uint8Array;

  constructor(fields: {
    party: Party;
    counter_party: CounterParty;
    session_salt: Uint8Array;
  }) {
    super();
    this.party = fields.party;
    this.counter_party = fields.counter_party;
    this.session_salt = fields.session_salt;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      party: this.party.toMsgpack(),
      counter_party: this.counter_party.toMsgpack(),
      session_salt: this.session_salt,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): AloecryptSession {
    return new AloecryptSession({
      party: Party.fromMsgpack(data.party as Record<string, unknown>),
      counter_party: CounterParty.fromMsgpack(
        data.counter_party as Record<string, unknown>,
      ),
      session_salt: data.session_salt as Uint8Array,
    });
  }

  // ── Methods ───────────────────────────────────────────────────────────────

  static async fromSecrets(
    stableSecretA: Uint8Array,
    sessionSecretA: Uint8Array,
    signatureA: Uint8Array,
    nonceA: Uint8Array,
    addressA: Uint8Array,
    stableSecretB: Uint8Array,
    sessionSecretB: Uint8Array,
    signatureB: Uint8Array,
    nonceB: Uint8Array,
    addressB: Uint8Array,
    sessionSalt: Uint8Array,
  ): Promise<AloecryptSession> {
    const payload = {
      stable_secret_a: stableSecretA,
      session_secret_a: sessionSecretA,
      signature_a: signatureA,
      nonce_a: nonceA,
      address_a: addressA,
      stable_secret_b: stableSecretB,
      session_secret_b: sessionSecretB,
      signature_b: signatureB,
      nonce_b: nonceB,
      address_b: addressB,
      session_salt: sessionSalt,
    };
    const result = await call("session_from_secrets", encode(payload));
    return AloecryptSession.fromMsgpack(unpack(result));
  }

  async encrypt(plaintext: Uint8Array): Promise<Uint8Array> {
    return call("session_encrypt", pack(this, plaintext));
  }

  async decrypt(ciphertext: Uint8Array): Promise<Uint8Array> {
    return call("session_decrypt", pack(this, ciphertext));
  }
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
