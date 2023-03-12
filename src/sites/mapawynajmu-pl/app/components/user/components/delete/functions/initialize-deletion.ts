import API_URL from '../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import setVerificationToken from '../../../../../../../shared/app/functions/cookies/setters/confirmation-token'

interface InitializeDeletion {
  (args: {
    lang: Lang,
    email: string,
    setControl: any // TODO: TS!
  }): void
}

export const initializeDeletion:InitializeDeletion = (args) => {
  const {
    lang,
    email,
    setControl,
  } = args

  setControl({ connecting: true })

  fetch(API_URL + '/user/delete/verification', {
    method: 'PUT',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      'Lang': lang,
    },
    body: JSON.stringify({ email }),
  })
  .then(
    response => {
      if (response.ok) return response.json()

      throw new Error('Unknown server error.')
    },
    networkError => console.dir(networkError.message)
  )
  .then(verificationToken => {
    setVerificationToken(verificationToken)
    setControl({ connecting: false })
  })
  .catch(e => console.dir(e))
}
