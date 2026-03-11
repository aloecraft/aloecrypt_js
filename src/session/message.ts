import { PluginModel } from "../_plugin.js";
import { PartyCHALLENGE, PartyCIPHER, PartyINTRO, PartyRESPONSE } from "./builder.js";

export class MsgACK extends PluginModel {
    cipher: PartyCIPHER;
    challenge: PartyCHALLENGE;

    constructor(fields: { cipher: PartyCIPHER; challenge: PartyCHALLENGE }) {
        super();
        this.cipher = fields.cipher;
        this.challenge = fields.challenge;
    }

    toMsgpack(): Record<string, unknown> {
        return {
            cipher: this.cipher.toMsgpack(),
            challenge: this.challenge.toMsgpack(),
        };
    }

    static fromMsgpack(data: Record<string, unknown>): MsgACK {
        return new MsgACK({
            cipher: PartyCIPHER.fromMsgpack(data.cipher as Record<string, unknown>),
            challenge: PartyCHALLENGE.fromMsgpack(data.challenge as Record<string, unknown>),
        });
    }
}

export class MsgHELLO extends PluginModel {
    address: Uint8Array;
    intro: PartyINTRO;

    constructor(fields: { address: Uint8Array; intro: PartyINTRO }) {
        super();
        this.address = fields.address;
        this.intro = fields.intro;
    }

    toMsgpack(): Record<string, unknown> {
        return {
            address: this.address,
            intro: this.intro.toMsgpack(),
        };
    }

    static fromMsgpack(data: Record<string, unknown>): MsgHELLO {
        return new MsgHELLO({
            address: data.address as Uint8Array,
            intro: PartyINTRO.fromMsgpack(data.intro as Record<string, unknown>),
        });
    }
}

export class MsgSYN extends PluginModel {
    intro: PartyINTRO;
    cipher: PartyCIPHER;

    constructor(fields: { intro: PartyINTRO; cipher: PartyCIPHER }) {
        super();
        this.intro = fields.intro;
        this.cipher = fields.cipher;
    }

    toMsgpack(): Record<string, unknown> {
        return {
            intro: this.intro.toMsgpack(),
            cipher: this.cipher.toMsgpack(),
        };
    }

    static fromMsgpack(data: Record<string, unknown>): MsgSYN {
        return new MsgSYN({
            intro: PartyINTRO.fromMsgpack(data.intro as Record<string, unknown>),
            cipher: PartyCIPHER.fromMsgpack(data.cipher as Record<string, unknown>),
        });
    }
}

export class MsgSYNACK extends PluginModel {
    challenge: PartyCHALLENGE;
    challenge_response: PartyRESPONSE;

    constructor(fields: { challenge: PartyCHALLENGE; challenge_response: PartyRESPONSE }) {
        super();
        this.challenge = fields.challenge;
        this.challenge_response = fields.challenge_response;
    }

    toMsgpack(): Record<string, unknown> {
        return {
            challenge: this.challenge.toMsgpack(),
            challenge_response: this.challenge_response.toMsgpack(),
        };
    }

    static fromMsgpack(data: Record<string, unknown>): MsgSYNACK {
        return new MsgSYNACK({
            challenge: PartyCHALLENGE.fromMsgpack(data.challenge as Record<string, unknown>),
            challenge_response: PartyRESPONSE.fromMsgpack(data.challenge_response as Record<string, unknown>),
        });
    }
}

export class MsgWELCOME extends PluginModel {
    challenge_response: PartyRESPONSE;

    constructor(fields: { challenge_response: PartyRESPONSE }) {
        super();
        this.challenge_response = fields.challenge_response;
    }

    toMsgpack(): Record<string, unknown> {
        return { challenge_response: this.challenge_response.toMsgpack() };
    }

    static fromMsgpack(data: Record<string, unknown>): MsgWELCOME {
        return new MsgWELCOME({
            challenge_response: PartyRESPONSE.fromMsgpack(data.challenge_response as Record<string, unknown>),
        });
    }
}