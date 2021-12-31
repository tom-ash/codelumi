import * as verifiers from '../../../../../../../functions/verifiers'
import errorSetter from '../../../../../../../functions/error-setter.js'

export function accountTypeValidator(value) {
  if (verifiers.accountTypeVerifier(value)) return true

  errorSetter.call(this, 'accountType')
  return false
}

export function nameValidator(inputName, value) {
  if (verifiers.nameVerifier(value)) return true

  errorSetter.call(this, inputName)
  return false
}

export function phoneValidator(value) {
  if (verifiers.phoneVerifier(value)) return true
  errorSetter.call(this, 'phone')
  return false
}

export function emailValidator(value) {
  if (verifiers.emailVerifier(value)) return true
  errorSetter.call(this, 'email')
  return false
}

export function passwordValidator(value) {
  if (verifiers.passwordVerifier(value)) return true
  errorSetter.call(this, 'password')
  return false
}