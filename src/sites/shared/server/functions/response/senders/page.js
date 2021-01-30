const fetch = require("node-fetch")
import indexRenderer from '../../renderers'
import exceptionSender from './exception'

// import { VISITOR_TRACK, PAGE_TRACK, PAGE_SHOW_TRACK } from '../../../../../warsawlease-pl/shared/constants/tracks/tracks'
// import appState from '../../../../../warsawlease-pl/app/constants/app-state'
// import renderState from '../../../../../warsawlease-pl/shared/constants/routes/renders/state'

export function pageSender({ res, url, device, appRenderer, visitorState }) {


  // tracks


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
    const appAsHtml = appRenderer(initialState)

    res.status(200).send(
      indexRenderer({
        url, lang, canonicalUrl, noIndex,
        title, description, keywords, image, openGraph, schemaOrg,
        ...appAsHtml
      }) 
    )
  })
  .catch(exception => {
    exceptionSender({ exception, res, url, device, visitorState })
  })
}
