import { sendResponse } from '../send-response/send-response'
import { sendAnnouncementsMapResponse } from '../send-response/send-announcements-map-response'
import { sendAnnouncementsListResponse } from '../send-response/send-announcements-list-response'
import { sendAnnouncementResponse } from '../send-response/send-announcement-response'
import { routes } from '../../shared/routes/routes'

export function handleRequest(req, res) {
  const pureUrl = purifyUrl(req.originalUrl)

  const {
    initialState,
    title,
    sender
  } = getRouteData(pureUrl)

  if (!sender) return res.status(404).send('404')
  else if (sender === 'map') return sendAnnouncementsMapResponse({ res, initialState, title, url: pureUrl })
  else if (sender === 'list') return sendAnnouncementsListResponse({ res, initialState, title, url: pureUrl })
  else if (sender === 'announcement') return sendAnnouncementResponse({ res, initialState, announcementId: pureUrl })

  sendResponse({
    res,
    initialState,
    title,
    url: pureUrl
  })
}

function purifyUrl(dirtyUrl) {
  let pureUrl = dirtyUrl

  if (pureUrl[0] === '/') pureUrl = pureUrl.slice(1)
  if (pureUrl.indexOf('?') !== -1) pureUrl = pureUrl.substring(0, pureUrl.indexOf('?'))
  if (pureUrl.slice(-1) === '/') pureUrl = pureUrl.slice(0, -1)

  return pureUrl
}

function getRouteData(url) {
  let initialState
  let title
  let sender

  Object.keys(routes).some(routeKey => {
    if (url.match(routes[routeKey].pl.regEx)) {
      initialState = {
        route: {
          [routeKey]: true,
          language: 'pl',
          ...routes[routeKey].needsBackground && { showAnnouncementIndexMap: true }
        }
      }

      title = routes[routeKey].pl.title
      sender = routes[routeKey].sender
      return true
    } else if (url.match(routes[routeKey].en.regEx)) {
      initialState = {
        route: {
          [routeKey]: true,
          language: 'en',
          ...routes[routeKey].needsBackground && { showAnnouncementIndexMap: true }
        }
      }

      title = routes[routeKey].en.title
      sender = routes[routeKey].sender
      return true
    }
  })

  return {
    initialState,
    title,
    sender
  }
}
