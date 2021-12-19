import fetch from 'node-fetch'
import indexRenderer from '../renderers/index.js'
import exceptionSender from './exception.js'
import metaDataParser from '../../../shared/functions/parsers/meta-data.js'
import initialStateParser from '../parsers/initial-state.js' 
import initialAppState from '../../../app/constants/initial-app-state.js'

// 'Lang': TODO Get lang from request,

function routeSender({
  res,
  clientUrl, apiUrl, buildUrl,
  url, query, device,
  accessToken,
  appRenderer,
  visitorState,
  siteName
}) {
  fetch(`${apiUrl}/sync${query}`, {
    headers: {
      'Content-Type': 'application/json',
      'Type': 'ssr',
      'Route-Url': url,
      'Access-Token': accessToken
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { state, meta: unparsedMeta } = jsonResponse
    const { langs, lang } = unparsedMeta
    const { canonicalUrl } = unparsedMeta
    const meta = metaDataParser({ ...unparsedMeta, lang, siteName })
    const app = { ...initialAppState, routeSynced: true, lang, device }
    const links = state.links
    const initialState = { app, render: state.render, links, ...visitorState, ...initialStateParser(state) }
    const appAsHtml = appRenderer(initialState)
    const status = 200

    res.status(status).send(
      indexRenderer({ clientUrl, url, ...meta, ...appAsHtml, canonicalUrl, links, langs, lang, buildUrl }) 
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
