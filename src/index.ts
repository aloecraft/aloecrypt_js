// file: src/index.ts
export { initPlugin, initPluginFromBundle } from "./_plugin.js";

export { DilithiumSigner, DilithiumVerifier } from "./signatory.js";
export { KyberFullKEM, KyberPublicKEM } from "./kem.js";

export { AloecryptSession, Party, CounterParty } from "./session/index.js";
export {
    SessionBuilder,
    FullCIPHER,
    PartyCHALLENGE,
    PartyCIPHER,
    PartyChallenge,
    PartyINTRO,
    PartyRESPONSE,
    PartySecret,
} from "./session/builder.js";
export { MsgACK, MsgHELLO, MsgSYN, MsgSYNACK, MsgWELCOME } from "./session/message.js";

// ── Convenience: full handshake ───────────────────────────────────────────────

import { SessionBuilder } from "./session/builder.js";
import { AloecryptSession } from "./session/index.js";

export async function performHandshake(
    sessionA: SessionBuilder,
    sessionB: SessionBuilder,
): Promise<[AloecryptSession, AloecryptSession]> {
    // A -> B: HELLO
    const introA = await sessionA.makePartyIntro();
    sessionB = await sessionB.onCounterpartyIntro(introA);

    // B -> A: SYN
    const introB = await sessionB.makePartyIntro();
    const cipherB = await sessionB.makePartyCipher();
    sessionA = await sessionA.onCounterpartyIntro(introB);
    sessionA = await sessionA.onCounterpartyCipher(cipherB);

    // A -> B: ACK
    const cipherA = await sessionA.makePartyCipher();
    const challengeA = await sessionA.makePartyChallenge();
    sessionB = await sessionB.onCounterpartyCipher(cipherA);
    sessionB = await sessionB.onCounterpartyChallenge(challengeA);

    // B -> A: SYNACK
    const challengeB = await sessionB.makePartyChallenge();
    const responseB = await sessionB.makePartyChallengeResponse();
    sessionA = await sessionA.onCounterpartyChallenge(challengeB);
    sessionA = await sessionA.onCounterpartyChallengeResponse(responseB);

    // A -> B: WELCOME
    const responseA = await sessionA.makePartyChallengeResponse();
    sessionB = await sessionB.onCounterpartyChallengeResponse(responseA);

    return [await sessionA.build(), await sessionB.build()];
}