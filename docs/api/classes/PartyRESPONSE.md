[@aloecraft/aloecrypt](../README.md) / PartyRESPONSE

# Class: PartyRESPONSE

Defined in: session/builder.ts:171

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new PartyRESPONSE(fields): PartyRESPONSE;
```

Defined in: session/builder.ts:174

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `decrypted_challenge`: `Uint8Array`; \} |
| `fields.decrypted_challenge` | `Uint8Array` |

#### Returns

`PartyRESPONSE`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="decrypted_challenge"></a> `decrypted_challenge` | `Uint8Array` | session/builder.ts:172 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:179

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): PartyRESPONSE;
```

Defined in: session/builder.ts:183

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`PartyRESPONSE`
