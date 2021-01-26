const fetch = require("node-fetch")
import { appState } from '../app/constants/app-state'
import { parseScalableVectorGraphics } from '../shared/functions/parsers/parse-scalable-vector-graphics'
import routeRenders from '../shared/constants/routes/renders'
import { renderState } from '../shared/constants/routes/renders/state'
import { metaDataParser } from '../shared/functions/parsers/meta-data'

export function responseInitializer({ url, route, device }) {
  const { lang, track, initialStateParser } = route

  return (
    fetch(API_URL + `/route_data`, {
      headers: { 'Content-Type': 'application/json', 'Route-Url': url }
    })
    .then(response => {
      if (response.ok) return response.json()

      throw new Error('Page Not Found')
    })
    .then(jsonResponse => {
      const { metaData: unparsedMetaData, initialState: unparsedInitialState } = jsonResponse
      const scalableVectorGraphics = parseScalableVectorGraphics(jsonResponse)
      const metaData = metaDataParser({ ...route, ...unparsedMetaData, lang })
      const app = { ...appState, lang, device, scalableVectorGraphics }
      let render = { ...renderState, [track]: true, ...routeRenders[track] }
      let page = {}
      const residualState = initialStateParser && initialStateParser(unparsedInitialState) || {}
      const { pageShow } = jsonResponse

      if (pageShow) {
        page = { show: { data: pageShow } }
      }
    
      const initialState = { app, render, page, ...residualState }

      return {
        metaData,
        initialState
      }
    })
  )
}
