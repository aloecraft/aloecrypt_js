[@aloecraft/aloecrypt](../README.md) / SessionBuilder

# Class: SessionBuilder

Defined in: session/builder.ts:219

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new SessionBuilder(fields): SessionBuilder;
```

Defined in: session/builder.ts:233

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `build_ready`: `boolean`; `challenge_nonce`: `Uint8Array`; `cipher`: [`FullCIPHER`](FullCIPHER.md) \| `null`; `counterparty_challenge`: [`PartyChallenge`](PartyChallenge.md) \| `null`; `counterparty_cipher`: [`PartySecret`](PartySecret.md) \| `null`; `counterparty_intro`: [`PartyINTRO`](PartyINTRO.md) \| `null`; `delegate_signer`: [`DilithiumSigner`](DilithiumSigner.md); `nonce`: `Uint8Array`; `session_kem`: [`KyberFullKEM`](KyberFullKEM.md); `session_salt`: `Uint8Array`\<`ArrayBufferLike`\> \| `null`; `signature`: `Uint8Array`\<`ArrayBufferLike`\> \| `null`; `stable_kem`: [`KyberFullKEM`](KyberFullKEM.md); \} |
| `fields.build_ready` | `boolean` |
| `fields.challenge_nonce` | `Uint8Array` |
| `fields.cipher` | [`FullCIPHER`](FullCIPHER.md) \| `null` |
| `fields.counterparty_challenge` | [`PartyChallenge`](PartyChallenge.md) \| `null` |
| `fields.counterparty_cipher` | [`PartySecret`](PartySecret.md) \| `null` |
| `fields.counterparty_intro` | [`PartyINTRO`](PartyINTRO.md) \| `null` |
| `fields.delegate_signer` | [`DilithiumSigner`](DilithiumSigner.md) |
| `fields.nonce` | `Uint8Array` |
| `fields.session_kem` | [`KyberFullKEM`](KyberFullKEM.md) |
| `fields.session_salt` | `Uint8Array`\<`ArrayBufferLike`\> \| `null` |
| `fields.signature` | `Uint8Array`\<`ArrayBufferLike`\> \| `null` |
| `fields.stable_kem` | [`KyberFullKEM`](KyberFullKEM.md) |

#### Returns

`SessionBuilder`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="build_ready"></a> `build_ready` | `boolean` | session/builder.ts:231 |
| <a id="challenge_nonce"></a> `challenge_nonce` | `Uint8Array` | session/builder.ts:224 |
| <a id="cipher"></a> `cipher` | [`FullCIPHER`](FullCIPHER.md) \| `null` | session/builder.ts:227 |
| <a id="counterparty_challenge"></a> `counterparty_challenge` | [`PartyChallenge`](PartyChallenge.md) \| `null` | session/builder.ts:230 |
| <a id="counterparty_cipher"></a> `counterparty_cipher` | [`PartySecret`](PartySecret.md) \| `null` | session/builder.ts:229 |
| <a id="counterparty_intro"></a> `counterparty_intro` | [`PartyINTRO`](PartyINTRO.md) \| `null` | session/builder.ts:228 |
| <a id="delegate_signer"></a> `delegate_signer` | [`DilithiumSigner`](DilithiumSigner.md) | session/builder.ts:220 |
| <a id="nonce"></a> `nonce` | `Uint8Array` | session/builder.ts:223 |
| <a id="session_kem"></a> `session_kem` | [`KyberFullKEM`](KyberFullKEM.md) | session/builder.ts:222 |
| <a id="session_salt"></a> `session_salt` | `Uint8Array`\<`ArrayBufferLike`\> \| `null` | session/builder.ts:225 |
| <a id="signature"></a> `signature` | `Uint8Array`\<`ArrayBufferLike`\> \| `null` | session/builder.ts:226 |
| <a id="stable_kem"></a> `stable_kem` | [`KyberFullKEM`](KyberFullKEM.md) | session/builder.ts:221 |

## Accessors

### address

#### Get Signature

```ts
get address(): Uint8Array;
```

Defined in: session/builder.ts:309

##### Returns

`Uint8Array`

## Methods

### build()

```ts
build(): Promise<AloecryptSession>;
```

Defined in: session/builder.ts:353

#### Returns

`Promise`\<[`AloecryptSession`](AloecryptSession.md)\>

***

### makePartyChallenge()

```ts
makePartyChallenge(): Promise<PartyCHALLENGE>;
```

Defined in: session/builder.ts:333

#### Returns

`Promise`\<[`PartyCHALLENGE`](PartyCHALLENGE-1.md)\>

***

### makePartyChallengeResponse()

```ts
makePartyChallengeResponse(): Promise<PartyRESPONSE>;
```

Defined in: session/builder.ts:343

#### Returns

`Promise`\<[`PartyRESPONSE`](PartyRESPONSE.md)\>

***

### makePartyCipher()

```ts
makePartyCipher(): Promise<PartyCIPHER>;
```

Defined in: session/builder.ts:323

#### Returns

`Promise`\<[`PartyCIPHER`](PartyCIPHER.md)\>

***

### makePartyIntro()

```ts
makePartyIntro(): Promise<PartyINTRO>;
```

Defined in: session/builder.ts:313

#### Returns

`Promise`\<[`PartyINTRO`](PartyINTRO.md)\>

***

### onCounterpartyChallenge()

```ts
onCounterpartyChallenge(challenge): Promise<SessionBuilder>;
```

Defined in: session/builder.ts:338

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `challenge` | [`PartyCHALLENGE`](PartyCHALLENGE-1.md) |

#### Returns

`Promise`\<`SessionBuilder`\>

***

### onCounterpartyChallengeResponse()

```ts
onCounterpartyChallengeResponse(response): Promise<SessionBuilder>;
```

Defined in: session/builder.ts:348

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `response` | [`PartyRESPONSE`](PartyRESPONSE.md) |

#### Returns

`Promise`\<`SessionBuilder`\>

***

### onCounterpartyCipher()

```ts
onCounterpartyCipher(cipher): Promise<SessionBuilder>;
```

Defined in: session/builder.ts:328

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cipher` | [`PartyCIPHER`](PartyCIPHER.md) |

#### Returns

`Promise`\<`SessionBuilder`\>

***

### onCounterpartyIntro()

```ts
onCounterpartyIntro(intro): Promise<SessionBuilder>;
```

Defined in: session/builder.ts:318

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `intro` | [`PartyINTRO`](PartyINTRO.md) |

#### Returns

`Promise`\<`SessionBuilder`\>

***

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:262

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### create()

```ts
static create(counterpartyAddress, delegateSigner): Promise<SessionBuilder>;
```

Defined in: session/builder.ts:298

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `counterpartyAddress` | `Uint8Array` |
| `delegateSigner` | [`DilithiumSigner`](DilithiumSigner.md) |

#### Returns

`Promise`\<`SessionBuilder`\>

***

### fromMsgpack()

```ts
static fromMsgpack(data): SessionBuilder;
```

Defined in: session/builder.ts:279

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`SessionBuilder`
