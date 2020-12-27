import { sendResponse } from '../send-response/send-response'
import { sendPostCreateResponse } from '../send-response/post/create'
import { sendPostShowResponse } from '../send-response/post/show'
import { sendAnnouncementsMapResponse } from '../send-response/announcement/map'
import { sendAnnouncementsListResponse } from '../send-response/announcement/catalogue'
import { sendAnnouncementResponse } from '../send-response/announcement/show'
import { sendAnnouncementCreateResponse } from '../send-response/announcement/create'
import { routes } from '../../shared/routes/routes'
import { appState } from '../../app/constants/app-state'
import { sendSiteMapResponse } from '../send-response/send-site-map-response'

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

  if (pureUrl === 'add-page' || pureUrl === 'dodaj-strone') {
    return sendPostCreateResponse({ res, device: getDevice(userAgent), visitorState, url: pureUrl }) 
  }

  if (pureUrl === 'mapa-strony' || pureUrl === 'site-map') {
    return sendSiteMapResponse({ res, initialState, title, description, url: pureUrl })
  }

  if (!sender) return sendPostShowResponse({ res, device: getDevice(userAgent), visitorState, url: pureUrl })
  if (sender === 'map') return sendAnnouncementsMapResponse({ res, initialState, title, description, url: pureUrl })
  if (sender === 'list') return sendAnnouncementsListResponse({ res, initialState, title, description, url: pureUrl })
  if (sender === 'announcement') return sendAnnouncementResponse({ res, initialState, announcementId: +pureUrl.match(/\d+/)[0] })
  if (sender === 'announcementCreate') return sendAnnouncementCreateResponse({ res, initialState, title, description, url: pureUrl })

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
