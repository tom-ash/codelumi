import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'
import ResponseInitializers from '../response-initializers/response-initializers'

export function sendRouteResponse({
  res,
  url,
  route,
  device,
  visitorState
}) {
  const {
    lang,
    noIndex,
    track
  } = route
  const ResponseInitializer = ResponseInitializers[track]

  ResponseInitializer({
    route,
    url,
    device,
    visitorState
  }).then(({
    initialState,
    title,
    description,
    keywords,
    image,
    openGraph,
    schemaOrg
  }) => {
    const appAsHtml = renderApp(initialState)
    const status = 200

    res.status(status).send(
      renderPage({
        lang,
        noIndex,
        title,
        description,
        keywords,
        image,
        openGraph,
        schemaOrg,
        ...appAsHtml
      }) 
    )
  })
}
