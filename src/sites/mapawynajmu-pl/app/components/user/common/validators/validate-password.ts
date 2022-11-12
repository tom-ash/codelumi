import { EMPTY_LANG_OBJECT } from '../../../../constants/lang-objects/empty'

export interface ValidatePassword {
  (props: { password: string; setPasswordError(props: LangObject): void }): boolean
}

const PASSWORD_ERROR_LANG_OBJECT = {
  pl: 'Hasło powinno składać się z przynajmniej 6 znaków.',
  en: 'The password should consist of at least 6 characters.',
}

export const validatePassword: ValidatePassword = props => {
  const { password, setPasswordError } = props

  if (password.length === 6) {
    setPasswordError(EMPTY_LANG_OBJECT)
    return true
  }

  setPasswordError(PASSWORD_ERROR_LANG_OBJECT)
  return false
}
