import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'

export function sendPageResponse({
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

  const appAsHtml = renderApp(initialState)

  res.status(200).send(
    renderPage({
      url,
      canonicalUrl,
      language,
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
}
