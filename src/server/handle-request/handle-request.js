import { getSimpleRouteData } from '../state-getters/get-simple-route-data'
import { sendResponse } from '../send-response/send-response'
import { sendAnnouncementsListResponse } from '../send-response/send-announcements-list-response'
import { sendAnnouncementResponse } from '../send-response/send-announcement-response'

export function handleRequest(req, res) {
  if (req.originalUrl === '/lista') return sendAnnouncementsListResponse(res, 'pl')
  else if (req.originalUrl === '/list') return sendAnnouncementsListResponse(res, 'en')
  else if (req.originalUrl.match(/^\/\d+$/)) return sendAnnouncementResponse(res, req.originalUrl.slice(1), 'pl')
  // CHECK LANGUAGE

  sendResponse(res, getSimpleRouteData(req.originalUrl))
}
