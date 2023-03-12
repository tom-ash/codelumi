import { AccountType } from '../../../../../../../types/user.types'
import { UserObject } from '../form.types'
import { validateUserObject } from './validate-user-object'
import { hashPassword } from '../../../../../../../../../../../shared/app/components/user/functions/hash-password'
import { termsOfServiceConsentParser } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.parser'

interface BuildUserObject {
  (args: {
    accountType: AccountType
    businessName: string
    emailAddress: string
    password: string
    countryCode: string
    phoneNumber: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setErrors(args: object): void
  }): UserObject | undefined
}

export const buildUserObject: BuildUserObject = (args) => {
  const {
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setErrors,
  } = args
  
  let userObject: UserObject = {
    accountType,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    consents: []
  }

  if (accountType === AccountType.BUSINESS) {
    userObject.businessName = businessName
  }

  const userObjectInvalid = !validateUserObject({ userObject, setErrors })

  if (userObjectInvalid) return

  userObject.password = hashPassword(userObject.password, userObject.emailAddress)
  userObject.consents = [termsOfServiceConsentParser(termsOfServiceConsentLabel)]

  return userObject
}
