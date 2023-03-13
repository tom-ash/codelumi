import { UserObject } from '../form.types'
import { validateUserObject } from './validate-user-object'
import { hashPassword } from '../../../../../../../../../../../shared/app/components/user/functions/hash-password'
import { termsOfServiceConsentParser } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.parser'

interface BuildUserObject {
  (args: {
    emailAddress: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setErrors(args: object): void
  }): UserObject | undefined
}

export const buildUserObject: BuildUserObject = args => {
  const { emailAddress, password, termsOfServiceConsent, termsOfServiceConsentLabel, setErrors } = args

  let userObject: UserObject = {
    emailAddress,
    password,
    termsOfServiceConsent,
    consents: [],
  }

  const userObjectInvalid = !validateUserObject({ userObject, setErrors })

  if (userObjectInvalid) return

  userObject.password = hashPassword(userObject.password, userObject.emailAddress)
  userObject.consents = [termsOfServiceConsentParser(termsOfServiceConsentLabel)]

  return userObject
}
