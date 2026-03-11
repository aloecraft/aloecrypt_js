[@aloecraft/aloecrypt](../README.md) / KyberFullKEM

# Class: KyberFullKEM

Defined in: kem.ts:6

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new KyberFullKEM(fields): KyberFullKEM;
```

Defined in: kem.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `dlt_active_from`: `Uint8Array`; `dlt_address`: `Uint8Array`; `dlt_auth_id`: `Uint8Array`; `dlt_created_at`: `Uint8Array`; `dlt_expires_at`: `Uint8Array`; `dlt_max_refresh`: `number`; `dlt_refresh_count`: `number`; `kyb_privkey`: `Uint8Array`; `kyb_pubkey`: `Uint8Array`; `kyb_sig_bytes`: `Uint8Array`; \} |
| `fields.dlt_active_from` | `Uint8Array` |
| `fields.dlt_address` | `Uint8Array` |
| `fields.dlt_auth_id` | `Uint8Array` |
| `fields.dlt_created_at` | `Uint8Array` |
| `fields.dlt_expires_at` | `Uint8Array` |
| `fields.dlt_max_refresh` | `number` |
| `fields.dlt_refresh_count` | `number` |
| `fields.kyb_privkey` | `Uint8Array` |
| `fields.kyb_pubkey` | `Uint8Array` |
| `fields.kyb_sig_bytes` | `Uint8Array` |

#### Returns

`KyberFullKEM`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="dlt_active_from"></a> `dlt_active_from` | `Uint8Array` | kem.ts:13 |
| <a id="dlt_address"></a> `dlt_address` | `Uint8Array` | kem.ts:10 |
| <a id="dlt_auth_id"></a> `dlt_auth_id` | `Uint8Array` | kem.ts:11 |
| <a id="dlt_created_at"></a> `dlt_created_at` | `Uint8Array` | kem.ts:12 |
| <a id="dlt_expires_at"></a> `dlt_expires_at` | `Uint8Array` | kem.ts:14 |
| <a id="dlt_max_refresh"></a> `dlt_max_refresh` | `number` | kem.ts:16 |
| <a id="dlt_refresh_count"></a> `dlt_refresh_count` | `number` | kem.ts:15 |
| <a id="kyb_privkey"></a> `kyb_privkey` | `Uint8Array` | kem.ts:8 |
| <a id="kyb_pubkey"></a> `kyb_pubkey` | `Uint8Array` | kem.ts:7 |
| <a id="kyb_sig_bytes"></a> `kyb_sig_bytes` | `Uint8Array` | kem.ts:9 |

## Accessors

### address

#### Get Signature

```ts
get address(): Uint8Array;
```

Defined in: kem.ts:98

##### Returns

`Uint8Array`

***

### authId

#### Get Signature

```ts
get authId(): Uint8Array;
```

Defined in: kem.ts:102

##### Returns

`Uint8Array`

## Methods

### decapsulate()

```ts
decapsulate(ciphertext): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: kem.ts:120

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ciphertext` | `Uint8Array` |

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### signingMaterial()

```ts
signingMaterial(): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: kem.ts:116

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: kem.ts:43

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### toPublic()

```ts
toPublic(): Promise<KyberPublicKEM>;
```

Defined in: kem.ts:106

#### Returns

`Promise`\<[`KyberPublicKEM`](KyberPublicKEM.md)\>

***

### toXPem()

```ts
toXPem(password, salt): Promise<string>;
```

Defined in: kem.ts:111

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `password` | `Uint8Array` |
| `salt` | `Uint8Array` |

#### Returns

`Promise`\<`string`\>

***

### canonical()

```ts
static canonical(
   signer, 
   idx, 
   activeFrom, 
   expiresAt, 
   refreshCount, 
maxRefresh): Promise<KyberFullKEM>;
```

Defined in: kem.ts:78

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `signer` | [`DilithiumSigner`](DilithiumSigner.md) |
| `idx` | `Uint8Array` |
| `activeFrom` | `Uint8Array` |
| `expiresAt` | `Uint8Array` |
| `refreshCount` | `number` |
| `maxRefresh` | `number` |

#### Returns

`Promise`\<`KyberFullKEM`\>

***

### create()

```ts
static create(
   signer, 
   activeFrom, 
   expiresAt, 
   refreshCount, 
maxRefresh): Promise<KyberFullKEM>;
```

Defined in: kem.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `signer` | [`DilithiumSigner`](DilithiumSigner.md) |
| `activeFrom` | `Uint8Array` |
| `expiresAt` | `Uint8Array` |
| `refreshCount` | `number` |
| `maxRefresh` | `number` |

#### Returns

`Promise`\<`KyberFullKEM`\>

***

### fromMsgpack()

```ts
static fromMsgpack(data): KyberFullKEM;
```

Defined in: kem.ts:58

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`KyberFullKEM`

***

### fromXPem()

```ts
static fromXPem(
   pem, 
   password, 
salt): Promise<KyberFullKEM>;
```

Defined in: kem.ts:93

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pem` | `string` |
| `password` | `Uint8Array` |
| `salt` | `Uint8Array` |

#### Returns

`Promise`\<`KyberFullKEM`\>
