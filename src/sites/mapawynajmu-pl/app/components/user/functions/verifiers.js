import config from '../../../constants/config'

export function accountTypeVerifier(value) {
  return value !== ''
}

export function nameVerifier(value) {
  return value.length > 0
}

export function taxNumberVerifier(value) {
  return value.length === 10
}

export function phoneVerifier(value) {
  return value.length === 9
}

export function emailVerifier(value) {
  const { emailRegex } = config
  return emailRegex.test(value)
}

export function passwordVerifier(value) {
  return value.length >= 6
}
