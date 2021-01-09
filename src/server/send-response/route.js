import { renderApp } from '../render-app'
import { renderHtml } from '../render-html'
import { responseInitializer } from '../response-initializer'
import { sendNotFoundResponse } from './exceptions/not-found'

export function sendRouteResponse({ res, url, route, device, visitorState }) {
  responseInitializer({ url, route, device })
  .then(({ metaData, initialState }) => {
    const appAsHtml = renderApp({ ...initialState, ...visitorState })
    const status = 200

    res.status(status).send(
      renderHtml({ url, ...metaData, ...appAsHtml }) 
    )
  })
  .catch(error => {
    sendNotFoundResponse({ res, url, device, visitorState })
  })
}
