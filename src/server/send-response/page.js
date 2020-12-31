const fetch = require("node-fetch")
import { renderPage } from '../render-page/render-page'
import { renderApp } from '../render-app/render-app'
import {
  VISITOR_TRACK,
  PAGE_TRACK,
  PAGE_SHOW_TRACK
} from '../../shared/constants/tracks/tracks'
import { appState } from '../../app/constants/app-state'

export function sendPageResponse({
  res,
  url,
  device,
  visitorState
}) {
  fetch(`${API_URL}/posts/urls/${url}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()

    throw new Error('Page Not Found')
  })
  .then(json => {
    const {
      language
    } = json
    const {
      noIndex,
      canonical_url: canonicalUrl,
      title,
      description,
      keywords,
      picture: image
    } = json[language]
    const initialState = {
      app: {
        ...appState,
        language,
        device
      },
      render: {
        [VISITOR_TRACK]: true,
        [PAGE_TRACK]: true,
        [PAGE_SHOW_TRACK]: true
      },
      page: {
        show: {
          data: json
        }
      },
      ...visitorState
    }

    const appAsHtml = renderApp(initialState)

    res.status(200).send(
      renderPage({
        url,
        noIndex,
        canonicalUrl,
        language,
        title,
        description,
        keywords,
        ...appAsHtml
      }) 
    )
  })


}
