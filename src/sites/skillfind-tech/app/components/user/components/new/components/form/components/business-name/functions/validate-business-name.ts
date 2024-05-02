interface ValidateBusinessName {
  (params: {
    value: string
    errorMessage: string
    setErrors(errors: { businessName: string }): void
  }): 'business-name-input' | null
}

export const validateBusinessName: ValidateBusinessName = params => {
  const { value, errorMessage, setErrors } = params

  if (!value) {
    setErrors({ businessName: errorMessage })

    return 'business-name-input'
  }

  return null
}
