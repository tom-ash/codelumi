import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../../constants/lang-objects/empty'
import { VERIFICATION_CODE_ERROR_LANG_OBJECT } from '../../../../../../../../../../../constants/lang-objects/verification-code-error'
import { ValidateVerificationCode } from '../../../../../../../../../../../app.d'

export const validateVerificationCode: ValidateVerificationCode = props => {
  const { value, changeError } = props

  if (value.length === 4) return changeError(EMPTY_LANG_OBJECT)

  changeError(VERIFICATION_CODE_ERROR_LANG_OBJECT)
}
