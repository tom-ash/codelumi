import { HTTPS_URL_REGEX } from '../../../../../../../../../../../shared/shared/constants/https-url-regex'

interface ValidateLink {
  (params: { value?: string; errorMessage: string; setErrors(params: object): void }): 'link-input' | null
}

export const validateLink: ValidateLink = params => {
  const { value, errorMessage, setErrors } = params

  if (value !== 'https://' && !value?.match(HTTPS_URL_REGEX)) {
    setErrors({ link: errorMessage })

    return 'link-input'
  }

  return null
}
