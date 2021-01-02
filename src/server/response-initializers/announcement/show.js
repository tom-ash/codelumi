const fetch = require("node-fetch")
import { appState } from '../../../app/constants/app-state'
import { data } from '../../../app/components/announcement/components/show/constants/state'
import { parseScalableVectorGraphics } from '../../../shared/functions/parsers/parse-scalable-vector-graphics'
import routeRenders from '../../../shared/constants/routes/renders'
import { showClientServerParams } from '../../../app/components/announcement/constants/client-server-params'
import { provideTitle } from '../../../shared/functions/providers/provide-title'

export function announcementShowResponseInitializer({
  route,
  url,
  device
}) {
  const {
    track,
    lang: language
  } = route
  const id = +url.match(/\d+/)[0]

  return fetch(`${API_URL}/announcements/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const showData = {}
    showClientServerParams.map(param => {
      showData[param.client] = json[param.server]
    })

    const title = provideTitle({ ...showData, language })
    const description = { pl: showData.polishDescription, en: showData.englishDescription }[language]
    const keywords = ''
    const image = `${AWS_S3_URL}/announcements/${showData.id}/${showData.pictures[0].database}`
    const openGraph = {}
    const schemaOrg = {}

    return {
      title,
      description,
      keywords,
      image,
      openGraph,
      schemaOrg,
      initialState: {
        app: {
          ...appState,
          language,
          device,
          scalableVectorGraphics: parseScalableVectorGraphics(json.scalableVectorGraphics)
        },
        render: {
          [track]: true,
          ...routeRenders[track]
        },
        announcement: {
          show: {
            data: {
              ...data,
              ...showData
            }
          }
        },
      }
    }
  })
}
