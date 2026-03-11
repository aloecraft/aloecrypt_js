[@aloecraft/aloecrypt](../README.md) / MsgWELCOME

# Class: MsgWELCOME

Defined in: session/message.ts:104

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new MsgWELCOME(fields): MsgWELCOME;
```

Defined in: session/message.ts:107

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `challenge_response`: [`PartyRESPONSE`](PartyRESPONSE.md); \} |
| `fields.challenge_response` | [`PartyRESPONSE`](PartyRESPONSE.md) |

#### Returns

`MsgWELCOME`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="challenge_response"></a> `challenge_response` | [`PartyRESPONSE`](PartyRESPONSE.md) | session/message.ts:105 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/message.ts:112

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): MsgWELCOME;
```

Defined in: session/message.ts:116

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`MsgWELCOME`
