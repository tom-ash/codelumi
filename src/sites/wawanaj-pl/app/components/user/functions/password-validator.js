import config from '../../../constants/config'
import { errors } from '../constants/errors'

export function passwordValidator(password) {
  const { passwordRegex } = config
  const isValid = passwordRegex.test(password)
  const error = isValid ? null : errors.password

  return {
    isValid,
    error
  }
}