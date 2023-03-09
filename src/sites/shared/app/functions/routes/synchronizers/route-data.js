import { getAccessToken } from "../../../../../mapawynajmu-pl/app/components/user/components/auth/functions/get-access-token"

function syncRouteData({ apiUrl, url, query, isSSR, customHeaders }) {
  const { setApp } = this.props

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
