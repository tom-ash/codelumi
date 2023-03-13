import { businessNameValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/business-name/business-name.validator'
import { emailAddressValidator } from '../../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.validator'
import { passwordValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'
import { phoneNumberValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/phone-number/phone-number.validator'
import { termsOfServiceConsentValidator } from '../../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent.validator'
import { AccountType } from '../../../../../../../types/user.types'
import { UserObject } from '../form.types'

interface ValidateUserObject {
  (args: { userObject: UserObject; setErrors(args: object): void }): boolean
}

export const validateUserObject: ValidateUserObject = args => {
  const { userObject, setErrors } = args
  const { accountType, businessName, emailAddress, password, phoneNumber, termsOfServiceConsent } = userObject

  const validationArray = [
    emailAddressValidator({ emailAddress, setErrors }),
    passwordValidator({ password, setErrors }),
    phoneNumberValidator({ phoneNumber, setErrors }),
    termsOfServiceConsentValidator({ termsOfServiceConsent, setErrors }),
  ]

  if (accountType === AccountType.BUSINESS) {
    // @ts-ignore
    validationArray.concat([businessNameValidator({ businessName, setErrors })])
  }

  return validationArray.every(element => element)
}
