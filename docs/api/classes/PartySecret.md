[@aloecraft/aloecrypt](../README.md) / PartySecret

# Class: PartySecret

Defined in: session/builder.ts:188

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new PartySecret(fields): PartySecret;
```

Defined in: session/builder.ts:193

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `session_secret`: `Uint8Array`; `signature`: `Uint8Array`; `stable_secret`: `Uint8Array`; \} |
| `fields.session_secret` | `Uint8Array` |
| `fields.signature` | `Uint8Array` |
| `fields.stable_secret` | `Uint8Array` |

#### Returns

`PartySecret`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="session_secret"></a> `session_secret` | `Uint8Array` | session/builder.ts:190 |
| <a id="signature"></a> `signature` | `Uint8Array` | session/builder.ts:191 |
| <a id="stable_secret"></a> `stable_secret` | `Uint8Array` | session/builder.ts:189 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:204

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): PartySecret;
```

Defined in: session/builder.ts:212

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`PartySecret`
