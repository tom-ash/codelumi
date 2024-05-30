interface ValidateFirstName {
  (params: { value: string; errorMessage: string; setErrors(errors: { firstName: string }): void }): 'first-name' | null
}

export const validateFirstName: ValidateFirstName = params => {
  const { value, errorMessage, setErrors } = params

  if (!value) {
    setErrors({ firstName: errorMessage })

    return 'first-name'
  }

  return null
}
