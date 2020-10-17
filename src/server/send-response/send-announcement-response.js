const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { showClientServerParams } from '../../app/components/announcement/constants/client-server-params'
import { provideTitle } from '../../shared/functions/providers/provide-title'
import { appState } from '../../app/constants/app-state'
import { data } from '../../app/components/announcement/components/show/constants/state'
import { buildLink } from '../../app/components/announcement/functions/build-link'
import { parseScalableVectorGraphics } from '../../shared/functions/parsers/parse-scalable-vector-graphics'

export function sendAnnouncementResponse({
  res,
  initialState: {
    app: { language, device },
    visitor
  },
  announcementId
}) {
  fetch(`${API_URL}/announcements/${announcementId}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    let clientParams = {}
    
    showClientServerParams.map(param => ( clientParams[param.client] = json[param.server] ))

    clientParams.mapLatitude = json.latitude
    clientParams.mapLongitude = json.longitude
    clientParams.name = json.name
    clientParams.features = json.features
    clientParams.furnishings = json.furnishings
    clientParams.descriptionPolish = json.polishDescription
    clientParams.descriptionEnglish = json.englishDescription
    clientParams.pictures = json.pictures
    clientParams.id = json.id

    const title = provideTitle({ ...clientParams, language })
    const image = `${AWS_S3_URL}/announcements/${clientParams.id}/${clientParams.pictures[0].database}`
    const description = { pl: clientParams.descriptionPolish, en: clientParams.descriptionEnglish }[language]
    const keywords = {
      pl: 'nieruchomość, wynajem',
      en: 'real estate, lease'
    }[language]

    const openGraph = `
      <meta property="og:type" content="website" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${image}" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="675" />
    `

    const schemaOrg = `
      <script type="application/ld+json">
        {
          "@context": "https://schema.org", 
          "@type": "RealEstateListing",
          "image": "${image}",
          "description": "${description}",
          "keywords": "${keywords}",
          "inLanguage": "${language}"
        }
      </script>
    `

    const announcementUrl = buildLink({
      id: clientParams.id,
      category: clientParams.category,
      district: clientParams.district,
      area: clientParams.area,
      language
    })

    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          showAnnouncementShow: true,
          announcementId,
          language,
          device,
          scalableVectorGraphics: parseScalableVectorGraphics(json.scalableVectorGraphics)
        },
        announcement: {
          show: {
            data: {
              ...data,
              ...clientParams
            }
          }
        },
        visitor
      },
      title,
      description: title,
      announcementUrl,
      openGraph,
      schemaOrg,
      language
    })
  })
  .catch(() => res.status(404).send('404'))
}
