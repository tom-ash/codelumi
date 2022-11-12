import API_URL from '../../../../../../../../../../../../shared/constants/urls/api'
import { InputsSteps } from '../inputs'

const REQUEST_VERIFICATION_URL = `${API_URL}/user/update/password/verification`

interface RequestVerificationCode {
  (props: {
    email: string
    lang: Lang
    changeConnecting(newConnecting: boolean): void
    changeStep(newStep: InputsSteps): void
  }): void
}

export const requestVerificationCode: RequestVerificationCode = props => {
  const {
    email,
    lang,
    changeConnecting,
    changeStep
  } = props

  changeConnecting(true)

  fetch(REQUEST_VERIFICATION_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  }).then(response => {
    if (response.ok) {
      changeConnecting(false)
      changeStep(InputsSteps.VERIFICATION_CODE_INPUT)
    } else {
      throw new Error('ServerError')
    }
  })
}
