import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'
import stateInitializers from '../state-initializers/state-initializers'

export function sendRouteResponse({
  route,
  res,
  device,
  visitorState
}) {
  const {
    lang,
    noIndex,
    title,
    description,
    keywords,
    track
  } = route
  const stateInitializer = stateInitializers[track]

  stateInitializer({
    route,
    device,
    visitorState
  }).then(initialState => {
    const appAsHtml = renderApp(initialState)
    const status = 200

    res.status(status).send(
      renderPage({
        lang,
        noIndex,
        title,
        description,
        keywords,
        // image,
        // openGraph,
        // schemaOrg,
        ...appAsHtml
      }) 
    )
  })
}
