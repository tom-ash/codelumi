import { Dispatch } from 'redux'

const PHONE_NUMBER_INPUT_ERROR = {
  pl: 'Nieprawidłowy numer telefonu.',
  en: 'Invalid phone number.',
}

interface PhoneNumberValidator {
  (props: { phoneNumber: string; dispatch: Dispatch }): boolean
}

export const phoneNumberValidator: PhoneNumberValidator = props => {
  const { phoneNumber, dispatch } = props

  if (phoneNumber.length !== 9) {
    dispatch({ type: 'user/create/errors', value: { phoneNumber: PHONE_NUMBER_INPUT_ERROR } })
    return false
  }

  return true
}
