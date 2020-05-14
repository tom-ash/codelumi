import { sendResponse } from '../send-response/send-response'
import { sendAnnouncementsMapResponse } from '../send-response/send-announcements-map-response'
import { sendAnnouncementsListResponse } from '../send-response/send-announcements-list-response'
import { sendAnnouncementResponse } from '../send-response/send-announcement-response'
import { routes } from '../../shared/routes/routes'
import { appState } from '../../app/constants/app-state'

export function handleRequest(req, res) {
  const pureUrl = purifyUrl(req.originalUrl)

  const {
    initialState,
    title,
    description,
    sender,
    noIndex
  } = getRouteData(pureUrl)

  if (!sender) return res.status(404).send('404')
  else if (sender === 'map') return sendAnnouncementsMapResponse({ res, initialState, title, description, url: pureUrl })
  else if (sender === 'list') return sendAnnouncementsListResponse({ res, initialState, title, description, url: pureUrl })
  else if (sender === 'announcement') return sendAnnouncementResponse({ res, initialState, announcementId: pureUrl })
  // else if (sender === 'blog') return sendBlogResponse({ res, pureUrl })

  sendResponse({
    res,
    initialState,
    title,
    description,
    url: pureUrl,
    noIndex
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
  let description
  let sender
  let noIndex

  Object.keys(routes).some(routeKey => {
    if (url.match(routes[routeKey].pl.regEx)) {
      initialState = {
        app: {
          ...appState,
          [routeKey]: true,
          ...routes[routeKey].needsAnnouncementIndexMap && { showAnnouncementIndexMap: true },
          language: 'pl'
        }
      }

      title = routes[routeKey].pl.title
      description = routes[routeKey].pl.description
      sender = routes[routeKey].sender
      noIndex = routes[routeKey].noIndex
      return true
    } else if (url.match(routes[routeKey].en.regEx)) {
      initialState = {
        app: {
          ...appState,
          [routeKey]: true,
          ...routes[routeKey].needsAnnouncementIndexMap && { showAnnouncementIndexMap: true },
          language: 'en'
        }
      }

      title = routes[routeKey].en.title
      description = routes[routeKey].en.description
      sender = routes[routeKey].sender
      noIndex = routes[routeKey].noIndex
      return true
    }
  })

  return {
    initialState,
    title,
    description,
    sender,
    noIndex
  }
}
