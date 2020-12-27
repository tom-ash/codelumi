import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'

export function sendResponse({
  res,
  status,
  language,
  noIndex,
  url,
  announcementUrl,
  canonicalUrl,
  title,
  description,
  keywords,
  image,
  openGraph,
  schemaOrg,
  initialState
}) {
  res.status(status || 200).send(
    renderPage({
      url,
      announcementUrl,
      canonicalUrl,
      language,
      noIndex,
      title,
      description,
      keywords,
      image,
      openGraph,
      schemaOrg,
      ...renderApp(initialState)
    }) 
  )
}
