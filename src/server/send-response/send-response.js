import { renderPage } from '../render-page/render-page'
import { renderAppAsHtml } from '../render-app-as-html/render-app-as-html'

export function sendResponse({
  res,
  initialState,
  title,
  description,
  url,
  announcementUrl,
  noIndex,
  openGraph,
  status
}) {
  res.status(status || 200).send(
    renderPage({ 
      ...renderAppAsHtml(initialState),
      title,
      description,
      url,
      announcementUrl,
      noIndex,
      openGraph
    }) 
  )
}
