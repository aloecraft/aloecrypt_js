[@aloecraft/aloecrypt](../README.md) / MsgHELLO

# Class: MsgHELLO

Defined in: session/message.ts:29

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new MsgHELLO(fields): MsgHELLO;
```

Defined in: session/message.ts:33

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `address`: `Uint8Array`; `intro`: [`PartyINTRO`](PartyINTRO.md); \} |
| `fields.address` | `Uint8Array` |
| `fields.intro` | [`PartyINTRO`](PartyINTRO.md) |

#### Returns

`MsgHELLO`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="address"></a> `address` | `Uint8Array` | session/message.ts:30 |
| <a id="intro"></a> `intro` | [`PartyINTRO`](PartyINTRO.md) | session/message.ts:31 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/message.ts:39

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): MsgHELLO;
```

Defined in: session/message.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`MsgHELLO`
