import fetch from 'node-fetch'
import indexRenderer from '../renderers/index.js'
import exceptionSender from './exception.js'
import svgsParser from '../../../shared/functions/parsers/svgs.js'
import metaDataParser from '../../../shared/functions/parsers/meta-data.js'

function routeSender({
  res,
  apiUrl, tracks, routeRenders,
  url, route, device,
  appState, renderState, visitorState,
  appRenderer
}) {
  fetch(apiUrl + `/route_data`, {
    headers: { 'Content-Type': 'application/json', 'Route-Url': url }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { metaData: unparsedMetaData, initialState: unparsedInitialState, pageShow } = jsonResponse

    const scalableVectorGraphics = svgsParser(jsonResponse)
    
    const { track, lang, initialStateParser } = route
    const metaData = metaDataParser({ ...route, ...unparsedMetaData, lang })
    const app = { ...appState, lang, device, scalableVectorGraphics }
    const render = { ...renderState, [track]: true, ...routeRenders[track] }
    const residualState = initialStateParser && initialStateParser(unparsedInitialState) || {}

    let page = {}
    if (pageShow) {
      page = { show: { data: pageShow } }
    }
  
    const initialState = { app, render, page, ...residualState }
    const appAsHtml = appRenderer({ ...initialState, ...visitorState })
    const status = 200

    res.status(status).send(
      indexRenderer({ url, ...metaData, ...appAsHtml }) 
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
