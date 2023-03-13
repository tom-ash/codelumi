interface PhoneNumberValidator {
  (props: { phoneNumber: string; setErrors(props: { phoneNumber: boolean }): void }): boolean
}

export const phoneNumberValidator: PhoneNumberValidator = props => {
  const { phoneNumber, setErrors } = props
  if (phoneNumber.length !== 9) {
    setErrors({ phoneNumber: true })
    return false
  }

  return true
}
