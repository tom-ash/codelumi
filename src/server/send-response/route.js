import { renderHtml } from '../render-html'
import { renderApp } from '../render-app'
import { responseInitializer } from '../response-initializer'

export function sendRouteResponse({ res, url, route, device, visitorState }) {
  responseInitializer({ route, device })
  .then(({ metaData, initialState }) => {

    const appAsHtml = renderApp({ ...initialState, ...visitorState })
    const status = 200

    res.status(status).send(
      renderHtml({ url, ...metaData, ...appAsHtml }) 
    )
  })
}
