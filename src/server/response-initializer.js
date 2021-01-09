const fetch = require("node-fetch")
import { appState } from '../app/constants/app-state'
import { parseScalableVectorGraphics } from '../shared/functions/parsers/parse-scalable-vector-graphics'
import routeRenders from '../shared/constants/routes/renders'
import { renderState } from '../shared/constants/routes/renders/state'
import { metaDataParser } from '../shared/functions/parsers/meta-data'

export function responseInitializer({ url, route, device }) {
  const { lang: language, track, initialStateParser } = route

  return (
    fetch(API_URL + `/route_data`, {
      headers: { 'Content-Type': 'application/json', 'Route-Url': url }
    })
    .then(response => {
      if (response.ok) return response.json()

      throw new Error('Page Not Found')
    })
    .then(jsonResponse => {
      const { initialState: unparsedInitialState } = jsonResponse
      const scalableVectorGraphics = parseScalableVectorGraphics(jsonResponse)
      const metaData = metaDataParser({ ...route, ...jsonResponse })

      const initialState = {
        app: { ...appState, language, device, scalableVectorGraphics },
        render: { ...renderState, [track]: true, ...routeRenders[track] },
        ...initialStateParser && { ...initialStateParser(unparsedInitialState) }
      }

      return {
        metaData,
        initialState
      }
    })
  )
}
