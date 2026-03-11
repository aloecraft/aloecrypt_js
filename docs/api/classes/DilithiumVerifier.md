[@aloecraft/aloecrypt](../README.md) / DilithiumVerifier

# Class: DilithiumVerifier

Defined in: signatory.ts:139

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new DilithiumVerifier(fields): DilithiumVerifier;
```

Defined in: signatory.ts:150

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `dlt_active_from`: `Uint8Array`; `dlt_address`: `Uint8Array`; `dlt_auth_id`: `Uint8Array`; `dlt_created_at`: `Uint8Array`; `dlt_expires_at`: `Uint8Array`; `dlt_max_refresh`: `number`; `dlt_pubkey`: `Uint8Array`; `dlt_refresh_count`: `number`; `dlt_sig_bytes`: `Uint8Array`; \} |
| `fields.dlt_active_from` | `Uint8Array` |
| `fields.dlt_address` | `Uint8Array` |
| `fields.dlt_auth_id` | `Uint8Array` |
| `fields.dlt_created_at` | `Uint8Array` |
| `fields.dlt_expires_at` | `Uint8Array` |
| `fields.dlt_max_refresh` | `number` |
| `fields.dlt_pubkey` | `Uint8Array` |
| `fields.dlt_refresh_count` | `number` |
| `fields.dlt_sig_bytes` | `Uint8Array` |

#### Returns

`DilithiumVerifier`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="dlt_active_from"></a> `dlt_active_from` | `Uint8Array` | signatory.ts:145 |
| <a id="dlt_address"></a> `dlt_address` | `Uint8Array` | signatory.ts:142 |
| <a id="dlt_auth_id"></a> `dlt_auth_id` | `Uint8Array` | signatory.ts:143 |
| <a id="dlt_created_at"></a> `dlt_created_at` | `Uint8Array` | signatory.ts:144 |
| <a id="dlt_expires_at"></a> `dlt_expires_at` | `Uint8Array` | signatory.ts:146 |
| <a id="dlt_max_refresh"></a> `dlt_max_refresh` | `number` | signatory.ts:148 |
| <a id="dlt_pubkey"></a> `dlt_pubkey` | `Uint8Array` | signatory.ts:140 |
| <a id="dlt_refresh_count"></a> `dlt_refresh_count` | `number` | signatory.ts:147 |
| <a id="dlt_sig_bytes"></a> `dlt_sig_bytes` | `Uint8Array` | signatory.ts:141 |

## Accessors

### address

#### Get Signature

```ts
get address(): Uint8Array;
```

Defined in: signatory.ts:198

##### Returns

`Uint8Array`

***

### authId

#### Get Signature

```ts
get authId(): Uint8Array;
```

Defined in: signatory.ts:202

##### Returns

`Uint8Array`

## Methods

### isRoot()

```ts
isRoot(): Promise<boolean>;
```

Defined in: signatory.ts:211

#### Returns

`Promise`\<`boolean`\>

***

### isTimeActive()

```ts
isTimeActive(): Promise<boolean>;
```

Defined in: signatory.ts:216

#### Returns

`Promise`\<`boolean`\>

***

### signingAuthId()

```ts
signingAuthId(): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: signatory.ts:230

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### signingMaterial()

```ts
signingMaterial(): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: signatory.ts:226

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: signatory.ts:173

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

Defined in: signatory.ts:221

#### Returns

`Promise`\<`string`\>

***

### verify()

```ts
verify(material, sigBytes): Promise<boolean>;
```

Defined in: signatory.ts:206

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `material` | `Uint8Array` |
| `sigBytes` | `Uint8Array` |

#### Returns

`Promise`\<`boolean`\>

***

### fromMsgpack()

```ts
static fromMsgpack(data): DilithiumVerifier;
```

Defined in: signatory.ts:187

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`DilithiumVerifier`

***

### fromPem()

```ts
static fromPem(pem): Promise<DilithiumVerifier>;
```

Defined in: signatory.ts:193

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pem` | `string` |

#### Returns

`Promise`\<`DilithiumVerifier`\>
