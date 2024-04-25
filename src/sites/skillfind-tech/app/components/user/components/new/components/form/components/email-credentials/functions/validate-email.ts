interface ValidateEmail {
  (params: {
    value: string;
    errorMessage: string;
    setErrors(errors: { emailAddress: string }): void;
  }): 'email' | null;
}

export const validateEmail: ValidateEmail = (params) => {
  const {
    value,
    errorMessage,
    setErrors,
  } = params

  if (!value) {
    setErrors({ emailAddress: errorMessage })

    return 'email'
  }

  return null
}
