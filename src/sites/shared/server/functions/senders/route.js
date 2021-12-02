import fetch from 'node-fetch'
import indexRenderer from '../renderers/index.js'
import exceptionSender from './exception.js'
import metaDataParser from '../../../shared/functions/parsers/meta-data.js'
import initialStateParserV2 from '../parsers/initial-state.js' 

function routeSender({
  res,
  clientUrl, apiUrl,
  url, query, route, device,
  appState, visitorState,
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
    const { visitor: { consents: { statisticsConsent, marketingConsent } } } = visitorState

    // 'TODO'
    // const renderPrivacyMonit = { 'visitor/privacy-monit': anyNull({ statisticsConsent, marketingConsent }) }
    const residualState = initialStateParser && initialStateParser(state) || {}
    const initialState = { app, links: state.links, ...visitorState, ...residualState, ...initialStateParserV2(state) }
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
      appState, visitorState,
      appRenderer
    })
  })
}

export default routeSender
