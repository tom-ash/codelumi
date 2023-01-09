import { Dispatch } from 'redux'
import { EMAIL_ADDRESS_REGEX } from '../../../../../../../../../../constants/email-address-regex'

const EMAIL_ADDRESS_INPUT_ERROR = {
  pl: 'Nieprawidłowy adres email.',
  en: 'Invalid email address.',
}

interface EmailAddressValidator {
  (props: { emailAddress: string; dispatch: Dispatch }): boolean
}

export const emailAddressValidator: EmailAddressValidator = props => {
  const { emailAddress, dispatch } = props

  if (!EMAIL_ADDRESS_REGEX.test(emailAddress)) {
    dispatch({ type: 'user/create/errors', value: { emailAddress: EMAIL_ADDRESS_INPUT_ERROR } })
    return false
  }

  return true
}
