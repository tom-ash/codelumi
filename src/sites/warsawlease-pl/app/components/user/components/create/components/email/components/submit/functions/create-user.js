import API_URL from '../../../../../../../../../../shared/constants/urls/api.js'
import { CREATE_API_ROUTE } from '../constants/api-routes.js'
import setConfirmationTokenCookie from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token.js'

function createUser(userObject) {
  const { lang, changeControl } = this.props

  fetch(API_URL + CREATE_API_ROUTE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Lang': lang },
    body: JSON.stringify(userObject)
  })
  .then(response => {
    if (response.status == 201) return response.json()
    
    throw new Error('Something went wrong.')
  },
  networkError => console.dir(networkError.message))
  .then(jsonResponse => {
    const { changeRoute } = this.context
    const { confirmationToken } = jsonResponse

    // TODO CHANGE ROUTE
    const href = 'TODO'

    setConfirmationTokenCookie(confirmationToken)
    changeRoute({ href })
    return changeControl({ connecting: false })
  })
  .catch(e => console.dir(e))
}

export default createUser
