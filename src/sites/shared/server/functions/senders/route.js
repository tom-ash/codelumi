import fetch from 'node-fetch'
import indexRenderer from '../renderers/index.js'
import exceptionSender from './exception.js'
import metaDataParser from '../../../shared/functions/parsers/meta-data.js'
import anyNull from '../helpers/any-null.js'
import initialStateParserV2 from '../parsers/initial-state.js' 

function routeSender({
  res,
  clientUrl, apiUrl, tracks, routeRenders,
  url, query, route, device,
  appState, renderState, visitorState,
  accessToken,
  appRenderer
}) {
  const { track, lang: routeLang, pageName, initialStateParser } = route
  const pageNameHeader = pageName ? { 'Page-Name': pageName } : {}

  fetch(`${apiUrl}/sync${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Type': 'ssr',
      'Route-Url': url,
      'Track': track,
      'Lang': routeLang,
      'Access-Token': accessToken,
      ...pageNameHeader
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { meta: unparsedMeta, state, state: { 'page/show/data': pageData }} = jsonResponse
    let lang = routeLang
    if (pageData) { lang = pageData.lang }
    const meta = metaDataParser({ ...route, ...unparsedMeta, lang })
    const app = { ...appState, routeSynced: true, lang, device }
    const { visitor: { legal: { privacy: { settings: { statisticsConsent, marketingConsent }}}}} = visitorState
    const renderPrivacyMonit = { 'visitor/privacy-monit': anyNull({ statisticsConsent, marketingConsent }) }
    const render = { ...renderState, ...renderPrivacyMonit, [track]: true, ...routeRenders[track] }
    const residualState = initialStateParser && initialStateParser(state) || {}
    const initialState = { app, render, ...visitorState, ...residualState, ...initialStateParserV2(state) }
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
      tracks,
      appState, renderState, visitorState,
      appRenderer
    })
  })
}

export default routeSender
