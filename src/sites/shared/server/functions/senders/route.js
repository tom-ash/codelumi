import fetch from 'node-fetch'
import indexRenderer from '../renderers/index.js'
import exceptionSender from './exception.js'
import metaDataParser from '../../../shared/functions/parsers/meta-data.js'
import initialStateParser from '../parsers/initial-state.js' 
import initialAppState from '../../../app/constants/initial-app-state.js'

function routeSender({
  res,
  clientUrl, apiUrl,
  url, query, device,
  accessToken,
  appRenderer,
  visitorState
}) {
  fetch(`${apiUrl}/sync${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Type': 'ssr',
      'Route-Url': url,
      // 'Lang': TODO Get lang from request,
      'Access-Token': accessToken
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { state, meta: unparsedMeta } = jsonResponse
    const { lang } = unparsedMeta
    const meta = metaDataParser({ ...unparsedMeta, lang })
    const app = { ...initialAppState, routeSynced: true, lang, device }
    const { visitor: { consents: { statisticsConsent, marketingConsent } } } = visitorState

    // 'TODO'
    // const renderPrivacyMonit = { 'visitor/privacy-monit': anyNull({ statisticsConsent, marketingConsent }) }
    const initialState = { app, render: state.render, links: state.links, ...visitorState, ...initialStateParser(state) }
    const appAsHtml = appRenderer(initialState)
    const status = 200

    res.status(status).send(
      indexRenderer({ clientUrl, url, ...meta, ...appAsHtml }) 
    )
  })
  .catch(exception => {
    exceptionSender({
      exception,
      res, url, device,
      visitorState,
      appRenderer
    })
  })
}

export default routeSender
