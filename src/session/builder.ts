// ./src/session/builder.ts
// License: Apache-2.0 (disclaimer at bottom of file)
import { PluginModel, call, pack, unpack } from "../_plugin.js";
import { DilithiumSigner, DilithiumVerifier } from "../signatory.js";
import { KyberFullKEM, KyberPublicKEM } from "../kem.js";

// ── Data classes ──────────────────────────────────────────────────────────────

export class FullCIPHER extends PluginModel {
  stable_cipher: Uint8Array;
  session_cipher: Uint8Array;
  stable_secret: Uint8Array;
  session_secret: Uint8Array;
  signature: Uint8Array;

  constructor(fields: {
    stable_cipher: Uint8Array;
    session_cipher: Uint8Array;
    stable_secret: Uint8Array;
    session_secret: Uint8Array;
    signature: Uint8Array;
  }) {
    super();
    this.stable_cipher = fields.stable_cipher;
    this.session_cipher = fields.session_cipher;
    this.stable_secret = fields.stable_secret;
    this.session_secret = fields.session_secret;
    this.signature = fields.signature;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      stable_cipher: this.stable_cipher,
      session_cipher: this.session_cipher,
      stable_secret: this.stable_secret,
      session_secret: this.session_secret,
      signature: this.signature,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): FullCIPHER {
    return new FullCIPHER(data as any);
  }
}

export class PartyCHALLENGE extends PluginModel {
  encrypted_challenge: Uint8Array;
  encrypted_check: Uint8Array;

  constructor(fields: {
    encrypted_challenge: Uint8Array;
    encrypted_check: Uint8Array;
  }) {
    super();
    this.encrypted_challenge = fields.encrypted_challenge;
    this.encrypted_check = fields.encrypted_check;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      encrypted_challenge: this.encrypted_challenge,
      encrypted_check: this.encrypted_check,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): PartyCHALLENGE {
    return new PartyCHALLENGE(data as any);
  }
}

export class PartyCIPHER extends PluginModel {
  stable_cipher: Uint8Array;
  session_cipher: Uint8Array;
  signature: Uint8Array;

  constructor(fields: {
    stable_cipher: Uint8Array;
    session_cipher: Uint8Array;
    signature: Uint8Array;
  }) {
    super();
    this.stable_cipher = fields.stable_cipher;
    this.session_cipher = fields.session_cipher;
    this.signature = fields.signature;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      stable_cipher: this.stable_cipher,
      session_cipher: this.session_cipher,
      signature: this.signature,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): PartyCIPHER {
    return new PartyCIPHER(data as any);
  }
}

export class PartyChallenge extends PluginModel {
  encrypted_challenge: Uint8Array;
  encrypted_check: Uint8Array;
  decrypted_challenge: Uint8Array;
  decrypted_check: Uint8Array;

  constructor(fields: {
    encrypted_challenge: Uint8Array;
    encrypted_check: Uint8Array;
    decrypted_challenge: Uint8Array;
    decrypted_check: Uint8Array;
  }) {
    super();
    this.encrypted_challenge = fields.encrypted_challenge;
    this.encrypted_check = fields.encrypted_check;
    this.decrypted_challenge = fields.decrypted_challenge;
    this.decrypted_check = fields.decrypted_check;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      encrypted_challenge: this.encrypted_challenge,
      encrypted_check: this.encrypted_check,
      decrypted_challenge: this.decrypted_challenge,
      decrypted_check: this.decrypted_check,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): PartyChallenge {
    return new PartyChallenge(data as any);
  }
}

export class PartyINTRO extends PluginModel {
  address: Uint8Array;
  nonce: Uint8Array;
  stable_kem: KyberPublicKEM;
  session_kem: KyberPublicKEM;
  verifier: DilithiumVerifier;

  constructor(fields: {
    address: Uint8Array;
    nonce: Uint8Array;
    stable_kem: KyberPublicKEM;
    session_kem: KyberPublicKEM;
    verifier: DilithiumVerifier;
  }) {
    super();
    this.address = fields.address;
    this.nonce = fields.nonce;
    this.stable_kem = fields.stable_kem;
    this.session_kem = fields.session_kem;
    this.verifier = fields.verifier;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      address: this.address,
      nonce: this.nonce,
      stable_kem: this.stable_kem.toMsgpack(),
      session_kem: this.session_kem.toMsgpack(),
      verifier: this.verifier.toMsgpack(),
    };
  }

  static fromMsgpack(data: Record<string, unknown>): PartyINTRO {
    return new PartyINTRO({
      address: data.address as Uint8Array,
      nonce: data.nonce as Uint8Array,
      stable_kem: KyberPublicKEM.fromMsgpack(
        data.stable_kem as Record<string, unknown>,
      ),
      session_kem: KyberPublicKEM.fromMsgpack(
        data.session_kem as Record<string, unknown>,
      ),
      verifier: DilithiumVerifier.fromMsgpack(
        data.verifier as Record<string, unknown>,
      ),
    });
  }
}

export class PartyRESPONSE extends PluginModel {
  decrypted_challenge: Uint8Array;

  constructor(fields: { decrypted_challenge: Uint8Array }) {
    super();
    this.decrypted_challenge = fields.decrypted_challenge;
  }

  toMsgpack(): Record<string, unknown> {
    return { decrypted_challenge: this.decrypted_challenge };
  }

  static fromMsgpack(data: Record<string, unknown>): PartyRESPONSE {
    return new PartyRESPONSE(data as any);
  }
}

export class PartySecret extends PluginModel {
  stable_secret: Uint8Array;
  session_secret: Uint8Array;
  signature: Uint8Array;

  constructor(fields: {
    stable_secret: Uint8Array;
    session_secret: Uint8Array;
    signature: Uint8Array;
  }) {
    super();
    this.stable_secret = fields.stable_secret;
    this.session_secret = fields.session_secret;
    this.signature = fields.signature;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      stable_secret: this.stable_secret,
      session_secret: this.session_secret,
      signature: this.signature,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): PartySecret {
    return new PartySecret(data as any);
  }
}

// ── SessionBuilder ────────────────────────────────────────────────────────────

export class SessionBuilder extends PluginModel {
  delegate_signer: DilithiumSigner;
  stable_kem: KyberFullKEM;
  session_kem: KyberFullKEM;
  nonce: Uint8Array;
  challenge_nonce: Uint8Array;
  session_salt: Uint8Array | null;
  signature: Uint8Array | null;
  cipher: FullCIPHER | null;
  counterparty_intro: PartyINTRO | null;
  counterparty_cipher: PartySecret | null;
  counterparty_challenge: PartyChallenge | null;
  build_ready: boolean;

  constructor(fields: {
    delegate_signer: DilithiumSigner;
    stable_kem: KyberFullKEM;
    session_kem: KyberFullKEM;
    nonce: Uint8Array;
    challenge_nonce: Uint8Array;
    session_salt: Uint8Array | null;
    signature: Uint8Array | null;
    cipher: FullCIPHER | null;
    counterparty_intro: PartyINTRO | null;
    counterparty_cipher: PartySecret | null;
    counterparty_challenge: PartyChallenge | null;
    build_ready: boolean;
  }) {
    super();
    this.delegate_signer = fields.delegate_signer;
    this.stable_kem = fields.stable_kem;
    this.session_kem = fields.session_kem;
    this.nonce = fields.nonce;
    this.challenge_nonce = fields.challenge_nonce;
    this.session_salt = fields.session_salt;
    this.signature = fields.signature;
    this.cipher = fields.cipher;
    this.counterparty_intro = fields.counterparty_intro;
    this.counterparty_cipher = fields.counterparty_cipher;
    this.counterparty_challenge = fields.counterparty_challenge;
    this.build_ready = fields.build_ready;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      delegate_signer: this.delegate_signer.toMsgpack(),
      stable_kem: this.stable_kem.toMsgpack(),
      session_kem: this.session_kem.toMsgpack(),
      nonce: this.nonce,
      challenge_nonce: this.challenge_nonce,
      session_salt: this.session_salt,
      signature: this.signature,
      cipher: this.cipher?.toMsgpack() ?? null,
      counterparty_intro: this.counterparty_intro?.toMsgpack() ?? null,
      counterparty_cipher: this.counterparty_cipher?.toMsgpack() ?? null,
      counterparty_challenge: this.counterparty_challenge?.toMsgpack() ?? null,
      build_ready: this.build_ready,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): SessionBuilder {
    return new SessionBuilder({
      delegate_signer: DilithiumSigner.fromMsgpack(
        data.delegate_signer as Record<string, unknown>,
      ),
      stable_kem: KyberFullKEM.fromMsgpack(
        data.stable_kem as Record<string, unknown>,
      ),
      session_kem: KyberFullKEM.fromMsgpack(
        data.session_kem as Record<string, unknown>,
      ),
      nonce: data.nonce as Uint8Array,
      challenge_nonce: data.challenge_nonce as Uint8Array,
      session_salt: data.session_salt as Uint8Array | null,
      signature: data.signature as Uint8Array | null,
      cipher: data.cipher
        ? FullCIPHER.fromMsgpack(data.cipher as Record<string, unknown>)
        : null,
      counterparty_intro: data.counterparty_intro
        ? PartyINTRO.fromMsgpack(
            data.counterparty_intro as Record<string, unknown>,
          )
        : null,
      counterparty_cipher: data.counterparty_cipher
        ? PartySecret.fromMsgpack(
            data.counterparty_cipher as Record<string, unknown>,
          )
        : null,
      counterparty_challenge: data.counterparty_challenge
        ? PartyChallenge.fromMsgpack(
            data.counterparty_challenge as Record<string, unknown>,
          )
        : null,
      build_ready: data.build_ready as boolean,
    });
  }

  // ── Methods ───────────────────────────────────────────────────────────────

  static async create(
    counterpartyAddress: Uint8Array,
    delegateSigner: DilithiumSigner,
  ): Promise<SessionBuilder> {
    const result = await call(
      "session_builder_new",
      pack(counterpartyAddress, delegateSigner),
    );
    return SessionBuilder.fromMsgpack(unpack(result));
  }

  get address(): Uint8Array {
    return (async () =>
      await call("session_builder_address", pack(this)))() as any;
  }

  async makePartyIntro(): Promise<PartyINTRO> {
    const result = await call("session_builder_make_party_intro", pack(this));
    return PartyINTRO.fromMsgpack(unpack(result));
  }

  async onCounterpartyIntro(intro: PartyINTRO): Promise<SessionBuilder> {
    const result = await call(
      "session_builder_on_counterparty_intro",
      pack(this, intro),
    );
    return SessionBuilder.fromMsgpack(unpack(result));
  }

  async makePartyCipher(): Promise<PartyCIPHER> {
    const result = await call("session_builder_make_party_cipher", pack(this));
    return PartyCIPHER.fromMsgpack(unpack(result));
  }

  async onCounterpartyCipher(cipher: PartyCIPHER): Promise<SessionBuilder> {
    const result = await call(
      "session_builder_on_counterparty_cipher",
      pack(this, cipher),
    );
    return SessionBuilder.fromMsgpack(unpack(result));
  }

  async makePartyChallenge(): Promise<PartyCHALLENGE> {
    const result = await call(
      "session_builder_make_party_challenge",
      pack(this),
    );
    return PartyCHALLENGE.fromMsgpack(unpack(result));
  }

  async onCounterpartyChallenge(
    challenge: PartyCHALLENGE,
  ): Promise<SessionBuilder> {
    const result = await call(
      "session_builder_on_counterparty_challenge",
      pack(this, challenge),
    );
    return SessionBuilder.fromMsgpack(unpack(result));
  }

  async makePartyChallengeResponse(): Promise<PartyRESPONSE> {
    const result = await call(
      "session_builder_make_party_challenge_response",
      pack(this),
    );
    return PartyRESPONSE.fromMsgpack(unpack(result));
  }

  async onCounterpartyChallengeResponse(
    response: PartyRESPONSE,
  ): Promise<SessionBuilder> {
    const result = await call(
      "session_builder_on_counterparty_challenge_response",
      pack(this, response),
    );
    return SessionBuilder.fromMsgpack(unpack(result));
  }

  async build(): Promise<AloecryptSession> {
    const result = await call("session_builder_build", pack(this));
    return AloecryptSession.fromMsgpack(unpack(result));
  }
}

// ── AloecryptSession forward declaration (defined in session/index.ts) ────────
import { AloecryptSession } from "./index.js";
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
