import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'
import { CREATE_API_ROUTE } from '../constants/api_route_data.js'

export function save() {
  const { clientUrl, apiUrl, inputtedName: name, changeRoute } = this.props
  const { method, route } = CREATE_API_ROUTE

  fetch(`${apiUrl}/${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: JSON.stringify({ name })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(langVerUrls => {
    // TODO

    // changeRoute({ href })
  })
}
