import { Dispatch } from 'redux'
import { PASSWORD_REGEX } from '../../../../../../../../../../constants/password.regex'

const PASSWORD_INPUT_ERROR = {
  pl: 'Hasło powinno się składać z conajmniej 6 znaków.',
  en: 'The password has to consist at least six characters.',
}

interface PasswordValidator {
  (props: { password: string; dispatch: Dispatch }): boolean
}

export const passwordValidator: PasswordValidator = props => {
  const { password, dispatch } = props

  if (!PASSWORD_REGEX.test(password)) {
    dispatch({ type: 'errors', value: { password: PASSWORD_INPUT_ERROR } })
    return false
  }

  return true
}
