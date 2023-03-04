import { hashPassword } from '../../../../../../../functions/shared'
import { phoneNumberValidator } from '../../inputs/components/phone-number/phone-number.validator'

import { businessNameValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/business-name/business-name.validator'
import { emailAddressValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/email-address/email-address.validator'
import { passwordValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/password/password.validator'
import { termsOfServiceConsentValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/terms-of-service-consent/terms-of-service-consent.validator'
import { termsOfServiceConsentParser } from '../../../../../../../../../../../shared/app/components/user/components/new/components/terms-of-service-consent/terms-of-service-consent.parser'

export function buildUserObject() {
  const { dispatch, termsOfServiceConsentLabel } = this.props
  const userObject = prepareUserObject.call(this)

  if (validateUserObject.call(this, userObject)) {
    dispatch({ type: 'control', value: { connecting: true } })

    userObject.password = hashPassword(userObject.password, userObject.emailAddress)
    userObject.consents = [termsOfServiceConsentParser(termsOfServiceConsentLabel)]

    return userObject
  }
}

function prepareUserObject() {
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsOfServiceConsent } =
    this.props

  let userObject = {
    accountType,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
  }

  if (accountType === 'business') {
    userObject.businessName = businessName
  }

  return userObject
}

function validateUserObject(userObject) {
  const { dispatch } = this.props
  const { businessName, emailAddress, password, phoneNumber, termsOfServiceConsent } = userObject

  const setErrors = (value) => dispatch({ type: 'errors', value })

  const validationArray = [
    emailAddressValidator({ emailAddress, setErrors }),
    passwordValidator({ password, setErrors }),
    termsOfServiceConsentValidator({ termsOfServiceConsent, setErrors }),

    // DEPRECATED
    phoneNumberValidator({ phoneNumber, dispatch }),
  ]

  if (userObject.accountType === 'business') {
    validationArray.concat([businessNameValidator({ businessName, setErrors })])
  }

  return validationArray.every(element => element)
}
