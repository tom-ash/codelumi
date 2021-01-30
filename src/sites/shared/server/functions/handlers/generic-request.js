import getPureUrl from '../../../shared/functions/getters/pure-url.js'
import getRouteByUrl from '../../../shared/functions/getters/route-by-url.js'
import getDevice from '../../../shared/functions/getters/device.js'
import getVisitorState from '../../../shared/functions/getters/visitor-state.js'

function genericRequestHandler({
  req, res,
  appState, renderState, tracks,
  appRenderer
}) {
  const { cookies, originalUrl, headers } = req
  const url = getPureUrl(originalUrl)
  const route = getRouteByUrl({ url, routes })
  const device = getDevice(headers['user-agent'])
  const visitorState = getVisitorState(cookies)

  if (route) return (
    routeSender({
      res,
      route, url, device,
      appState, renderState, tracks, visitorState,
      appRenderer
    })
  )

  pageSender({
    res,
    url, device,
    appState, renderState, tracks, visitorState,
    appRenderer
  })
}

export default genericRequestHandler
