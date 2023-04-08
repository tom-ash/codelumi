// import API_URL from '../../../../../../../../../../shared/constants/urls/api'
// import setVerificationToken from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
// import { buildUrl } from '../../../../../../../../../../shared/functions/routes/builders/url'
// import { UserObject } from '../form.types'
// import { changeUrl } from '../../../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { buildUserObject } from './build-user-object'
import { postUserObject } from './post-user-object'

interface SubmitForm {
  (args: {
    lang: Lang
    emailAddress: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setControl(args: { connecting: boolean }): void
    setErrors(args: any): void // TODO
  }): void
}

export const submitForm: SubmitForm = args => {
  const { lang, emailAddress, password, termsOfServiceConsent, termsOfServiceConsentLabel, setControl, setErrors } =
    args

  const userObject = buildUserObject({
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setErrors,
  })

  if (!userObject) return setControl({ connecting: false })

  postUserObject({ userObject, lang })
}
