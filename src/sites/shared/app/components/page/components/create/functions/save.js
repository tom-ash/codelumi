import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'
import { CREATE_API_ROUTE } from '../constants/api_route_data.js'

export function save() {
  const { lang, apiUrl, inputtedName: name, changeRoute } = this.props
  const { method, route } = CREATE_API_ROUTE

  // TODO Add buildUrl?
  fetch(`${apiUrl}/${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      'Lang': lang
    },
    body: JSON.stringify({ name })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(href => changeRoute({ href }))
}
