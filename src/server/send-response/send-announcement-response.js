const fetch = require("node-fetch")
import { sendResponse } from './send-response'
import { showClientServerParams } from '../../app/components/announcement/constants/client-server-params'

export function sendAnnouncementResponse(res, announcementId) {
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

    sendResponse(res, {
      route: {
        showAnnouncementShow: true
      },
      announcement: clientParams
    })
  })
}
