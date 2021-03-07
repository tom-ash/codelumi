import { getAccessToken } from '../../tokens/getters/get-tokens.js'

function syncRouteData({ apiUrl, url, route, requestType }) {
  const { changeApp } = this.props
  const { track, lang, pageName } = route
  const pageNameHeader = pageName ? { 'Page-Name': pageName } : {}

  changeApp({ urlDataSynced: false })

  return fetch(apiUrl + `/route_data`, {
    headers: {
      'Content-Type': 'application/json',
      'Type': requestType,
      'Access-Token': getAccessToken(),
      'Route-Url': url,
      'Track': track,
      'Lang': lang,
      ...pageNameHeader
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
}

export default syncRouteData
