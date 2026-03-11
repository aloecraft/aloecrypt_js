[@aloecraft/aloecrypt](../README.md) / PartyCIPHER

# Class: PartyCIPHER

Defined in: session/builder.ts:66

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new PartyCIPHER(fields): PartyCIPHER;
```

Defined in: session/builder.ts:71

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `session_cipher`: `Uint8Array`; `signature`: `Uint8Array`; `stable_cipher`: `Uint8Array`; \} |
| `fields.session_cipher` | `Uint8Array` |
| `fields.signature` | `Uint8Array` |
| `fields.stable_cipher` | `Uint8Array` |

#### Returns

`PartyCIPHER`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="session_cipher"></a> `session_cipher` | `Uint8Array` | session/builder.ts:68 |
| <a id="signature"></a> `signature` | `Uint8Array` | session/builder.ts:69 |
| <a id="stable_cipher"></a> `stable_cipher` | `Uint8Array` | session/builder.ts:67 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:82

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): PartyCIPHER;
```

Defined in: session/builder.ts:90

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`PartyCIPHER`
