// ./src/index.ts
// License: Apache-2.0 (disclaimer at bottom of file)
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
export {
  MsgACK,
  MsgHELLO,
  MsgSYN,
  MsgSYNACK,
  MsgWELCOME,
} from "./session/message.js";

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
