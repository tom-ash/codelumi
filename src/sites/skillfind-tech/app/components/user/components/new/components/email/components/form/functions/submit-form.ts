import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'
import { buildUserObject } from './build-user-object'
import { postUserObject } from './post-user-object'

interface SubmitForm {
  (args: {
    businessName: string;
    lang: Lang
    emailAddress: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setControl(args: { connecting: boolean }): void
    setErrors(args: any): void // TODO
    logo: Picture;
  }): void
}

export const submitForm: SubmitForm = args => {
  const {
    businessName,
    logo,
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
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    logo,
    setErrors,
  })

  if (!userObject) return setControl({ connecting: false })

  postUserObject({ userObject, lang })
}
