import * as verifiers from '../../../../../../../functions/verifiers'
import errorSetter from '../../../../../../../functions/error-setter'

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
