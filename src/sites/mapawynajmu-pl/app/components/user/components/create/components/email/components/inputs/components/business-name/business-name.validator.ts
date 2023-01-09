import { Dispatch } from 'redux'

const BUSINESS_NAME_INPUT_ERROR = {
  pl: 'Nieprawidłowa nazwa firmy.',
  en: 'Invalid business name.',
}

interface BusinessNameValidator {
  (props: { value: string; dispatch: Dispatch }): boolean
}

export const businessNameValidator: BusinessNameValidator = props => {
  const { value, dispatch } = props

  console.log(props)

  if (value.length === 0) {
    dispatch({ type: 'user/create/errors', value: { businessName: BUSINESS_NAME_INPUT_ERROR } })
    return false
  }

  return true
}
