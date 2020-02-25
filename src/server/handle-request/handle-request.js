import { getSimpleRouteData } from '../state-getters/get-simple-route-data'
import { sendResponse } from '../send-response/send-response'
import { sendAnnouncementsListResponse } from '../send-response/send-announcements-list-response'
import { sendAnnouncementResponse } from '../send-response/send-announcement-response'

export function handleRequest(req, res) {
  const language = getLanguage(req.headers["accept-language"])

  if (req.originalUrl === '/lista') return sendAnnouncementsListResponse(res, 'pl')
  else if (req.originalUrl === '/list') return sendAnnouncementsListResponse(res, 'en')
  else if (req.originalUrl.match(/^\/\d+$/)) return sendAnnouncementResponse(res, req.originalUrl.slice(1), language)

  sendResponse(res, getSimpleRouteData(req.originalUrl))
}

function getLanguage(acceptedLanguages) {
  const plIndex = acceptedLanguages.indexOf('pl')
  const enIndex = acceptedLanguages.indexOf('en')

  if (plIndex === -1 || enIndex < plIndex) return 'en'

  return 'pl'
}