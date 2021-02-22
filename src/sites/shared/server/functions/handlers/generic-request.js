import routeSender from '../senders/route.js'
import getPureUrl from '../../../shared/functions/getters/pure-url.js'
import getRouteByUrl from '../../../shared/functions/getters/route-by-url.js'
import getDevice from '../../../shared/functions/getters/device.js'
import getVisitorState from '../../../shared/functions/getters/visitor-state.js'

function genericRequestHandler({
  req, res,
  apiUrl,
  routes, routeRenders, tracks,
  appState, renderState,
  appRenderer
}) {
  const { cookies, originalUrl, headers } = req
  const { access_token: accessToken } = cookies
  const url = getPureUrl(originalUrl)
  const route = getRouteByUrl({ url, routes })
  const device = getDevice(headers['user-agent'])
  const visitorState = getVisitorState(cookies)

  routeSender({
    res,
    apiUrl,
    route, url, device, routeRenders, tracks,
    appState, renderState, visitorState,
    accessToken,
    appRenderer
  })
}

export default genericRequestHandler
