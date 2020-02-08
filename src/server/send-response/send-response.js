import { renderPage } from '../render-page/render-page'
import { renderAppAsHtml } from '../render-app-as-html/render-app-as-html'

export function sendResponse(res, routeState) {
  res.send(renderPage(renderAppAsHtml(routeState)))
}