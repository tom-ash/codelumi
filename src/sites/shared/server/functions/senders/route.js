import fetch from 'node-fetch'
import indexRenderer from '../renderers/index'
import exceptionSender from './exception'
import initialAppState from '../../../app/constants/initial-app-state'
import * as Sentry from '@sentry/node'

// 'Lang': TODO Get lang from request,

function routeSender({
  res,
  apiUrl,
  url,
  query,
  device,
  accessToken,
  appRenderer,
  clientUrl,
  gtmId,
  deviceFromHeader,
  langFromHeader,
}) {
  let status

  fetch(`${apiUrl}/sync${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Type: 'ssr',
      'Route-Url': url,
      'Access-Token': accessToken,
      Device: deviceFromHeader,
      'Device-Lang': langFromHeader,
    },
  })
    .then(response => {
      status = response.status

      if (response.ok || status === 301 || status === 302 || status === 404) return response.json()

      throw new Error(`Url "${url}" not found or gone.`)
    })
    .then(jsonResponse => {
      const { state, meta } = jsonResponse
      const { redirectedUrl, status: redirectStatus, lang, alternateLangLinks } = meta

      if (redirectedUrl) {
        res.redirect(redirectStatus, redirectedUrl)
      } else {
        const app = { ...initialAppState, lang, device }
        const visitor = {}
        const initialState = {
          ...state,
          app,
          visitor,
        }
        const appAsHtml = appRenderer(initialState)
        const html = indexRenderer({ ...meta, ...appAsHtml, lang, clientUrl, gtmId, alternateLangLinks })

        res.status(status).send(html)
      }
    })
    .catch(exception => {
      const robots = 'noindex,nofollow'

      console.warn({ exception, url })
      Sentry.captureException(exception)

      exceptionSender({
        exception,
        res,
        url,
        device,
        appRenderer,
        robots,
        clientUrl,
        gtmId,
      })
    })
}

export default routeSender
