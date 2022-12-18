const noError = { pl: '', en: '' }

export const control = {
  connecting: false,
  verifying: false,
  success: null,
  step: 'form',
}

export const inputs = {
  accountType: 'personal',
  businessName: null,
  email: null,
  countryCode: '+48',
  phoneNumber: null,
  termsAndPrivacyConsent: false,
}

export const errors = {
  businessName: noError,
  phone: noError,
  email: noError,
  password: noError,
  termsAndPrivacyConsent: false,
  verification: noError,
}
