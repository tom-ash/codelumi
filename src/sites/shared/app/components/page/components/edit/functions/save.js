import getAccessToken from '../../../../../../app/functions/tokens/getters/get-tokens.js'

export function save() {
  const body = JSON.parse(this.props.body)
  const meta = JSON.parse(this.props.meta)
  const { clientUrl, apiUrl } = this.props

  fetch(apiUrl + '/pages', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: JSON.stringify({ ...this.props, body, meta })
  })
  .then(response => {
    if (response.status == 200) {
      const { url, changeRoute } = this.props
      const href = `${clientUrl}/${url}`

      changeRoute({ href })
    }
  })
}
