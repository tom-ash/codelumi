import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'

export function sendRouteResponse({
  res,
  language,
  noIndex,
  url,
  canonicalUrl,
  title,
  description,
  keywords,
  image,
  openGraph,
  schemaOrg,
  initialState
}) {
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
