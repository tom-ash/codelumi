const fetch = require("node-fetch")
import { appState } from '../../../app/constants/app-state'
import { sendResponse } from '../send-response'
import { parseScalableVectorGraphics } from '../../../shared/functions/parsers/parse-scalable-vector-graphics'

export function sendAnnouncementCreateResponse({
  res,
  initialState: {
    app: {
      language,
      device
    },
    visitor
  },
  title,
  description,
  url
}) {
  const keywords = {
    pl: 'ogłoszenie, wynajem, nieruchomości, dodaj, bezpłatne, za darmo',
    en: 'announcement, lease, real estate, add, free'
  }[language]
  
  fetch(`${API_URL}/posts/create_announcement`, {
    headers: {
      'Content-Type': 'application/json'
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
          showAnnouncementCreate: true,
          language,
          device,
          scalableVectorGraphics: parseScalableVectorGraphics(json.scalableVectorGraphics)
        },
        post: {
          render: {
            show: true
          },
          show: {
            data: json
          }
        },
        visitor
      }
    })
  })
}
