[@aloecraft/aloecrypt](../README.md) / MsgACK

# Class: MsgACK

Defined in: session/message.ts:4

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new MsgACK(fields): MsgACK;
```

Defined in: session/message.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `challenge`: [`PartyCHALLENGE`](PartyCHALLENGE-1.md); `cipher`: [`PartyCIPHER`](PartyCIPHER.md); \} |
| `fields.challenge` | [`PartyCHALLENGE`](PartyCHALLENGE-1.md) |
| `fields.cipher` | [`PartyCIPHER`](PartyCIPHER.md) |

#### Returns

`MsgACK`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="challenge"></a> `challenge` | [`PartyCHALLENGE`](PartyCHALLENGE-1.md) | session/message.ts:6 |
| <a id="cipher"></a> `cipher` | [`PartyCIPHER`](PartyCIPHER.md) | session/message.ts:5 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/message.ts:14

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): MsgACK;
```

Defined in: session/message.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`MsgACK`
