const noError = { pl: '', en: '' }

export const control = {
  connecting: false,
  verifying: false,
  success: null,
  showCreate: false,
  step: 'form'
}

export const inputs = {
  accountType: 'private',
  phoneCode: '+48',
  termsAndPrivacyConsent: false
}

export const data = {
  token: null
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
