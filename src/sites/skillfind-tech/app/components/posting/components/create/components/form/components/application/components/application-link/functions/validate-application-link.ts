interface ValidateApplicationLink {
  (params: { value: string; errorMessage: string; setErrors(params: object): void }): boolean;
}

export const validateApplicationLink: ValidateApplicationLink = params => {
  const { value, errorMessage, setErrors } = params

  if (value) {
    return true
  }

  setErrors({ applicationLink: errorMessage })

  return false
}
