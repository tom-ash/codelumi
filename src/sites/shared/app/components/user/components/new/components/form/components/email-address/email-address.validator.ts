import { EMAIL_ADDRESS_REGEX } from "../../constants/email-address-regex";

interface EmailAddressValidator {
  (props: {
    emailAddress: string;
    setErrors(props: { emailAddress: boolean }): void
  }): boolean
}

export const emailAddressValidator: EmailAddressValidator = props => {
  const { emailAddress, setErrors } = props

  if (!EMAIL_ADDRESS_REGEX.test(emailAddress)) {
    setErrors({ emailAddress: true })
    return false
  }

  return true
}
