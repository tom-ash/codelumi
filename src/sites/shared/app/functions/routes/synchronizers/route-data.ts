import { Dispatch } from 'redux'
import { getAccessToken } from '../../../components/user/components/auth/functions/get-access-token'

interface SyncRouteData {
  (args: {
    apiUrl: string
    url: string
    query: string
    isSSR: boolean
    customHeaders?: any // TODO
  }): Promise<any>
}

export const syncRouteData: SyncRouteData = args => {
  const { apiUrl, url, query, isSSR, customHeaders } = args

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
