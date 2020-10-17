import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'

export function sendResponse({
  res,
  initialState,
  title,
  description,
  url,
  announcementUrl,
  noIndex,
  openGraph,
  schemaOrg,
  status,
  language
}) {
  res.status(status || 200).send(
    renderPage({ 
      ...renderApp(initialState),
      title,
      description,
      url,
      announcementUrl,
      noIndex,
      openGraph,
      schemaOrg,
      language
    }) 
  )
}
