import { getSimpleRouteData } from '../state-getters/get-simple-route-data'
import { sendResponse } from '../send-response/send-response'
import { sendAnnouncementsListResponse } from '../send-response/send-announcements-list-response'
import { sendAnnouncementResponse } from '../send-response/send-announcement-response'

export function handleRequest(req, res) {
  // const language = getLanguage(req.headers["accept-language"])
  let originalUrl = req.originalUrl

  if (originalUrl.indexOf('?') !== -1) originalUrl = originalUrl.substring(0, originalUrl.indexOf('?'))
  if (originalUrl.slice(-1) === '/') originalUrl = originalUrl.slice(0, -1)

  if (originalUrl === '' || originalUrl === '/') return sendResponse(res, getSimpleRouteData('root'))
  else if (originalUrl === '/lista') return sendAnnouncementsListResponse(res, 'pl')
  else if (originalUrl === '/list') return sendAnnouncementsListResponse(res, 'en')
  else if (originalUrl.match(/^\/\d+$/)) return sendAnnouncementResponse(res, req.originalUrl.slice(1), 'pl')
  else if (getSimpleRouteData(originalUrl) === 404) return res.status(404).send('404')

  sendResponse(res, getSimpleRouteData(originalUrl))
}

function getLanguage(acceptedLanguages) {
  const plIndex = acceptedLanguages.indexOf('pl')
  const enIndex = acceptedLanguages.indexOf('en')

  if (plIndex === -1 || enIndex < plIndex) return 'en'

  return 'pl'
}