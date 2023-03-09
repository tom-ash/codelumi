interface PasswordValidator {
  (props: {
    password: string;
    setErrors(args: { password: boolean }): void
  }): boolean
}

export const passwordValidator: PasswordValidator = props => {
  const { password, setErrors } = props

  if (!password.length) {
    setErrors({ password: true })
    return false
  }

  return true
}
