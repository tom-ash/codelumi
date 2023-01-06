import { hashPassword } from '../../../../../../../functions/shared'
import { parser as consentsParser } from '../../../../consents/functions/parser'
import { businessNameValidator } from '../../inputs/components/business-name/business-name.validator'
import { passwordValidator } from '../../inputs/functions/validators'
import termsAndPrivacyConsentValidator from '../../../../consents/functions/validators'
import { phoneNumberValidator } from '../../inputs/components/phone-number/phone-number.validator'
import { emailAddressValidator } from '../../inputs/components/email-address/email-address.validator'

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
  const {
    accountType,
    businessName,
    emailAddress
  } = this.props
  const termsAndPrivacyConsent = document.getElementById('user-create-consents-terms-and-privacy').checked
  let userObject = {
    accountType,
    emailAddress,
    password: document.getElementById('user-create-email-password').value,
    countryCode: document.getElementById('user-create-email-area-code').value,
    phoneNumber: document.getElementById('user-create-email-phone-number').value,
    termsAndPrivacyConsent,
  }

  if (accountType === 'business') {
    userObject.businessName = businessName
  }

  return userObject
}

function validateUserObject(userObject) {
  const {
    dispatch
  } = this.props
  const {
    emailAddress,
    phoneNumber
  } = userObject

  const validationArray = [
    phoneNumberValidator({ phoneNumber, dispatch}),
    emailAddressValidator({ emailAddress, dispatch }),
    passwordValidator.call(this, userObject.password),
    termsAndPrivacyConsentValidator.call(this, userObject.termsAndPrivacyConsent),
  ]

  if (userObject.accountType === 'business') {
    validationArray.concat([businessNameValidator({ dispatch, value: userObject.businessName})])
  }

  return validationArray.every(element => element)
}
