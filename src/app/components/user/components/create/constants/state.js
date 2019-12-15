const noError = { pl: '', en: '' }

export const control = {
  connecting: false,
  verifying: false,
  success: null,
  showCreate: false
}

export const inputs = {
  areaCode: '+48',
  termsAndPrivacyConsent: false
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
  termsAndPrivacyConsent: false,
  privacy: false,
  verification: noError
}
