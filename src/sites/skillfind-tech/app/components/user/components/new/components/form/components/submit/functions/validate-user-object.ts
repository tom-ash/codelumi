import { emailAddressValidator } from '../../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.validator'
import { passwordValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'
import { termsOfServiceConsentValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.validator'
import { validateBusinessName } from '../../business-name/functions/validate-business-name'
import { validateEmail } from '../../email-credentials/functions/validate-email'
import { validatePassword } from '../../email-credentials/functions/validate-password'
import { validateTermsOfService } from '../../email-credentials/functions/validate-terms-of-service'
import { validateLogo } from '../../logo/functions/validate-logo'
import { UserObject } from '../types/user-object.interface'

type ValidateUserObjectParams = UserObject & {
  businessNameError: string
  logoError: string
  setErrors(params: any): void
}

type ValidateUserObject = {
  (params: ValidateUserObjectParams): boolean
}

export const validateUserObject: ValidateUserObject = params => {
  const { businessName, businessNameError, logo, logoError, emailAddress, password, termsOfServiceConsent, setErrors } =
    params

  const validationArray = [
    validateBusinessName({
      value: businessName,
      errorMessage: businessNameError,
      setErrors,
    }),
    validateLogo({
      value: logo,
      errorMessage: logoError,
      setErrors,
    }),
    validateEmail({
      value: emailAddress,
      errorMessage: 'TODO',
      setErrors,
    }),
    validatePassword({
      value: password,
      errorMessage: 'TODO',
      setErrors,
    }),
    validateTermsOfService({
      value: termsOfServiceConsent,
      errorMessage: 'TODO',
      setErrors,
    }),
  ]

  return !validationArray.find(element => element)
}
