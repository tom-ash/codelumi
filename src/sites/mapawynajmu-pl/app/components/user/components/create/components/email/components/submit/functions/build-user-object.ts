import { hashPassword } from '../../../../../../../functions/shared'
import { termsOfServiceConsentParser } from '../../../../../../../../../../../shared/app/components/user/components/new/components/terms-of-service-consent/terms-of-service-consent.parser'
import { validateUserObject } from './validate-user-object'

export function buildUserObject() {
  const {
    dispatch,
    termsOfServiceConsentLabel,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent
    // @ts-ignore
  } = this.props
  
  let userObject = {
    accountType,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
  }

  if (accountType === 'business') {
    // @ts-ignore
    userObject.businessName = businessName
  }

  // @ts-ignore
  const userObjectInvalid = !validateUserObject.call(this, userObject)

  if (userObjectInvalid) return

  dispatch({ type: 'control', value: { connecting: true } })

  userObject.password = hashPassword(userObject.password, userObject.emailAddress)
  // @ts-ignore
  userObject.consents = [termsOfServiceConsentParser(termsOfServiceConsentLabel)]

  return userObject
}
