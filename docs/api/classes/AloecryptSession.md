[@aloecraft/aloecrypt](../README.md) / AloecryptSession

# Class: AloecryptSession

Defined in: session/index.ts:123

## Extends

- `PluginModel`

## Constructors

### Constructor

```ts
new AloecryptSession(fields): AloecryptSession;
```

Defined in: session/index.ts:128

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fields` | \{ `counter_party`: [`CounterParty`](CounterParty.md); `party`: [`Party`](Party.md); `session_salt`: `Uint8Array`; \} |
| `fields.counter_party` | [`CounterParty`](CounterParty.md) |
| `fields.party` | [`Party`](Party.md) |
| `fields.session_salt` | `Uint8Array` |

#### Returns

`AloecryptSession`

#### Overrides

```ts
PluginModel.constructor
```

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="counter_party"></a> `counter_party` | [`CounterParty`](CounterParty.md) | session/index.ts:125 |
| <a id="party"></a> `party` | [`Party`](Party.md) | session/index.ts:124 |
| <a id="session_salt"></a> `session_salt` | `Uint8Array` | session/index.ts:126 |

## Methods

### decrypt()

```ts
decrypt(ciphertext): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: session/index.ts:191

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ciphertext` | `Uint8Array` |

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### encrypt()

```ts
encrypt(plaintext): Promise<Uint8Array<ArrayBufferLike>>;
```

Defined in: session/index.ts:187

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `plaintext` | `Uint8Array` |

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### toMsgpack()

```ts
toMsgpack(): Record<string, unknown>;
```

Defined in: session/index.ts:139

#### Returns

`Record`\<`string`, `unknown`\>

#### Overrides

```ts
PluginModel.toMsgpack
```

***

### fromMsgpack()

```ts
static fromMsgpack(data): AloecryptSession;
```

Defined in: session/index.ts:147

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Record`\<`string`, `unknown`\> |

#### Returns

`AloecryptSession`

***

### fromSecrets()

```ts
static fromSecrets(
   stableSecretA, 
   sessionSecretA, 
   signatureA, 
   nonceA, 
   addressA, 
   stableSecretB, 
   sessionSecretB, 
   signatureB, 
   nonceB, 
   addressB, 
sessionSalt): Promise<AloecryptSession>;
```

Defined in: session/index.ts:157

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stableSecretA` | `Uint8Array` |
| `sessionSecretA` | `Uint8Array` |
| `signatureA` | `Uint8Array` |
| `nonceA` | `Uint8Array` |
| `addressA` | `Uint8Array` |
| `stableSecretB` | `Uint8Array` |
| `sessionSecretB` | `Uint8Array` |
| `signatureB` | `Uint8Array` |
| `nonceB` | `Uint8Array` |
| `addressB` | `Uint8Array` |
| `sessionSalt` | `Uint8Array` |

#### Returns

`Promise`\<`AloecryptSession`\>
