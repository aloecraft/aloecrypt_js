import { PluginModel, call, pack, unpack } from "./_plugin.js";

// ── DilithiumSigner ───────────────────────────────────────────────────────────

export class DilithiumSigner extends PluginModel {
    dlt_pubkey: Uint8Array;
    dlt_privkey: Uint8Array;
    dlt_sig_bytes: Uint8Array;
    dlt_address: Uint8Array;
    dlt_auth_id: Uint8Array;
    dlt_created_at: Uint8Array;
    dlt_active_from: Uint8Array;
    dlt_expires_at: Uint8Array;
    dlt_refresh_count: number;
    dlt_max_refresh: number;

    constructor(fields: {
        dlt_pubkey: Uint8Array;
        dlt_privkey: Uint8Array;
        dlt_sig_bytes: Uint8Array;
        dlt_address: Uint8Array;
        dlt_auth_id: Uint8Array;
        dlt_created_at: Uint8Array;
        dlt_active_from: Uint8Array;
        dlt_expires_at: Uint8Array;
        dlt_refresh_count: number;
        dlt_max_refresh: number;
    }) {
        super();
        this.dlt_pubkey = fields.dlt_pubkey;
        this.dlt_privkey = fields.dlt_privkey;
        this.dlt_sig_bytes = fields.dlt_sig_bytes;
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
            dlt_pubkey: this.dlt_pubkey,
            dlt_privkey: this.dlt_privkey,
            dlt_sig_bytes: this.dlt_sig_bytes,
            dlt_address: this.dlt_address,
            dlt_auth_id: this.dlt_auth_id,
            dlt_created_at: this.dlt_created_at,
            dlt_active_from: this.dlt_active_from,
            dlt_expires_at: this.dlt_expires_at,
            dlt_refresh_count: this.dlt_refresh_count,
            dlt_max_refresh: this.dlt_max_refresh,
        };
    }

    static fromMsgpack(data: Record<string, unknown>): DilithiumSigner {
        return new DilithiumSigner(data as any);
    }

    // ── Methods ───────────────────────────────────────────────────────────────

    static async new(): Promise<DilithiumSigner> {
        const result = await call("dilithium_signer_new", new Uint8Array());
        return DilithiumSigner.fromMsgpack(unpack(result));
    }

    static async fromXPem(pem: string, password: Uint8Array, salt: Uint8Array): Promise<DilithiumSigner> {
        const result = await call("dilithium_signer_from_x_pem", pack(pem, password, salt));
        return DilithiumSigner.fromMsgpack(unpack(result));
    }

    async toVerifier(): Promise<DilithiumVerifier> {
        const result = await call("dilithium_signer_into_verifier", pack(this));
        return DilithiumVerifier.fromMsgpack(unpack(result));
    }

    get address(): Uint8Array {
        return this.dlt_address;
    }

    get authId(): Uint8Array {
        return this.dlt_auth_id;
    }

    addressHex(): string {
        return Array.from(this.dlt_address)
            .map(b => b.toString(16).padStart(2, "0"))
            .join("");
    }

    async isRoot(): Promise<boolean> {
        const result = await call("dilithium_signer_is_root", pack(this));
        return result[0] === 1;
    }

    async isTimeActive(): Promise<boolean> {
        const result = await call("dilithium_signer_is_time_active", pack(this));
        return result[0] === 1;
    }

    async sign(message: Uint8Array): Promise<Uint8Array> {
        return call("dilithium_signer_sign", pack(this, message));
    }

    async signHex(message: Uint8Array): Promise<string> {
        return Buffer.from(await this.sign(message)).toString("hex");
    }

    async toXPem(password: Uint8Array, salt: Uint8Array): Promise<string> {
        const result = await call("dilithium_signer_to_x_pem", pack(this, password, salt));
        return new TextDecoder().decode(result);
    }

    async createDelegate(
        activeFrom: Uint8Array,
        expiresAt: Uint8Array,
        refreshCount: number,
        maxRefresh: number,
    ): Promise<DilithiumSigner> {
        const result = await call(
            "dilithium_signer_create_delegate",
            pack(this, activeFrom, expiresAt, refreshCount, maxRefresh),
        );
        return DilithiumSigner.fromMsgpack(unpack(result));
    }

    async signingMaterial(): Promise<Uint8Array> {
        return call("dilithium_signer_signing_material", pack(this));
    }

    async signingAuthId(): Promise<Uint8Array> {
        return call("dilithium_signer_signing_auth_id", pack(this));
    }
}

// ── DilithiumVerifier ─────────────────────────────────────────────────────────

export class DilithiumVerifier extends PluginModel {
    dlt_pubkey: Uint8Array;
    dlt_sig_bytes: Uint8Array;
    dlt_address: Uint8Array;
    dlt_auth_id: Uint8Array;
    dlt_created_at: Uint8Array;
    dlt_active_from: Uint8Array;
    dlt_expires_at: Uint8Array;
    dlt_refresh_count: number;
    dlt_max_refresh: number;

    constructor(fields: {
        dlt_pubkey: Uint8Array;
        dlt_sig_bytes: Uint8Array;
        dlt_address: Uint8Array;
        dlt_auth_id: Uint8Array;
        dlt_created_at: Uint8Array;
        dlt_active_from: Uint8Array;
        dlt_expires_at: Uint8Array;
        dlt_refresh_count: number;
        dlt_max_refresh: number;
    }) {
        super();
        this.dlt_pubkey = fields.dlt_pubkey;
        this.dlt_sig_bytes = fields.dlt_sig_bytes;
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
            dlt_pubkey: this.dlt_pubkey,
            dlt_sig_bytes: this.dlt_sig_bytes,
            dlt_address: this.dlt_address,
            dlt_auth_id: this.dlt_auth_id,
            dlt_created_at: this.dlt_created_at,
            dlt_active_from: this.dlt_active_from,
            dlt_expires_at: this.dlt_expires_at,
            dlt_refresh_count: this.dlt_refresh_count,
            dlt_max_refresh: this.dlt_max_refresh,
        };
    }

    static fromMsgpack(data: Record<string, unknown>): DilithiumVerifier {
        return new DilithiumVerifier(data as any);
    }

    // ── Methods ───────────────────────────────────────────────────────────────

    static async fromPem(pem: string): Promise<DilithiumVerifier> {
        const result = await call("dilithium_verifier_from_pem", new TextEncoder().encode(pem));
        return DilithiumVerifier.fromMsgpack(unpack(result));
    }

    get address(): Uint8Array {
        return this.dlt_address;
    }

    get authId(): Uint8Array {
        return this.dlt_auth_id;
    }

    async verify(material: Uint8Array, sigBytes: Uint8Array): Promise<boolean> {
        const result = await call("dilithium_verifier_verify", pack(this, material, sigBytes));
        return result[0] === 1;
    }

    async isRoot(): Promise<boolean> {
        const result = await call("dilithium_verifier_is_root", pack(this));
        return result[0] === 1;
    }

    async isTimeActive(): Promise<boolean> {
        const result = await call("dilithium_verifier_is_time_active", pack(this));
        return result[0] === 1;
    }

    async toPem(): Promise<string> {
        const result = await call("dilithium_verifier_to_pem", pack(this));
        return new TextDecoder().decode(result);
    }

    async signingMaterial(): Promise<Uint8Array> {
        return call("dilithium_verifier_signing_material", pack(this));
    }

    async signingAuthId(): Promise<Uint8Array> {
        return call("dilithium_verifier_signing_auth_id", pack(this));
    }
}