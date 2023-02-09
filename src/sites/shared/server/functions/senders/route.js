import fetch from 'node-fetch'
import indexRenderer from '../renderers/index'
import exceptionSender from './exception'
import initialStateParser from '../parsers/initial-state'
import initialAppState from '../../../app/constants/initial-app-state'

// 'Lang': TODO Get lang from request,

function routeSender({ res, apiUrl, url, query, device, accessToken, appRenderer, visitorState }) {
  fetch(`${apiUrl}/sync${query}`, {
    headers: {
      'Content-Type': 'application/json',
      Type: 'ssr',
      'Route-Url': url,
      'Access-Token': accessToken,
    },
  })
    .then(response => {
      if (response.ok || response.status === 301 || response.status === 302) return response.json()

      throw new Error('Page Not Found')
    })
    .then(jsonResponse => {
      const { state, meta } = jsonResponse
      const { redirectedUrl, status: redirectStatus, lang } = meta

      if (redirectedUrl) {
        res.redirect(redirectStatus, redirectedUrl)
      } else {
        const app = { ...initialAppState, routeSynced: true, lang, device }
        const { render, texts, assets, links, user, control, data, inputs, errors } = state
        const initialState = {
          app,
          render,
          texts,
          assets,
          links,
          user,
          control,
          data,
          inputs,
          errors,
          ...visitorState,
          ...initialStateParser(state),
        }
        const appAsHtml = appRenderer(initialState)
        const status = 200

        res.status(status).send(indexRenderer({ ...meta, ...appAsHtml, lang }))
      }
    })
    .catch(exception => {
      const robots = 'noindex,nofollow'

      exceptionSender({
        exception,
        res,
        url,
        device,
        visitorState,
        appRenderer,
        robots,
      })
    })
}

export default routeSender
