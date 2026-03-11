[@aloecraft/aloecrypt](../README.md) / PartyCHALLENGE

# Class: PartyCHALLENGE

Defined in: session/builder.ts:44

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new PartyCHALLENGE(fields): PartyCHALLENGE;
```

Defined in: session/builder.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `encrypted_challenge`: `Uint8Array`; `encrypted_check`: `Uint8Array`; \} |
| `fields.encrypted_challenge` | `Uint8Array` |
| `fields.encrypted_check` | `Uint8Array` |

#### Returns

`PartyCHALLENGE`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="encrypted_challenge"></a> `encrypted_challenge` | `Uint8Array` | session/builder.ts:45 |
| <a id="encrypted_check"></a> `encrypted_check` | `Uint8Array` | session/builder.ts:46 |

## Methods

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/builder.ts:54

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): PartyCHALLENGE;
```

Defined in: session/builder.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`PartyCHALLENGE`
