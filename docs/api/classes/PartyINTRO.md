[@aloecraft/aloecrypt](../README.md) / PartyINTRO

# Class: PartyINTRO

Defined in: session/builder.ts:128

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new PartyINTRO(fields): PartyINTRO;
```

Defined in: session/builder.ts:135

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `address`: `Uint8Array`; `nonce`: `Uint8Array`; `session_kem`: [`KyberPublicKEM`](KyberPublicKEM.md); `stable_kem`: [`KyberPublicKEM`](KyberPublicKEM.md); `verifier`: [`DilithiumVerifier`](DilithiumVerifier.md); \} |
| `fields.address` | `Uint8Array` |
| `fields.nonce` | `Uint8Array` |
| `fields.session_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) |
| `fields.stable_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) |
| `fields.verifier` | [`DilithiumVerifier`](DilithiumVerifier.md) |

#### Returns

`PartyINTRO`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="address"></a> `address` | `Uint8Array` | session/builder.ts:129 |
| <a id="nonce"></a> `nonce` | `Uint8Array` | session/builder.ts:130 |
| <a id="session_kem"></a> `session_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) | session/builder.ts:132 |
| <a id="stable_kem"></a> `stable_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) | session/builder.ts:131 |
| <a id="verifier"></a> `verifier` | [`DilithiumVerifier`](DilithiumVerifier.md) | session/builder.ts:133 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:150

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): PartyINTRO;
```

Defined in: session/builder.ts:160

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`PartyINTRO`
