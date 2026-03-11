[@aloecraft/aloecrypt](../README.md) / PartyChallenge

# Class: PartyChallenge

Defined in: session/builder.ts:95

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new PartyChallenge(fields): PartyChallenge;
```

Defined in: session/builder.ts:101

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `decrypted_challenge`: `Uint8Array`; `decrypted_check`: `Uint8Array`; `encrypted_challenge`: `Uint8Array`; `encrypted_check`: `Uint8Array`; \} |
| `fields.decrypted_challenge` | `Uint8Array` |
| `fields.decrypted_check` | `Uint8Array` |
| `fields.encrypted_challenge` | `Uint8Array` |
| `fields.encrypted_check` | `Uint8Array` |

#### Returns

`PartyChallenge`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="decrypted_challenge"></a> `decrypted_challenge` | `Uint8Array` | session/builder.ts:98 |
| <a id="decrypted_check"></a> `decrypted_check` | `Uint8Array` | session/builder.ts:99 |
| <a id="encrypted_challenge"></a> `encrypted_challenge` | `Uint8Array` | session/builder.ts:96 |
| <a id="encrypted_check"></a> `encrypted_check` | `Uint8Array` | session/builder.ts:97 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:114

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): PartyChallenge;
```

Defined in: session/builder.ts:123

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`PartyChallenge`
