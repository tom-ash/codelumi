const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { appState } from '../../app/constants/app-state'
import { data } from '../../app/components/announcement/components/index/constants/state'
import { openGraphProvider } from '../../shared/functions/providers/open-graph-provider'
import { parseScalableVectorGraphics } from '../../shared/functions/parsers/parse-scalable-vector-graphics'

export function sendAnnouncementsListResponse({
  res,
  initialState: {
    app: { language, device },
    visitor
  },
  title,
  description,
  url
}) {
  fetch(API_URL + `/announcements`, {
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
      image: "https://warsawlease.s3.eu-central-1.amazonaws.com/assets/warsawlease.pl-darmowe-ogloszenia-nieruchomosci-wynajem-warszawa.png",
      imageWidth: "1200",
      imageHeight: "630"
    })

    const keywords = {
      pl: 'katalog, warszawa, nieruchomość, nieruchomości, wynajem, najem, wynajęcie, mieszkania, lokale użytkowe, biura, mieszkanie, lokal użytkowy, biuro, ogłoszenia, ogłoszenie',
      en: 'catalogue, warsaw, real estate, real estates, lease, apartments, usable premises, offices, apartment, office, announcements, announcement'
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
          showAnnouncementIndexCatalogue: true,
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
        visitor
      },
      title,
      description,
      url,
      openGraph,
      schemaOrg
    })
  })
}
