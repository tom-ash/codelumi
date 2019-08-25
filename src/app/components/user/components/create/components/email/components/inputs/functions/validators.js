import * as verifiers from '../../../../../../../functions/verifiers'

export function businesstNameValidator(value) {
  if (verifiers.businessNameVerifier(value)) return true
  this.errorSetter('businessName')
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