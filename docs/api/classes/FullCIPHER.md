[@aloecraft/aloecrypt](../README.md) / FullCIPHER

# Class: FullCIPHER

Defined in: session/builder.ts:7

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new FullCIPHER(fields): FullCIPHER;
```

Defined in: session/builder.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `session_cipher`: `Uint8Array`; `session_secret`: `Uint8Array`; `signature`: `Uint8Array`; `stable_cipher`: `Uint8Array`; `stable_secret`: `Uint8Array`; \} |
| `fields.session_cipher` | `Uint8Array` |
| `fields.session_secret` | `Uint8Array` |
| `fields.signature` | `Uint8Array` |
| `fields.stable_cipher` | `Uint8Array` |
| `fields.stable_secret` | `Uint8Array` |

#### Returns

`FullCIPHER`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="session_cipher"></a> `session_cipher` | `Uint8Array` | session/builder.ts:9 |
| <a id="session_secret"></a> `session_secret` | `Uint8Array` | session/builder.ts:11 |
| <a id="signature"></a> `signature` | `Uint8Array` | session/builder.ts:12 |
| <a id="stable_cipher"></a> `stable_cipher` | `Uint8Array` | session/builder.ts:8 |
| <a id="stable_secret"></a> `stable_secret` | `Uint8Array` | session/builder.ts:10 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:29

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): FullCIPHER;
```

Defined in: session/builder.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`FullCIPHER`
