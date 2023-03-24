// TODO: TS!
// @ts-ignore
import PBKDF2 from 'crypto-js/pbkdf2'

const PASSWORD_HASHING = {
  keySize: 32,
  iterations: 128,
}

// TODO: TS!
// @ts-ignore
export function hashPassword(plaintext, salt) {
  const { keySize, iterations } = PASSWORD_HASHING
  return PBKDF2(plaintext, salt, {
    keySize,
    iterations,
  }).toString()
}
