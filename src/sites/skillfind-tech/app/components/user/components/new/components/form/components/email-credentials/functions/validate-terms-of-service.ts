interface ValidateTermsOfService {
  (params: {
    value: boolean
    errorMessage: string
    setErrors(errors: { termsOfServiceConsent: string }): void
  }): 'terms-of-service' | null
}

export const validateTermsOfService: ValidateTermsOfService = params => {
  const { value, errorMessage, setErrors } = params

  if (!value) {
    setErrors({ termsOfServiceConsent: errorMessage })

    return 'terms-of-service'
  }

  return null
}
