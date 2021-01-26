import config from '../../../constants/config'
import { errors } from '../constants/errors'

export function verificationCodeValidator(inputValue) {
  const { verificationCodeRegex } = config

  const isValid = verificationCodeRegex.test(inputValue)
  const error = isValid ? null : errors.verificationCode

  return {
    isValid,
    error
  }
}
