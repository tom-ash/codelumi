import API_URL from '../../../../../../../../../../../../shared/constants/urls/api'
import { validateVerificationCode } from '../../../../../../../../../common/validators/validate-verification-code'
import { InputsSteps } from '../inputs'

const CONFIRM_VERIFICATION_CODE_URL = `${API_URL}/user/update/password/verify`

interface ConfirmVerificationCode {
  (props: {
    email: string
    connecting: boolean
    verificationCode: string
    setConnecting(newConnecting: boolean): void
    setStep(newStep: InputsSteps): void
    changeError: ChangeError
  }): void
}

export const confirmVerificationCode: ConfirmVerificationCode = props => {
  const { email, connecting, verificationCode, setConnecting, setStep, changeError } = props

  if (connecting || !validateVerificationCode({ value: verificationCode, changeError })) return

  setConnecting(true)

  const body = JSON.stringify({
    email,
    verificationCode,
  })

  fetch(CONFIRM_VERIFICATION_CODE_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
    .then(response => {
      if (response.ok) {
        setStep(InputsSteps.PASSWORD_INPUT)
      } else {
        changeError({ pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' })
      }
    })
    .finally(() => setConnecting(false))
}
