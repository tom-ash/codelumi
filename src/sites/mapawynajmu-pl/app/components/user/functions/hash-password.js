import PBKDF2 from 'crypto-js/pbkdf2'
import config from '../../../constants/config'

export function hashPassword(plaintext, salt) {
  const { keySize, iterations } = config.passwordHashing
  return PBKDF2(plaintext, salt, {
    keySize,
    iterations,
  }).toString()
}
