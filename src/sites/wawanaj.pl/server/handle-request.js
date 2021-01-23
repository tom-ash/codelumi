import { getPureUrl } from '../shared/functions/getters/get-pure-url'
import { getDevice } from '../shared/functions/getters/get-device'
import { getRoute } from '../shared/functions/getters/get-route'
import { getVisitorState } from './get-visitor-state'
import { sendRouteResponse } from './send-response/route'
import { sendPageResponse } from './send-response/page'

export function handleRequest(req, res) {
  const {
    cookies,
    originalUrl,
    headers
  } = req
  const url = getPureUrl(originalUrl)
  const route = getRoute(url)
  const device = getDevice(headers['user-agent'])
  const visitorState = getVisitorState(cookies)

  if (route) return sendRouteResponse({ res, route, url, device, visitorState })

  sendPageResponse({ res, url, device, visitorState })
}
