import config from '../constants/config'
import errors from '../constants/errors'

export function emailValidator(email) {
  const { emailRegex } = config
  const isValid = emailRegex.test(email)
  const error = isValid ? null : errors.email

  return {
    isValid,
    error,
  }
}
