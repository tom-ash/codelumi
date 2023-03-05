import { businessNameValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/business-name/business-name.validator'
import { emailAddressValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/email-address/email-address.validator'
import { passwordValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/password/password.validator'
import { phoneNumberValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/phone-number/phone-number.validator'
import { termsOfServiceConsentValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/terms-of-service-consent/terms-of-service-consent.validator'

// @ts-ignore
export function validateUserObject(userObject) {
  // @ts-ignore
  const { dispatch } = this.props
  const { businessName, emailAddress, password, phoneNumber, termsOfServiceConsent } = userObject

  // @ts-ignore
  const setErrors = (value) => dispatch({ type: 'errors', value })

  const validationArray = [
    emailAddressValidator({ emailAddress, setErrors }),
    passwordValidator({ password, setErrors }),
    phoneNumberValidator({ phoneNumber, setErrors }),
    termsOfServiceConsentValidator({ termsOfServiceConsent, setErrors }),
  ]

  if (userObject.accountType === 'business') {
    validationArray.concat([businessNameValidator({ businessName, setErrors })])
  }

  return validationArray.every(element => element)
}
