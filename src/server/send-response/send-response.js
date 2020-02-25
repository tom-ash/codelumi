import { renderPage } from '../render-page/render-page'
import { renderAppAsHtml } from '../render-app-as-html/render-app-as-html'

export function sendResponse(res, routeData) {
  res.send(renderPage(renderAppAsHtml(routeData)))
}