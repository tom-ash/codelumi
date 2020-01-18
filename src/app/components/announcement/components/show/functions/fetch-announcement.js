import { apiUrl } from '../../../../../constants/urls'
import { showClientServerParams } from '../../../constants/client-server-params'

export function fetchAnnouncement() {
  const { announcementId } = this.props

  fetch(`${apiUrl}/announcements/${announcementId}`, {
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
    this.props.changeData(clientParams)
  })
  .catch(() => this.changeRoute(null, '/'))
}
