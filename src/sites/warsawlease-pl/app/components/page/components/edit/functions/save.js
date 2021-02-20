import { getAccessToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function save() {
  const body = JSON.parse(this.props.body)
  const meta = JSON.parse(this.props.meta)

  fetch(API_URL + '/posts', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: JSON.stringify({ ...this.props, body, meta })
  })
  .then(response => {
    if (response.status == 200) {
      const { url, changeUrl } = this.props
      const href = `${CLIENT_URL}/${url}`

      changeUrl({ href })
    }
  })
}
