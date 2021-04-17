import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'
import { UPDATE_API_ROUTE } from '../constants/api_route_data.js'

export function save() {
  const body = JSON.parse(this.props.body)
  const style = JSON.parse(this.props.style)
  const meta = JSON.parse(this.props.meta)
  const { clientUrl, apiUrl } = this.props
  const { method, route } = UPDATE_API_ROUTE
  const requestBody = JSON.stringify({ ...this.props, body, style, meta })


  fetch(`${apiUrl}/${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: requestBody
  })
  .then(response => {
    if (response.status == 200) {
      const { url, changeRoute } = this.props
      const href = `${clientUrl}/${url}`

      changeRoute({ href })
    }
  })
}
