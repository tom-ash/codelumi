
import exceptionSender from './exception'
import indexRenderer from '../../renderers'

export function routeSender({ res, url, route, device, appRenderer, visitorState }) {
  fetch(API_URL + `/route_data`, {
    headers: { 'Content-Type': 'application/json', 'Route-Url': url }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { metaData: unparsedMetaData, initialState: unparsedInitialState } = jsonResponse
    const metaData = metaDataParser({ ...route, ...unparsedMetaData, lang })
    const scalableVectorGraphics = parseScalableVectorGraphics(jsonResponse)
    const app = { ...appState, lang, device, scalableVectorGraphics }
    let render = { ...renderState, [track]: true, ...routeRenders[track] }
    let page = {}
    const residualState = initialStateParser && initialStateParser(unparsedInitialState) || {}
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
