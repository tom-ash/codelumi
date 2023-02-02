import { EMPTY_LANG_OBJECT as NO_ERROR } from '../../../../../constants/lang-objects/empty'

export const control = {
  connecting: false,
  verifying: false,
  success: null,
  step: 'form',
}

export const data = {
  accountType: null,
  businessName: null,
  urlifiedBusinessName: null,
}

export const inputs = {
  accountType: 'private',
  businessName: '',
  emailAddress: '',
  password: '',
  countryCode: '+48',
  phoneNumber: '',
  termsAndPrivacyConsent: false,
}

export const errors = {
  businessName: NO_ERROR,
  emailAddress: NO_ERROR,
  password: NO_ERROR,
  phoneNumber: NO_ERROR,
  termsAndPrivacyConsent: NO_ERROR,
  verification: NO_ERROR,
}
