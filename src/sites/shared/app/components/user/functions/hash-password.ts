// TODO: TS!
// @ts-ignore
import PBKDF2 from 'crypto-js/pbkdf2'
import config from '../../../../../mapawynajmu-pl/app/constants/config'

// TODO: TS!
// @ts-ignore
export function hashPassword(plaintext, salt) {
  const { keySize, iterations } = config.passwordHashing
  return PBKDF2(plaintext, salt, {
    keySize,
    iterations,
  }).toString()
}
