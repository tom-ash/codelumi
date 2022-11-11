import API_URL from '../../../../../../../../../../../../shared/constants/urls/api'

const REQUEST_VERIFICATION_URL = `${API_URL}/user/update/password/verification`

interface RequestVerification {
  (props: {
    email: string
    lang: Lang
    changeConnecting(newConnecting: boolean): void
    changeStep(newStep: string): void
  }): void
}

export const requestVerification: RequestVerification = props => {
  const { email, lang, changeConnecting, changeStep } = props

  changeConnecting(true)

  fetch(REQUEST_VERIFICATION_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  }).then(response => {
    if (response.ok) {
      changeConnecting(false)
      changeStep('verification-code-input')
    } else {
      throw new Error('ServerError')
    }
  })
}
