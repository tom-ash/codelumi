import { emailAddressValidator } from '../../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.validator'
import { passwordValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'
import { termsOfServiceConsentValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.validator'
import { UserObject } from '../form.types'

interface ValidateUserObject {
  (args: { userObject: UserObject; setErrors(args: object): void }): boolean
}

export const validateUserObject: ValidateUserObject = args => {
  const { userObject, setErrors } = args
  const { emailAddress, password, termsOfServiceConsent } = userObject

  const validationArray = [
    emailAddressValidator({ emailAddress, setErrors }),
    passwordValidator({ password, setErrors }),
    termsOfServiceConsentValidator({ termsOfServiceConsent, setErrors }),
  ]

  return validationArray.every(element => element)
}
