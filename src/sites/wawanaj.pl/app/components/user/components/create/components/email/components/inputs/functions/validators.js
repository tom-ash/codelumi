import * as verifiers from '../../../../../../../functions/verifiers'

export function accountTypeValidator(value) {
  if (verifiers.accountTypeVerifier(value)) return true

  this.errorSetter('accountType')
  return false
}

export function nameValidator(inputName, value) {
  if (verifiers.nameVerifier(value)) return true

  this.errorSetter(inputName)
  return false
}

export function phoneValidator(value) {
  if (verifiers.phoneVerifier(value)) return true
  this.errorSetter('phone')
  return false
}

export function emailValidator(value) {
  if (verifiers.emailVerifier(value)) return true
  this.errorSetter('email')
  return false
}

export function passwordValidator(value) {
  if (verifiers.passwordVerifier(value)) return true
  this.errorSetter('password')
  return false
}