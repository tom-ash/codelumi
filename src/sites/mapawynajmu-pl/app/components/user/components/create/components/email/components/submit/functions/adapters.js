import { hashPassword } from '../../../../../../../functions/shared'
// import { termsOfServiceConsentParser } from '../../inputs/components/terms-of-service-consent/terms-of-service-consent.parser'
import { phoneNumberValidator } from '../../inputs/components/phone-number/phone-number.validator'




import { emailAddressValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/email-address/email-address.validator'
import { businessNameValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/business-name/business-name.validator'
import { passwordValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/password/password.validator'
import { termsOfServiceConsentValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/terms-of-service-consent/terms-of-service-consent.validator'

export function buildUserObject() {
  const { dispatch } = this.props
  const userObject = prepareUserObject.call(this)

  if (validateUserObject.call(this, userObject)) {
    dispatch({ type: 'control', value: { connecting: true } })
    userObject.password = hashPassword(userObject.password, userObject.emailAddress)

    const termsOfServiceConsentText = 'TODO' // this.langHandler(TERMS_AND_SERVICE_CONSENT_TEXT)


    userObject.consents = [] // TODO: [termsOfServiceConsentParser(termsOfServiceConsentText)]
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
