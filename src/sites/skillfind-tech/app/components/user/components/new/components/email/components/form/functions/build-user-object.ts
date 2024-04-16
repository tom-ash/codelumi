import { UserObject } from '../form.types'
import { validateUserObject } from './validate-user-object'
import { hashPassword } from '../../../../../../../../../../../shared/app/components/user/functions/hash-password'
import { termsOfServiceConsentParser } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.parser'
import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'
import scrollToElement from '../../../../../../../../../../../shared/app/functions/screen/scrollers/to-element'
import { validateBusinessName } from '../../../../business-name/functions/validate-business-name'
import { validateLogo } from '../../../../logo/functions/validate-logo'

interface BuildUserObject {
  (args: {
    businessName: string;
    businessNameError: string;
    industry: string;
    logo: Picture;
    emailAddress: string
    password: string
    termsOfServiceConsent: boolean
    termsOfServiceConsentLabel: string
    setErrors(args: object): void
  }): UserObject | undefined
}

export const buildUserObject: BuildUserObject = args => {
  const {
    businessName,
    businessNameError,
    industry,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    logo,
    setErrors
  } = args

  let userObject: UserObject = {
    businessName,
    industry,
    emailAddress,
    password,
    termsOfServiceConsent,
    consents: [],
    logo,
  }

  const validations = [
    validateBusinessName({
      value: businessName,
      errorMessage: businessNameError,
      setErrors,
    }),
    // TODO!,
    validateLogo({
      value: logo,
      errorMessage: 'TODO',
      setErrors,
    }),
  ]

  const userObjectInvalid = !validateUserObject({ userObject, setErrors })

  for(let i = 0; i < validations.length; i++) {
    const validation = validations[i]
    if (validation) {
      const element = document.getElementById(validation)
      // setControl({ connecting: false })
      scrollToElement(element, 12, -120)
      return
    }
  }

  if (userObjectInvalid) return

  userObject.password = hashPassword(userObject.password, userObject.emailAddress)
  userObject.consents = [termsOfServiceConsentParser(termsOfServiceConsentLabel)]

  return userObject
}
