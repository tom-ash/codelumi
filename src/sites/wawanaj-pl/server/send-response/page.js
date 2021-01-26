const fetch = require("node-fetch")
import { renderApp } from '../render-app'
import { renderHtml } from '../render-html'
import { VISITOR_TRACK, PAGE_TRACK, PAGE_SHOW_TRACK } from '../../shared/constants/tracks/tracks'
import { appState } from '../../app/constants/app-state'
import { sendNotFoundResponse } from './exceptions/not-found'
import { renderState } from '../../shared/constants/routes/renders/state'

export function sendPageResponse({ res, url, device, visitorState }) {
  fetch(`${API_URL}/posts/urls/${url}`, {
    headers: { 'Content-Type': 'application/jsonResponse' }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { language: lang } = jsonResponse
    const {
      canonicalUrl, noIndex,
      title, description, keywords, image, openGraph, schemaOrg
    } = jsonResponse[lang]
    const initialState = {
      app: { ...appState, lang, device },
      render: { ...renderState, [VISITOR_TRACK]: true, [PAGE_TRACK]: true, [PAGE_SHOW_TRACK]: true },
      page: { show: { data: jsonResponse } },
      ...visitorState
    }
    const appAsHtml = renderApp(initialState)

    res.status(200).send(
      renderHtml({
        url, lang, canonicalUrl, noIndex,
        title, description, keywords, image, openGraph, schemaOrg,
        ...appAsHtml
      }) 
    )
  })
  .catch(error => {
    sendNotFoundResponse({ res, url, device, visitorState })
  })
}
