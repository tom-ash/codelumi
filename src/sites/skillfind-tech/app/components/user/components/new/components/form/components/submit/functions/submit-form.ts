import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'
import { buildUserObject } from './build-user-object'
import { postUserObject } from './post-user-object'

interface SubmitForm {
  (args: {
    businessName: string
    businessNameError: string
    industry: string
    lang: Lang
    emailAddress: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setControl(args: { connecting: boolean }): void
    setErrors(args: any): void // TODO
    logo: Picture
    logoError: string
  }): void
}

export const submitForm: SubmitForm = args => {
  const {
    businessName,
    businessNameError,
    industry,
    logo,
    logoError,
    lang,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setControl,
    setErrors,
  } = args

  const userObject = buildUserObject({
    businessName,
    businessNameError,
    industry,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    logo,
    logoError,
    setErrors,
  })

  if (!userObject) return setControl({ connecting: false })

  postUserObject({ userObject, lang })
}
