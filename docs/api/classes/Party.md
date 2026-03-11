[@aloecraft/aloecrypt](../README.md) / Party

# Class: Party

Defined in: session/index.ts:68

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new Party(fields): Party;
```

Defined in: session/index.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `delegate_signer`: [`DilithiumSigner`](DilithiumSigner.md); `nonce`: `Uint8Array`; `session_kem`: [`KyberFullKEM`](KyberFullKEM.md); `session_secret`: `Uint8Array`; `session_signature`: `Uint8Array`; `stable_kem`: [`KyberFullKEM`](KyberFullKEM.md); `stable_secret`: `Uint8Array`; \} |
| `fields.delegate_signer` | [`DilithiumSigner`](DilithiumSigner.md) |
| `fields.nonce` | `Uint8Array` |
| `fields.session_kem` | [`KyberFullKEM`](KyberFullKEM.md) |
| `fields.session_secret` | `Uint8Array` |
| `fields.session_signature` | `Uint8Array` |
| `fields.stable_kem` | [`KyberFullKEM`](KyberFullKEM.md) |
| `fields.stable_secret` | `Uint8Array` |

#### Returns

`Party`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="delegate_signer"></a> `delegate_signer` | [`DilithiumSigner`](DilithiumSigner.md) | session/index.ts:71 |
| <a id="nonce"></a> `nonce` | `Uint8Array` | session/index.ts:69 |
| <a id="session_kem"></a> `session_kem` | [`KyberFullKEM`](KyberFullKEM.md) | session/index.ts:73 |
| <a id="session_secret"></a> `session_secret` | `Uint8Array` | session/index.ts:75 |
| <a id="session_signature"></a> `session_signature` | `Uint8Array` | session/index.ts:70 |
| <a id="stable_kem"></a> `stable_kem` | [`KyberFullKEM`](KyberFullKEM.md) | session/index.ts:72 |
| <a id="stable_secret"></a> `stable_secret` | `Uint8Array` | session/index.ts:74 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/index.ts:96

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): Party;
```

Defined in: session/index.ts:108

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`Party`
