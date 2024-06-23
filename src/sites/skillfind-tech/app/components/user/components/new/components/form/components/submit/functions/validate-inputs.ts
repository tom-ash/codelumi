import { validateEmail } from '../../../../../../../../../../../shared/app/components/support/inputs/email/validators/validate-email'
import { validatePassword } from '../../../../../../../../../../../shared/app/components/support/inputs/password/validators/validate-password'
import { validateBusinessName } from '../../business-name/functions/validate-business-name'
import { validateTermsOfService } from '../../email-credentials/functions/validate-terms-of-service'
import { validateLogo } from '../../logo/functions/validate-logo'
import { UserObject } from '../types/user-object.interface'

type ValidateUserObjectParams = UserObject & {
  businessNameError: string
  logoError: string
  emailError: string
  passwordError: string
  setErrors(params: any): void
}

type ValidateInputs = {
  (params: ValidateUserObjectParams): (null | string)[]
}

export const validateInputs: ValidateInputs = params => {
  const {
    businessName,
    businessNameError,
    logo,
    logoError,
    email,
    emailError,
    password,
    passwordError,
    termsOfServiceConsent,
    setErrors,
  } = params

  return [
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
      value: email,
      errorMessage: emailError,
      setErrors,
    }),
    validatePassword({
      value: password,
      errorMessage: passwordError,
      setErrors,
    }),
    validateTermsOfService({
      value: termsOfServiceConsent,
      errorMessage: 'TODO',
      setErrors,
    }),
  ]
}
