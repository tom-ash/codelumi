import { UserObject } from '../types/user-object.interface'
import { hashPassword } from '../../../../../../../../../../../shared/app/components/user/functions/hash-password'
import { termsOfServiceConsentParser } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.parser'
import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'

interface BuildUserObject {
  (args: {
    businessName: string
    businessNameError: string
    industry: string
    logo: Picture
    logoError: string
    email: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setErrors(args: object): void
    link?: string
  }): UserObject
}

export const buildUserObject: BuildUserObject = args => {
  const {
    businessName,
    industry,
    email,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    logo,
    link,
  } = args

  let userObject: UserObject = {
    businessName,
    industry,
    email,
    password,
    termsOfServiceConsent,
    logo,
    link,
  }

  userObject.password = hashPassword(userObject.password, userObject.email)
  userObject.consents = [termsOfServiceConsentParser(termsOfServiceConsentLabel)]

  return userObject
}
