[@aloecraft/aloecrypt](../README.md) / KyberPublicKEM

# Class: KyberPublicKEM

Defined in: kem.ts:127

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new KyberPublicKEM(fields): KyberPublicKEM;
```

Defined in: kem.ts:138

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `dlt_active_from`: `Uint8Array`; `dlt_address`: `Uint8Array`; `dlt_auth_id`: `Uint8Array`; `dlt_created_at`: `Uint8Array`; `dlt_expires_at`: `Uint8Array`; `dlt_max_refresh`: `number`; `dlt_refresh_count`: `number`; `kyb_pubkey`: `Uint8Array`; `kyb_sig_bytes`: `Uint8Array`; \} |
| `fields.dlt_active_from` | `Uint8Array` |
| `fields.dlt_address` | `Uint8Array` |
| `fields.dlt_auth_id` | `Uint8Array` |
| `fields.dlt_created_at` | `Uint8Array` |
| `fields.dlt_expires_at` | `Uint8Array` |
| `fields.dlt_max_refresh` | `number` |
| `fields.dlt_refresh_count` | `number` |
| `fields.kyb_pubkey` | `Uint8Array` |
| `fields.kyb_sig_bytes` | `Uint8Array` |

#### Returns

`KyberPublicKEM`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="dlt_active_from"></a> `dlt_active_from` | `Uint8Array` | kem.ts:133 |
| <a id="dlt_address"></a> `dlt_address` | `Uint8Array` | kem.ts:130 |
| <a id="dlt_auth_id"></a> `dlt_auth_id` | `Uint8Array` | kem.ts:131 |
| <a id="dlt_created_at"></a> `dlt_created_at` | `Uint8Array` | kem.ts:132 |
| <a id="dlt_expires_at"></a> `dlt_expires_at` | `Uint8Array` | kem.ts:134 |
| <a id="dlt_max_refresh"></a> `dlt_max_refresh` | `number` | kem.ts:136 |
| <a id="dlt_refresh_count"></a> `dlt_refresh_count` | `number` | kem.ts:135 |
| <a id="kyb_pubkey"></a> `kyb_pubkey` | `Uint8Array` | kem.ts:128 |
| <a id="kyb_sig_bytes"></a> `kyb_sig_bytes` | `Uint8Array` | kem.ts:129 |

## Accessors

### address

#### Get Signature

```ts
get address(): Uint8Array;
```

Defined in: kem.ts:186

##### Returns

`Uint8Array`

***

### authId

#### Get Signature

```ts
get authId(): Uint8Array;
```

Defined in: kem.ts:190

##### Returns

`Uint8Array`

## Methods

### encapsulate()

```ts
encapsulate(): Promise<[Uint8Array<ArrayBufferLike>, Uint8Array<ArrayBufferLike>]>;
```

Defined in: kem.ts:203

#### Returns

`Promise`\<\[`Uint8Array`\<`ArrayBufferLike`\>, `Uint8Array`\<`ArrayBufferLike`\>\]\>

***

### signingMaterial()

```ts
signingMaterial(): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: kem.ts:199

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: kem.ts:161

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### toPem()

```ts
toPem(): Promise<string>;
```

Defined in: kem.ts:194

#### Returns

`Promise`\<`string`\>

***

### fromMsgpack()

```ts
static fromMsgpack(data): KyberPublicKEM;
```

Defined in: kem.ts:175

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`KyberPublicKEM`

***

### fromPem()

```ts
static fromPem(pem): Promise<KyberPublicKEM>;
```

Defined in: kem.ts:181

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pem` | `string` |

#### Returns

`Promise`\<`KyberPublicKEM`\>
