import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'
import { buildUserObject } from './build-user-object'
import { postUserObject } from './post-user-object'
import { validateInputs } from './validate-inputs'

interface SubmitForm {
  (args: {
    businessName: string
    businessNameError: string
    industry: string
    lang: Lang
    email: string
    emailError: string
    password: string
    passwordError: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setControl(args: { connecting: boolean }): void
    setErrors(args: any): void // TODO
    logo: Picture
    logoError: string
    link?: string
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
    email,
    emailError,
    password,
    passwordError,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setControl,
    setErrors,
    link,
  } = args

  const validations = validateInputs({
    businessName,
    businessNameError,
    industry,
    email,
    emailError,
    password,
    passwordError,
    termsOfServiceConsent,
    logo,
    logoError,
    setErrors,
  })

  const userObjectInvalid = validations.find(element => element)

  if (userObjectInvalid) {
    setControl({ connecting: false })

    return
  }

  const userObject = buildUserObject({
    businessName,
    businessNameError,
    industry,
    email,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    logo,
    logoError,
    setErrors,
    link,
  })

  postUserObject({ userObject, lang })
}
