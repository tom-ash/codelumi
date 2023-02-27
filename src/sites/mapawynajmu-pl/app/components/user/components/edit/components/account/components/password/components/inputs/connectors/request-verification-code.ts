import API_URL from '../../../../../../../../../../../../shared/constants/urls/api'
import { InputsSteps } from '../inputs'
import setVerificationToken from '../../../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'

const REQUEST_VERIFICATION_URL = `${API_URL}/user/update/password/verification`

interface RequestVerificationCode {
  (props: {
    email: string
    lang: Lang
    setConnecting(newConnecting: boolean): void
    setStep(newStep: InputsSteps): void
  }): void
}

export const requestVerificationCode: RequestVerificationCode = props => {
  const { email, lang, setConnecting, setStep } = props

  setConnecting(true)

  fetch(REQUEST_VERIFICATION_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  })
  .then(
    response => {
      if (response.ok) {
        return response.json()
      }

      throw new Error('Unknown server error.')
    },
    networkError => console.dir(networkError.message)
  )
  .then(verificationToken => {
    setVerificationToken(verificationToken)
    setConnecting(false)
    setStep(InputsSteps.VERIFICATION_CODE_INPUT)
  })
}
