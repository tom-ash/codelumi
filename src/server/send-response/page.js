import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'

export function sendPageResponse({
  res,
  language,
  url,
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
