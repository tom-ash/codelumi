const fetch = require("node-fetch")
import { renderHtml } from '../render-html'
import { renderApp } from '../render-app'
import { VISITOR_TRACK, PAGE_TRACK, PAGE_SHOW_TRACK, PAGE_NOT_FOUND_TRACK } from '../../shared/constants/tracks/tracks'
import { appState } from '../../app/constants/app-state'

export function sendPageResponse({ res, url, device, visitorState }) {
  fetch(`${API_URL}/posts/urls/${url}`, {
    headers: { 'Content-Type': 'application/jsonResponse' }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(jsonResponse => {
    const { language } = jsonResponse
    const { canonicalUrl, noIndex,
            title, description, keywords, image, openGraph, schemaOrg } = jsonResponse[language]
    const initialState = {
      app: { ...appState, language, device },
      render: { [VISITOR_TRACK]: true, [PAGE_TRACK]: true, [PAGE_SHOW_TRACK]: true },
      page: { show: { data: jsonResponse } },
      ...visitorState
    }

    const appAsHtml = renderApp(initialState)

    res.status(200).send(
      renderHtml({
        url, language, canonicalUrl, noIndex,
        title, description, keywords, image, openGraph, schemaOrg,
        ...appAsHtml
      }) 
    )
  })
  .catch(error => {
    const initialState = {
      app: { ...appState, language: 'pl', device },
      render: { [VISITOR_TRACK]: true, [PAGE_TRACK]: true, [PAGE_NOT_FOUND_TRACK]: true },
      ...visitorState
    }

    const appAsHtml = renderApp(initialState)

    res.status(404).send(
      renderHtml({
        url, language: 'pl', title: 'Not Found', description: 'Not Found', ...appAsHtml
      })
    )
  })
}
