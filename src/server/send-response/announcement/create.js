const fetch = require("node-fetch")
import { appState } from '../../../app/constants/app-state'
import { openGraphProvider } from '../../../shared/functions/providers/open-graph-provider'
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
  const openGraph = openGraphProvider({
    title,
    description,
    imageWidth: "1200",
    imageHeight: "630"
  })

  const keywords = {
    pl: 'ogłoszenie, wynajem, nieruchomości, dodaj, bezpłatne, za darmo',
    en: 'announcement, lease, real estate, add, free'
  }[language]

  const schemaOrg = `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org", 
        "@type": "WebPage",
        "name": "${title}",
        "description": "${description}",
        "keywords": "${keywords}",
        "inLanguage": "${language}"
      }
    </script>
  `
  
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
