import { hashPassword } from '../../../../../../../functions/shared'
import { termsAndPrivacyConsentParser } from '../../inputs/components/terms-and-privacy-consent/terms-and-privacy-consent.parser'
import { TERMS_AND_SERVICE_CONSENT_TEXT } from '../../inputs/components/terms-and-privacy-consent/terms-and-privacy-consent.text'
import { businessNameValidator } from '../../inputs/components/business-name/business-name.validator'
import { emailAddressValidator } from '../../inputs/components/email-address/email-address.validator'
import { passwordValidator } from '../../inputs/components/password/password.validator'
import { phoneNumberValidator } from '../../inputs/components/phone-number/phone-number.validator'
import { termsAndServiceConsentValidator } from '../../inputs/components/terms-and-privacy-consent/terms-and-privacy-consent.validator'

export function buildUserObject() {
  const { dispatch } = this.props
  const userObject = prepareUserObject.call(this)

  if (validateUserObject.call(this, userObject)) {
    dispatch({ type: 'user/create/control', value: { connecting: true } })
    userObject.password = hashPassword(userObject.password, userObject.emailAddress)
    const termsAndPrivacyConsentText = this.langHandler(TERMS_AND_SERVICE_CONSENT_TEXT)
    userObject.consents = [termsAndPrivacyConsentParser(termsAndPrivacyConsentText)]
    return userObject
  }
}

function prepareUserObject() {
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsAndPrivacyConsent } =
    this.props

  let userObject = {
    accountType,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsAndPrivacyConsent,
  }

  if (accountType === 'business') {
    userObject.businessName = businessName
  }

  return userObject
}

function validateUserObject(userObject) {
  const { dispatch } = this.props
  const { emailAddress, password, phoneNumber, termsAndPrivacyConsent } = userObject

  const validationArray = [
    emailAddressValidator({ emailAddress, dispatch }),
    passwordValidator({ password, dispatch }),
    phoneNumberValidator({ phoneNumber, dispatch }),
    termsAndServiceConsentValidator({ termsAndPrivacyConsent, dispatch }),
  ]

  if (userObject.accountType === 'business') {
    validationArray.concat([businessNameValidator({ dispatch, value: userObject.businessName })])
  }

  return validationArray.every(element => element)
}
