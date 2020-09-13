import { sendResponse } from '../send-response/send-response'
import { sendAnnouncementsMapResponse } from '../send-response/send-announcements-map-response'
import { sendAnnouncementsListResponse } from '../send-response/send-announcements-list-response'
import { sendAnnouncementResponse } from '../send-response/send-announcement-response'
import { sendAnnouncementCreateResponse } from '../send-response/announcement-create'
import { routes } from '../../shared/routes/routes'
import { appState } from '../../app/constants/app-state'

export function handleRequest(req, res) {
  const pureUrl = purifyUrl(req.originalUrl)
  const userAgent = req.headers['user-agent']

  function getBoolCookieValue(cookieValue) {
    switch(cookieValue) {
      case 'true': return true
      case 'false': return false
      default: return null
    }
  }

  function getParsedCookieValue(cookieValue) {
    if (cookieValue === undefined) return null

    return getBoolCookieValue(cookieValue)
  }

  const visitorState = {
    visitor: {
      legal: {
        privacy: {
          settings: {
            marketingConsent: getParsedCookieValue(req.cookies._pdpsm),
            statisticsConsent: getParsedCookieValue(req.cookies._pdpaf)
          }
        }
      }
    }
  }

  const {
    initialState,
    title,
    description,
    sender,
    noIndex
  } = getRouteData(pureUrl, userAgent, visitorState)


  if (!sender) return (
    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          showNotFound: true,
          language: 'pl',
          device: getDevice(userAgent)
        },
        ...visitorState
      },
      title: '404',
      description: '404',
      url: pureUrl,
      noIndex: true,
      status: 404
    })
  )
  else if (sender === 'map') return sendAnnouncementsMapResponse({ res, initialState, title, description, url: pureUrl })
  else if (sender === 'list') return sendAnnouncementsListResponse({ res, initialState, title, description, url: pureUrl })
  else if (sender === 'announcement') return sendAnnouncementResponse({ res, initialState, announcementId: +pureUrl.match(/\d+/)[0] })
  else if (sender === 'announcementCreate') return sendAnnouncementCreateResponse({ res, initialState, title, description, url: pureUrl })  

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

function getRouteData(url, userAgent, visitorState) {
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
          language: 'pl',
          device: getDevice(userAgent),
        },
        ...visitorState
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
          language: 'en',
          device: getDevice(userAgent)
        },
        ...visitorState
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

function getDevice(userAgent) {
  if (/Android|BlackBerry|IEMobile|Opera Mini|iPad|iPhone|iPod|webOS/i.test(userAgent)) {
    return 'largePhone'
  }

  return 'largePc'
}
