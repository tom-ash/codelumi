import { hashPassword } from '../../../../../../../functions/shared'
import { parser as consentsParser } from '../../../../consents/functions/parser'
import { phoneValidator, emailValidator, passwordValidator } from '../../inputs/functions/validators'
import termsAndPrivacyConsentValidator from '../../../../consents/functions/validators'

export function buildUserObject() {
  const { dispatch } = this.props
  const userObject = prepareUserObject.call(this)
  if (validateUserObject.call(this, userObject)) {
    dispatch({ type: 'user/create/control', value: { connecting: true } })
    userObject.password = hashPassword(userObject.password, userObject.email)
    consentsParser.call(this, userObject)
    return userObject
  }
}

function prepareUserObject() {
  const { accountType, businessName, email } = this.props
  const termsAndPrivacyConsent = document.getElementById('user-create-consents-terms-and-privacy').checked

  let userObject = {
    accountType,
    businessName,
    countryCode: document.getElementById('user-create-email-area-code').value,
    phoneNumber: document.getElementById('user-create-email-phone-number').value,
    email: (email || '').toLowerCase(),
    password: document.getElementById('user-create-email-password').value,
    termsAndPrivacyConsent,
  }

  return userObject
}

function validateUserObject(userObject) {
  const validationArray = [
    phoneValidator.call(this, userObject.phoneNumber),
    emailValidator.call(this, userObject.email),
    passwordValidator.call(this, userObject.password),
    termsAndPrivacyConsentValidator.call(this, userObject.termsAndPrivacyConsent),
  ]

  return validationArray.every(element => element)
}
