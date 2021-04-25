import routeSender from '../senders/route.js'
import getPureUrl from '../../../shared/functions/routes/getters/pure-url.js'
import getRouteByUrl from '../../../shared/functions/routes/getters/route-by-url.js'
import getDevice from '../../../shared/functions/getters/device.js'
import getVisitorState from '../../../shared/functions/getters/visitor-state.js'

function genericRequestHandler({
  req, res,
  clientUrl, apiUrl,
  routes, routeRenders, tracks,
  appState, renderState,
  appRenderer
}) {
  const { cookies, originalUrl, headers } = req
  const { access_token: accessToken } = cookies
  const url = getPureUrl(originalUrl)
  const queryMatch = originalUrl.match(/\?.+$/)
  const query = queryMatch ? queryMatch[0] : ''
  const route = getRouteByUrl({ url, routes })
  const device = getDevice(headers['user-agent'])
  const visitorState = getVisitorState(cookies)

  routeSender({
    res,
    clientUrl, apiUrl,
    url, query, route, device, routeRenders, tracks,
    appState, renderState, visitorState,
    accessToken,
    appRenderer
  })
}

export default genericRequestHandler
