// import { EmptyTextInput } from "../../../../../../../shared/shared/types/empty-text-input"

const noError = { pl: '', en: '' }

export const control = {
  connecting: false,
  verifying: false,
  success: null,
  step: 'form',
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
  businessName: noError,
  emailAddress: noError,
  password: noError,
  phoneNumber: noError,
  termsAndPrivacyConsent: noError,
  verification: noError,
}
