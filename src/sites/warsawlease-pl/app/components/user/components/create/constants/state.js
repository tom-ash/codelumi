const noError = { pl: '', en: '' }

export const control = {
  connecting: false,
  verifying: false,
  success: null,
  step: 'form'
}

export const inputs = {
  accountType: 'private',
  email: null,
  firstName: null,
  countryCode: '+48',
  phoneNumber: null,
  termsAndPrivacyConsent: false
}

export const errors = {
  accountType: noError,
  firstName: noError,
  lastName: noError,
  businessName: noError,
  taxNumber: noError,
  phone: noError,
  email: noError,
  password: noError,
  termsAndPrivacyConsent: false,
  privacy: false,
  verification: noError
}
