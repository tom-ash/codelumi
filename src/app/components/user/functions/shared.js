import { apiUrl } from '../../../constants/urls.js'
import PBKDF2 from 'crypto-js/pbkdf2'
import config from '../../../constants/config'

export function getDerivedSaltForPassword(emailAddress) {
  return fetch(apiUrl + '/user_derived_salt', {
    headers: {
      'Content-Type': 'application/json',
      'emailAddress': emailAddress + '|ClientPassword'
    }
  })
  .then(response => {
    if (response.status == 200) { return response.json() }
    throw new Error('Network Error')
  })
  .then(json => { return json.recordSalt })
  .catch((e) => {console.dir(e)})
}

export function hashPassword(plaintext, salt) {
  const { keySize, iterations } = config.passwordHashing
  return PBKDF2(
    plaintext,
    salt,
    {
      keySize,
      iterations
    }
  ).toString()
}

export function emailAddressValidator(emailAddress, callback, errors) {
  const { emailRegex } = config
  if (emailRegex.test(emailAddress)) return true
  this.props[callback](errors)
  return false
}
