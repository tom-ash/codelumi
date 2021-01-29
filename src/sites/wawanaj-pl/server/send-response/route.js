import { renderApp } from '../render-app'
import { responseInitializer } from '../response-initializer'
import { sendNotFoundResponse } from './exceptions/not-found'

import renderIndexAsHtml from '../../../shared/functions/renderers/index-as-html'

export function sendRouteResponse({ res, url, route, device, visitorState }) {
  responseInitializer({ url, route, device })
  .then(({ metaData, initialState }) => {
    const appAsHtml = renderApp({ ...initialState, ...visitorState })
    const status = 200

    res.status(status).send(
      renderIndexAsHtml({ url, ...metaData, ...appAsHtml }) 
    )
  })
  // .catch(error => {
  //   sendNotFoundResponse({ res, url, device, visitorState })
  // })
}
