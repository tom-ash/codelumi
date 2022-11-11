import API_URL from '../../../../../../../../../../../../shared/constants/urls/api'
import { validateVerificationCode } from '../validators/validate-verification-code'
import { InputsSteps } from '../inputs'

const CONFIRM_VERIFICATION_CODE_URL = `${API_URL}/user/update/password/verify`

interface ConfirmVerificationCode {
  (props: {
    email: string
    connecting: boolean
    verificationCode: string
    changeConnecting(newConnecting: boolean): void
    changeStep(newStep: string): void
    changeError: ChangeError
  }): void
}

export const confirmVerificationCode: ConfirmVerificationCode = props => {
  const {
    email,
    connecting,
    verificationCode,
    changeConnecting,
    changeStep,
    changeError,
  } = props

  if (connecting || !validateVerificationCode({ value: verificationCode, changeError })) return

  changeConnecting(true)

  fetch(CONFIRM_VERIFICATION_CODE_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verificationCode }),
  })
    .then(response => {
      if (response.ok) {
        changeConnecting(false)
        changeStep(InputsSteps.PASSWORD_INPUT)
      } else {
        changeError({ pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' })
      }
    })
}
