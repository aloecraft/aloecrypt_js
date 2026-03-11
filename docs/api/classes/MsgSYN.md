[@aloecraft/aloecrypt](../README.md) / MsgSYN

# Class: MsgSYN

Defined in: session/message.ts:54

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new MsgSYN(fields): MsgSYN;
```

Defined in: session/message.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `cipher`: [`PartyCIPHER`](PartyCIPHER.md); `intro`: [`PartyINTRO`](PartyINTRO.md); \} |
| `fields.cipher` | [`PartyCIPHER`](PartyCIPHER.md) |
| `fields.intro` | [`PartyINTRO`](PartyINTRO.md) |

#### Returns

`MsgSYN`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="cipher"></a> `cipher` | [`PartyCIPHER`](PartyCIPHER.md) | session/message.ts:56 |
| <a id="intro"></a> `intro` | [`PartyINTRO`](PartyINTRO.md) | session/message.ts:55 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/message.ts:64

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): MsgSYN;
```

Defined in: session/message.ts:71

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`MsgSYN`
