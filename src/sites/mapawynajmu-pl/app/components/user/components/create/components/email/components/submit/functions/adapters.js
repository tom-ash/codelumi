import { hashPassword } from '../../../../../../../functions/shared.js'
import { parser as consentsParser } from '../../../../consents/functions/parser'
import {
  accountTypeValidator,
  nameValidator,
  phoneValidator,
  emailValidator,
  passwordValidator,
} from '../../inputs/functions/validators.js'
import termsAndPrivacyConsentValidator from '../../../../consents/functions/validators.js'

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
  const { accountType, email } = this.props
  const termsAndPrivacyConsent = document.getElementById('user-create-consents-terms-and-privacy').checked

  let userObject = {
    accountType,
    countryCode: document.getElementById('user-create-email-area-code').value,
    phoneNumber: document.getElementById('user-create-email-phone-number').value,
    email: (email || '').toLowerCase(),
    password: document.getElementById('user-create-email-password').value,
    termsAndPrivacyConsent,
    ...(accountType === 'private'
      ? {
          firstName: document.getElementById('user-create-email-first-name').value,
        }
      : {
          businessName: document.getElementById('user-create-email-business-name').value,
        }),
  }

  return userObject
}

function validateUserObject(userObject) {
  const { accountType } = this.props

  const validationArray = [
    accountTypeValidator.call(this, userObject.accountType),
    phoneValidator.call(this, userObject.phoneNumber),
    emailValidator.call(this, userObject.email),
    passwordValidator.call(this, userObject.password),
    termsAndPrivacyConsentValidator.call(this, userObject.termsAndPrivacyConsent),
    ...(accountType === 'private'
      ? [nameValidator.call(this, 'firstName', userObject.firstName)]
      : [nameValidator.call(this, 'businessName', userObject.businessName)]),
  ]

  return validationArray.every(element => element)
}
