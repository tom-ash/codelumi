const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { showClientServerParams } from '../../app/components/announcement/constants/client-server-params'
import { provideTitle } from '../../shared/functions/providers/provide-title'
import { appState } from '../../app/constants/app-state'
import { data } from '../../app/components/announcement/components/show/constants/state'

export function sendAnnouncementResponse({
  res,
  initialState: {
    app: { language }
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

    const title = provideTitle({ ...clientParams, language })

    sendResponse({
      res,
      initialState: {
        app: {
          ...appState,
          showAnnouncementShow: true,
          language
        },
        announcement: {
          show: {
            ...data,
            data: clientParams
          }
        }
      },
      title,
      description: title,
      url: announcementId
    })
  })
  .catch(() => res.status(404).send('404'))
}
