import { sendRouteResponse } from '../send-response/route'
import { sendPageResponse } from '../send-response/page'
import { getPureUrl } from '../../shared/functions/getters/get-pure-url'
import { getDevice } from '../../shared/functions/getters/get-device'
import { getVisitorState } from './get-visitor-state'
import routes from '../../shared/constants/routes/routes'
import { appState } from '../../app/constants/app-state'

export function handleRequest(req, res) {
  const {
    cookies,
    originalUrl,
    headers
  } = req

  const url = getPureUrl(originalUrl)
  const device = getDevice(headers['user-agent'])
  const visitorState = getVisitorState(cookies)

  const route = routes.find(route => {
    const { url: routeUrl } = route

    if (typeof routeUrl === 'string') {
      return url === routeUrl
    } else {
      return url.match(routeUrl)
    }
  })

  if (route) {
    const {
      lang: language,
      title,
      description,
      keywords
    } = route

    const initialState = {
      app: {
        ...appState,
        language,
        device,
      },
      ...visitorState
    }
  
    sendRouteResponse({
      res,
      language,
      url,
      title,
      description,
      keywords,
      initialState
    })
  } else {
    sendPageResponse({
      res,
      device,
      url,
      visitorState
    })
  }
}
