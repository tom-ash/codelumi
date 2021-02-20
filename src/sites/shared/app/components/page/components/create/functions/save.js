import { getAccessToken } from '../../../../../functions/getters/get-tokens.js'

export function save() {
  const { name } = this.props

  fetch(API_URL + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: JSON.stringify({ name })
  })
  .then(response => {
    if (response.status == 201) return response.json()
  })
  .then(jsonRespone => {
    // TODO
  })
}
