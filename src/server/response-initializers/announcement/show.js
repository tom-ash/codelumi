const fetch = require("node-fetch")
import { appState } from '../../../app/constants/app-state'
import { data } from '../../../app/components/announcement/components/show/constants/state'
import { parseScalableVectorGraphics } from '../../../shared/functions/parsers/parse-scalable-vector-graphics'
import routeRenders from '../../../shared/constants/routes/renders'
import { showClientServerParams } from '../../../app/components/announcement/constants/client-server-params'

export function announcementShowResponseInitializer({
  route,
  url,
  device,
  visitorState
}) {
  const {
    track,
    lang: language
  } = route
  const id = +url.match(/\d+/)[0]

  fetch(`${API_URL}/announcements/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const {
      latitude: latitude,
      longitude: longitude,
      name,
      features,
      furnishings,
      polishDescription: polishDescription,
      englishDescription: englishDescription
    } = json
    let showData = {
      latitude,
      longitude,
      name,
      features,
      furnishings,
      polishDescription,
      englishDescription
    }

    showClientServerParams.map(param => {
      showData[param.client] = json[param.server]
    })

    // const title = provideTitle({ ...clientParams, language })
    // const image = `${AWS_S3_URL}/announcements/${clientParams.id}/${clientParams.pictures[0].database}`
    // const description = { pl: clientParams.polishDescription, en: clientParams.englishDescription }[language]

    return {
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
      ...visitorState
    }
  })
}
