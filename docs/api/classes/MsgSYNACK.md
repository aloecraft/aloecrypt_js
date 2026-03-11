[@aloecraft/aloecrypt](../README.md) / MsgSYNACK

# Class: MsgSYNACK

Defined in: session/message.ts:79

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new MsgSYNACK(fields): MsgSYNACK;
```

Defined in: session/message.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `challenge`: [`PartyCHALLENGE`](PartyCHALLENGE-1.md); `challenge_response`: [`PartyRESPONSE`](PartyRESPONSE.md); \} |
| `fields.challenge` | [`PartyCHALLENGE`](PartyCHALLENGE-1.md) |
| `fields.challenge_response` | [`PartyRESPONSE`](PartyRESPONSE.md) |

#### Returns

`MsgSYNACK`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="challenge"></a> `challenge` | [`PartyCHALLENGE`](PartyCHALLENGE-1.md) | session/message.ts:80 |
| <a id="challenge_response"></a> `challenge_response` | [`PartyRESPONSE`](PartyRESPONSE.md) | session/message.ts:81 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/message.ts:89

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): MsgSYNACK;
```

Defined in: session/message.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`MsgSYNACK`
