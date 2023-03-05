import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import setVerificationToken from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
import { buildUrl } from '../../../../../../../../../../shared/functions/builders/url'

// @ts-ignore
export function postUserObject(userObject) {
  // @ts-ignore
  const { lang, setControl } = this.props

  fetch(API_URL + '/user/create/email-and-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ ...userObject }),
  })
  .then(
    response => {
      if (response.status == 201) return response.json()

      throw new Error('Something went wrong.')
    },
    networkError => console.dir(networkError.message)
  )
  .then(jsonResponse => {
    // @ts-ignore
    const { changeRoute } = this.context
    const { verificationToken, path } = jsonResponse

    setVerificationToken(verificationToken)
    changeRoute({ href: buildUrl({ path }) })
  })
  .catch(e => console.dir(e))
}
