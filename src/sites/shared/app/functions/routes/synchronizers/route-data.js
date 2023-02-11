import getAccessToken from '../../tokens/getters/get-tokens'

function syncRouteData({ apiUrl, url, query, isSSR, customHeaders }) {
  const { setApp } = this.props

  setApp({ routeSynced: false })

  return fetch(`${apiUrl}/sync${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Type: isSSR ? 'ssr' : 'csr',
      'Access-Token': getAccessToken(),
      'Route-Url': url,
      ...customHeaders,
    },
  }).then(response => {
    if (response.ok || response.status === 404) return response.json()

    throw new Error('Server Error')
  })
}

export default syncRouteData
