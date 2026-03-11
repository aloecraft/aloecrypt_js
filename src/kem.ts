// ./src/kem.ts
// License: Apache-2.0 (disclaimer at bottom of file)
import { PluginModel, call, pack, unpack } from "./_plugin.js";
import { DilithiumSigner } from "./signatory.js";

// ── KyberFullKEM ──────────────────────────────────────────────────────────────

export class KyberFullKEM extends PluginModel {
  kyb_pubkey: Uint8Array;
  kyb_privkey: Uint8Array;
  kyb_sig_bytes: Uint8Array;
  dlt_address: Uint8Array;
  dlt_auth_id: Uint8Array;
  dlt_created_at: Uint8Array;
  dlt_active_from: Uint8Array;
  dlt_expires_at: Uint8Array;
  dlt_refresh_count: number;
  dlt_max_refresh: number;

  constructor(fields: {
    kyb_pubkey: Uint8Array;
    kyb_privkey: Uint8Array;
    kyb_sig_bytes: Uint8Array;
    dlt_address: Uint8Array;
    dlt_auth_id: Uint8Array;
    dlt_created_at: Uint8Array;
    dlt_active_from: Uint8Array;
    dlt_expires_at: Uint8Array;
    dlt_refresh_count: number;
    dlt_max_refresh: number;
  }) {
    super();
    this.kyb_pubkey = fields.kyb_pubkey;
    this.kyb_privkey = fields.kyb_privkey;
    this.kyb_sig_bytes = fields.kyb_sig_bytes;
    this.dlt_address = fields.dlt_address;
    this.dlt_auth_id = fields.dlt_auth_id;
    this.dlt_created_at = fields.dlt_created_at;
    this.dlt_active_from = fields.dlt_active_from;
    this.dlt_expires_at = fields.dlt_expires_at;
    this.dlt_refresh_count = fields.dlt_refresh_count;
    this.dlt_max_refresh = fields.dlt_max_refresh;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      kyb_pubkey: this.kyb_pubkey,
      kyb_privkey: this.kyb_privkey,
      kyb_sig_bytes: this.kyb_sig_bytes,
      dlt_address: this.dlt_address,
      dlt_auth_id: this.dlt_auth_id,
      dlt_created_at: this.dlt_created_at,
      dlt_active_from: this.dlt_active_from,
      dlt_expires_at: this.dlt_expires_at,
      dlt_refresh_count: this.dlt_refresh_count,
      dlt_max_refresh: this.dlt_max_refresh,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): KyberFullKEM {
    return new KyberFullKEM(data as any);
  }

  // ── Methods ───────────────────────────────────────────────────────────────

  static async create(
    signer: DilithiumSigner,
    activeFrom: Uint8Array,
    expiresAt: Uint8Array,
    refreshCount: number,
    maxRefresh: number,
  ): Promise<KyberFullKEM> {
    const result = await call(
      "kyber_kem_new",
      pack(signer, activeFrom, expiresAt, refreshCount, maxRefresh),
    );
    return KyberFullKEM.fromMsgpack(unpack(result));
  }

  static async canonical(
    signer: DilithiumSigner,
    idx: Uint8Array,
    activeFrom: Uint8Array,
    expiresAt: Uint8Array,
    refreshCount: number,
    maxRefresh: number,
  ): Promise<KyberFullKEM> {
    const result = await call(
      "kyber_kem_canonical",
      pack(signer, idx, activeFrom, expiresAt, refreshCount, maxRefresh),
    );
    return KyberFullKEM.fromMsgpack(unpack(result));
  }

  static async fromXPem(
    pem: string,
    password: Uint8Array,
    salt: Uint8Array,
  ): Promise<KyberFullKEM> {
    const result = await call(
      "kyber_kem_from_x_pem",
      pack(pem, password, salt),
    );
    return KyberFullKEM.fromMsgpack(unpack(result));
  }

  get address(): Uint8Array {
    return this.dlt_address;
  }

  get authId(): Uint8Array {
    return this.dlt_auth_id;
  }

  async toPublic(): Promise<KyberPublicKEM> {
    const result = await call("kyber_kem_into_public", pack(this));
    return KyberPublicKEM.fromMsgpack(unpack(result));
  }

  async toXPem(password: Uint8Array, salt: Uint8Array): Promise<string> {
    const result = await call("kyber_kem_to_x_pem", pack(this, password, salt));
    return new TextDecoder().decode(result);
  }

  async signingMaterial(): Promise<Uint8Array> {
    return call("kyber_kem_signing_material", pack(this));
  }

  async decapsulate(ciphertext: Uint8Array): Promise<Uint8Array> {
    return call("kyber_full_kem_decapsulate", pack(this, ciphertext));
  }
}

// ── KyberPublicKEM ────────────────────────────────────────────────────────────

export class KyberPublicKEM extends PluginModel {
  kyb_pubkey: Uint8Array;
  kyb_sig_bytes: Uint8Array;
  dlt_address: Uint8Array;
  dlt_auth_id: Uint8Array;
  dlt_created_at: Uint8Array;
  dlt_active_from: Uint8Array;
  dlt_expires_at: Uint8Array;
  dlt_refresh_count: number;
  dlt_max_refresh: number;

  constructor(fields: {
    kyb_pubkey: Uint8Array;
    kyb_sig_bytes: Uint8Array;
    dlt_address: Uint8Array;
    dlt_auth_id: Uint8Array;
    dlt_created_at: Uint8Array;
    dlt_active_from: Uint8Array;
    dlt_expires_at: Uint8Array;
    dlt_refresh_count: number;
    dlt_max_refresh: number;
  }) {
    super();
    this.kyb_pubkey = fields.kyb_pubkey;
    this.kyb_sig_bytes = fields.kyb_sig_bytes;
    this.dlt_address = fields.dlt_address;
    this.dlt_auth_id = fields.dlt_auth_id;
    this.dlt_created_at = fields.dlt_created_at;
    this.dlt_active_from = fields.dlt_active_from;
    this.dlt_expires_at = fields.dlt_expires_at;
    this.dlt_refresh_count = fields.dlt_refresh_count;
    this.dlt_max_refresh = fields.dlt_max_refresh;
  }

  toMsgpack(): Record<string, unknown> {
    return {
      kyb_pubkey: this.kyb_pubkey,
      kyb_sig_bytes: this.kyb_sig_bytes,
      dlt_address: this.dlt_address,
      dlt_auth_id: this.dlt_auth_id,
      dlt_created_at: this.dlt_created_at,
      dlt_active_from: this.dlt_active_from,
      dlt_expires_at: this.dlt_expires_at,
      dlt_refresh_count: this.dlt_refresh_count,
      dlt_max_refresh: this.dlt_max_refresh,
    };
  }

  static fromMsgpack(data: Record<string, unknown>): KyberPublicKEM {
    return new KyberPublicKEM(data as any);
  }

  // ── Methods ───────────────────────────────────────────────────────────────

  static async fromPem(pem: string): Promise<KyberPublicKEM> {
    const result = await call(
      "kyber_public_kem_from_pem",
      new TextEncoder().encode(pem),
    );
    return KyberPublicKEM.fromMsgpack(unpack(result));
  }

  get address(): Uint8Array {
    return this.dlt_address;
  }

  get authId(): Uint8Array {
    return this.dlt_auth_id;
  }

  async toPem(): Promise<string> {
    const result = await call("kyber_public_kem_to_pem", pack(this));
    return new TextDecoder().decode(result);
  }

  async signingMaterial(): Promise<Uint8Array> {
    return call("kyber_public_kem_signing_material", pack(this));
  }

  async encapsulate(): Promise<[Uint8Array, Uint8Array]> {
    const result = unpack(
      await call("kyber_public_kem_encapsulate", pack(this)),
    );
    return [result[0] as Uint8Array, result[1] as Uint8Array];
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
