const fetch = require("node-fetch")
import { sendResponse } from '../send-response'
import { appState } from '../../../app/constants/app-state'
import { data } from '../../../app/components/announcement/components/index/constants/state'
import { parseScalableVectorGraphics } from '../../../shared/functions/parsers/parse-scalable-vector-graphics'

export function sendAnnouncementsMapResponse({
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
  fetch(API_URL + `/announcements?with_welcome=true`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const { amount } = json
    const announcements = json.announcements.map(announcement => {
      announcement.pictureIndex = 0
      announcement.showLoader = true
      return announcement
    })
    if (announcements && announcements[0]) announcements[0].show = true

    const keywords = {
      pl: 'mapa, warszawa, nieruchomość, nieruchomości, wynajem, najem, wynajęcie, mieszkania, lokale użytkowe, biura, mieszkanie, lokal użytkowy, biuro, ogłoszenia, ogłoszenie',
      en: 'map, warsaw, real estate, real estates, lease, apartments, usable premises, offices, apartment, office, announcements, announcement'
    }[language]

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
          TODO,
          language,
          device,
          scalableVectorGraphics: parseScalableVectorGraphics(json.scalableVectorGraphics)
        },
        announcement: {
          index: {
            data: {
              ...data,
              announcements,
              amount
            }
          }
        },
        post: {
          render: {
            show: true
          },
          show: {
            data: json.welcome
          }
        },
        visitor
      }
    })
  })
}
