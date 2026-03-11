[@aloecraft/aloecrypt](../README.md) / CounterParty

# Class: CounterParty

Defined in: session/index.ts:8

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new CounterParty(fields): CounterParty;
```

Defined in: session/index.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `address`: `Uint8Array`; `nonce`: `Uint8Array`; `session_kem`: [`KyberPublicKEM`](KyberPublicKEM.md); `session_secret`: `Uint8Array`; `signature`: `Uint8Array`; `stable_kem`: [`KyberPublicKEM`](KyberPublicKEM.md); `stable_secret`: `Uint8Array`; `verifier`: [`DilithiumVerifier`](DilithiumVerifier.md); \} |
| `fields.address` | `Uint8Array` |
| `fields.nonce` | `Uint8Array` |
| `fields.session_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) |
| `fields.session_secret` | `Uint8Array` |
| `fields.signature` | `Uint8Array` |
| `fields.stable_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) |
| `fields.stable_secret` | `Uint8Array` |
| `fields.verifier` | [`DilithiumVerifier`](DilithiumVerifier.md) |

#### Returns

`CounterParty`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="address"></a> `address` | `Uint8Array` | session/index.ts:9 |
| <a id="nonce"></a> `nonce` | `Uint8Array` | session/index.ts:10 |
| <a id="session_kem"></a> `session_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) | session/index.ts:13 |
| <a id="session_secret"></a> `session_secret` | `Uint8Array` | session/index.ts:16 |
| <a id="signature"></a> `signature` | `Uint8Array` | session/index.ts:11 |
| <a id="stable_kem"></a> `stable_kem` | [`KyberPublicKEM`](KyberPublicKEM.md) | session/index.ts:12 |
| <a id="stable_secret"></a> `stable_secret` | `Uint8Array` | session/index.ts:15 |
| <a id="verifier"></a> `verifier` | [`DilithiumVerifier`](DilithiumVerifier.md) | session/index.ts:14 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/index.ts:39

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): CounterParty;
```

Defined in: session/index.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`CounterParty`
