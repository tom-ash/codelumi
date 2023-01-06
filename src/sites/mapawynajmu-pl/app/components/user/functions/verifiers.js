import config from '../../../constants/config'

export function nameVerifier(value) {
  return value.length > 0
}

export function taxNumberVerifier(value) {
  return value.length === 10
}

export function passwordVerifier(value) {
  return value.length >= 6
}
