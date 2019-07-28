const noError = { polish: '', english: '' }

export const control = {
  connecting: false,
  verifying: false,
  success: null
}

export const inputs = {
  areaCode: '+48',
  terms: false,
  privacy: false
}

export const data = {
  token: null
}

export const errors = {
  businessName: noError,
  taxIdentification: noError,
  phone: noError,
  email: noError,
  password: noError,
  terms: false,
  privacy: false,
  verification: noError
}
