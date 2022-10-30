import API_URL from '../../../../../../../../../../shared/constants/urls/api.js'
import { CREATE_API_ROUTE } from '../constants/api-routes.js'
import setConfirmationTokenCookie from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token.js'
import { buildUrl } from '../../../../../../../../../../shared/functions/builders/url'

function createUser(userObject) {
  const { lang, changeControl } = this.props

  fetch(API_URL + CREATE_API_ROUTE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify(userObject),
  })
    .then(
      response => {
        if (response.status == 201) return response.json()

        throw new Error('Something went wrong.')
      },
      networkError => console.dir(networkError.message)
    )
    .then(jsonResponse => {
      const { changeRoute } = this.context
      const { confirmationToken, path } = jsonResponse

      setConfirmationTokenCookie(confirmationToken)
      changeRoute({ href: buildUrl({ path }) })
      return changeControl({ connecting: false })
    })
    .catch(e => console.dir(e))
}

export default createUser
