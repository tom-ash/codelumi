const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { appState } from '../../app/constants/app-state'
import { data } from '../../app/components/announcement/components/index/constants/state'
import { openGraphProvider } from '../../shared/functions/providers/open-graph-provider'
import { parseScalableVectorGraphics } from '../../shared/functions/parsers/parse-scalable-vector-graphics'

export function sendAnnouncementsMapResponse({
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

    const openGraph = openGraphProvider({
      title,
      description,
      imageWidth: "1200",
      imageHeight: "630"
    })

    const keywords = {
      pl: 'mapa, warszawa, nieruchomość, nieruchomości, wynajem, najem, wynajęcie, mieszkania, lokale użytkowe, biura, mieszkanie, lokal użytkowy, biuro, ogłoszenia, ogłoszenie',
      en: 'map, warsaw, real estate, real estates, lease, apartments, usable premises, offices, apartment, office, announcements, announcement'
    }[language]

    const schemaOrg = `
      <script type="application/ld+json">
        {
          "@context": "https://schema.org", 
          "@type": "WebPage",
          "name": "warsawlease.pl",
          "description": "${description}",
          "keywords": "${keywords}",
          "inLanguage": "${language}"
        }
      </script>
    `

    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          showAnnouncementIndexMap: true,
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
          index: {
            data: {
              posts: {
                welcome: json.welcome
              }
            }
          }
        },
        visitor
      },
      title,
      description,
      url,
      openGraph,
      schemaOrg,
      language
    })
  })
}
