import fetch from 'node-fetch'
import indexRenderer from '../../renderers'
import exceptionSender from './exception'
import svgsParser from '../../../../shared/functions/parsers/svgs.js'

function routeSender({
  res,
  apiUrl,
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
    const scalableVectorGraphics = svgsParser(jsonResponse)
    
    const { track, lang, initialStateParser } = route
    const { metaData: unparsedMetaData, initialState: unparsedInitialState } = jsonResponse
    const metaData = metaDataParser({ ...route, ...unparsedMetaData, lang })
    const app = { ...appState, lang, device, scalableVectorGraphics }
    const render = { ...renderState, [track]: true, ...routeRenders[track] }
    const residualState = initialStateParser && initialStateParser(unparsedInitialState) || {}

    const page = {}
    const { pageShow } = jsonResponse
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
    exceptionSender({ exception, res, url, device, visitorState })
  })
}

export default routeSender
