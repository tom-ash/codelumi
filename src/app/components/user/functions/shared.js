import { apiUrl } from '../../../constants/urls.js'
import PBKDF2 from 'crypto-js/pbkdf2'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
  .then(jsonResponse => { return jsonResponse.recordSalt })
  .catch((e) => {console.dir(e)})
}

const ONCLIENTPASSWORDHASHINGKEYSIZE = 32
const ONCLIENTPASSWORDHASHINGITERATIONS = 128

export function hashPassword(plaintextPassword, plaintextSalt) {
  return PBKDF2(plaintextPassword, plaintextSalt, {
    keySize: ONCLIENTPASSWORDHASHINGKEYSIZE,
    iterations: ONCLIENTPASSWORDHASHINGITERATIONS
  }).toString()
}

export function emailAddressValidator(emailAddress, callback, errors) {
  if (emailRegex.test(emailAddress)) {
    return true
  }
  this.props[callback](errors)
  return false
}
