const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { appState } from '../../app/constants/app-state'

export function sendSiteMapResponse({
  res,
  url,
  title,
  description,
  initialState: {
    app: {
      language,
      device
    },
    visitor
  }
}) {
  const keywords = {
    pl: 'mapa, strony',
    en: 'site, map'
  }[language]
  
  fetch(`${API_URL}/site_map`, {
    headers: {
      'Content-Type': 'application/json',
      'Language': language
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    sendResponse({
      res,
      url,
      language,
      title,
      description,
      keywords,
      initialState: {
        app: {
          ...appState,
          language,
          device,
          showSiteMap: true,
          siteMapLinks: json
        },
        visitor
      }
    })
  })
}
