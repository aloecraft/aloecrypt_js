[@aloecraft/aloecrypt](../README.md) / DilithiumSigner

# Class: DilithiumSigner

Defined in: signatory.ts:5

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new DilithiumSigner(fields): DilithiumSigner;
```

Defined in: signatory.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `dlt_active_from`: `Uint8Array`; `dlt_address`: `Uint8Array`; `dlt_auth_id`: `Uint8Array`; `dlt_created_at`: `Uint8Array`; `dlt_expires_at`: `Uint8Array`; `dlt_max_refresh`: `number`; `dlt_privkey`: `Uint8Array`; `dlt_pubkey`: `Uint8Array`; `dlt_refresh_count`: `number`; `dlt_sig_bytes`: `Uint8Array`; \} |
| `fields.dlt_active_from` | `Uint8Array` |
| `fields.dlt_address` | `Uint8Array` |
| `fields.dlt_auth_id` | `Uint8Array` |
| `fields.dlt_created_at` | `Uint8Array` |
| `fields.dlt_expires_at` | `Uint8Array` |
| `fields.dlt_max_refresh` | `number` |
| `fields.dlt_privkey` | `Uint8Array` |
| `fields.dlt_pubkey` | `Uint8Array` |
| `fields.dlt_refresh_count` | `number` |
| `fields.dlt_sig_bytes` | `Uint8Array` |

#### Returns

`DilithiumSigner`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="dlt_active_from"></a> `dlt_active_from` | `Uint8Array` | signatory.ts:12 |
| <a id="dlt_address"></a> `dlt_address` | `Uint8Array` | signatory.ts:9 |
| <a id="dlt_auth_id"></a> `dlt_auth_id` | `Uint8Array` | signatory.ts:10 |
| <a id="dlt_created_at"></a> `dlt_created_at` | `Uint8Array` | signatory.ts:11 |
| <a id="dlt_expires_at"></a> `dlt_expires_at` | `Uint8Array` | signatory.ts:13 |
| <a id="dlt_max_refresh"></a> `dlt_max_refresh` | `number` | signatory.ts:15 |
| <a id="dlt_privkey"></a> `dlt_privkey` | `Uint8Array` | signatory.ts:7 |
| <a id="dlt_pubkey"></a> `dlt_pubkey` | `Uint8Array` | signatory.ts:6 |
| <a id="dlt_refresh_count"></a> `dlt_refresh_count` | `number` | signatory.ts:14 |
| <a id="dlt_sig_bytes"></a> `dlt_sig_bytes` | `Uint8Array` | signatory.ts:8 |

## Accessors

### address

#### Get Signature

```ts
get address(): Uint8Array;
```

Defined in: signatory.ts:78

##### Returns

`Uint8Array`

***

### authId

#### Get Signature

```ts
get authId(): Uint8Array;
```

Defined in: signatory.ts:82

##### Returns

`Uint8Array`

## Methods

### addressHex()

```ts
addressHex(): string;
```

Defined in: signatory.ts:86

#### Returns

`string`

***

### createDelegate()

```ts
createDelegate(
   activeFrom, 
   expiresAt, 
   refreshCount, 
maxRefresh): Promise<DilithiumSigner>;
```

Defined in: signatory.ts:115

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `activeFrom` | `Uint8Array` |
| `expiresAt` | `Uint8Array` |
| `refreshCount` | `number` |
| `maxRefresh` | `number` |

#### Returns

`Promise`\<`DilithiumSigner`\>

***

### isRoot()

```ts
isRoot(): Promise<boolean>;
```

Defined in: signatory.ts:92

#### Returns

`Promise`\<`boolean`\>

***

### isTimeActive()

```ts
isTimeActive(): Promise<boolean>;
```

Defined in: signatory.ts:97

#### Returns

`Promise`\<`boolean`\>

***

### sign()

```ts
sign(message): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: signatory.ts:102

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### signHex()

```ts
signHex(message): Promise<string>;
```

Defined in: signatory.ts:106

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `Uint8Array` |

#### Returns

`Promise`\<`string`\>

***

### signingAuthId()

```ts
signingAuthId(): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: signatory.ts:132

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### signingMaterial()

```ts
signingMaterial(): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: signatory.ts:128

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: signatory.ts:42

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### toVerifier()

```ts
toVerifier(): Promise<DilithiumVerifier>;
```

Defined in: signatory.ts:73

#### Returns

`Promise`\<[`DilithiumVerifier`](DilithiumVerifier.md)\>

***

### toXPem()

```ts
toXPem(password, salt): Promise<string>;
```

Defined in: signatory.ts:110

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `password` | `Uint8Array` |
| `salt` | `Uint8Array` |

#### Returns

`Promise`\<`string`\>

***

### fromMsgpack()

```ts
static fromMsgpack(data): DilithiumSigner;
```

Defined in: signatory.ts:57

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`DilithiumSigner`

***

### fromXPem()

```ts
static fromXPem(
   pem, 
   password, 
salt): Promise<DilithiumSigner>;
```

Defined in: signatory.ts:68

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pem` | `string` |
| `password` | `Uint8Array` |
| `salt` | `Uint8Array` |

#### Returns

`Promise`\<`DilithiumSigner`\>

***

### new()

```ts
static new(): Promise<DilithiumSigner>;
```

Defined in: signatory.ts:63

#### Returns

`Promise`\<`DilithiumSigner`\>
