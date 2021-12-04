import getAccessToken from '../../tokens/getters/get-tokens.js'

function syncRouteData({ apiUrl, url, query, requestType }) {
  const { changeApp } = this.props

  changeApp({ routeSynced: false })

  return fetch(`${apiUrl}/sync${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Type': requestType,
      'Access-Token': getAccessToken(),
      'Route-Url': url
    }
  })
  .then(response => {
    if (response.ok || response.status === 404) return response.json()

    throw new Error('Server Error')
  })
}

export default syncRouteData
