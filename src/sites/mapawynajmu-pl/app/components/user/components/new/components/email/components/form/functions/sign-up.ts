import { AccountType } from '../../../../../../../types/user.types'
import { buildUserObject } from './build-user-object'
import { postUserObject } from './post-user-object'

interface SignUp {
  (args: {
    lang: Lang
    accountType: AccountType
    businessName: string
    emailAddress: string
    password: string
    countryCode: string
    phoneNumber: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setControl(args: { connecting: boolean }): void
    setErrors(args: any): void // TODO
  }): void
}

export const signUp: SignUp = args => {
  const {
    lang,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setControl,
    setErrors,
  } = args

  const userObject = buildUserObject({
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setErrors,
  })

  if (!userObject) return setControl({ connecting: false })

  postUserObject({ userObject, lang })
}
