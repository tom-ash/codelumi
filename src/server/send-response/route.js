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
    device
  }).then(({
    title,
    description,
    keywords,
    image,
    openGraph,
    schemaOrg,
    initialState
  }) => {
    const appAsHtml = renderApp({ ...initialState, ...visitorState })
    const status = 200

    res.status(status).send(
      renderPage({
        lang,
        noIndex,
        url,
        // canonicalUrl,
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
