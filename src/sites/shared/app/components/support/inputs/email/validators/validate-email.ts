import { EMAIL_ADDRESS_REGEX } from "../../../../user/components/new/components/form/constants/email-address-regex";

interface ValidateEmail {
  (params: { value: string; errorMessage: string; setErrors(errors: { email: string }): void }): 'email' | null
}

export const validateEmail: ValidateEmail = params => {
  const { value, errorMessage, setErrors } = params

  if (!EMAIL_ADDRESS_REGEX.test(value)) {
    setErrors({ email: errorMessage })

    return 'email'
  }

  return null
}
