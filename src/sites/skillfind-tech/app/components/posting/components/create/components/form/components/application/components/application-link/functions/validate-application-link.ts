import { HTTPS_URL_REGEX } from '../../../../../../../../../../../../../shared/shared/constants/https-url-regex'

interface ValidateApplicationLink {
  (params: { value: string; errorMessage: string; setErrors(params: object): void }): boolean
}

export const validateApplicationLink: ValidateApplicationLink = params => {
  const { value, errorMessage, setErrors } = params

  if (value && value.match(HTTPS_URL_REGEX)) {
    return true
  }

  setErrors({ applicationLink: errorMessage })

  return false
}
