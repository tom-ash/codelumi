import { Picture } from "../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface";

interface ValidateLogo {
  (params: {
    value: Picture | null;
    errorMessage: string;
    setErrors(errors: { logo: string }): void;
  }): 'logo' | null;
}

export const validateLogo: ValidateLogo = (params) => {
  const {
    value,
    errorMessage,
    setErrors,
  } = params

  if (!value) {
    setErrors({ logo: errorMessage })

    return 'logo'
  }

  return null
}
