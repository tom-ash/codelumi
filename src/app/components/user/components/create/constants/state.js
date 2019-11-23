const noError = { polish: '', english: '' }

export const control = {
  connecting: false,
  verifying: false,
  success: null,
  showCreate: false
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
  taxNumber: noError,
  phone: noError,
  email: noError,
  password: noError,
  terms: false,
  privacy: false,
  verification: noError
}
