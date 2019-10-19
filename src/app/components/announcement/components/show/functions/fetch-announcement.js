import { apiUrl } from '../../../../../constants/urls'
import { showClientServerParams } from '../../../constants/client-server-params'

export function fetchAnnouncement(id) {
  fetch(`${apiUrl}/announcements/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    let clientParams = {}
    showClientServerParams.map(param => ( clientParams[param.client] = json[param.server] ))
    clientParams.mapLatitude = json.latitude / 1000000
    clientParams.mapLongitude = json.longitude / 1000000
    clientParams.name = json.name
    clientParams.features = json.features
    clientParams.furnishings = json.furnishings
    clientParams.descriptionPolish = json.polishDescription
    clientParams.descriptionEnglish = json.englishDescription
    this.props.changeData(clientParams)
    this.props.changeControl({ mapLoaded: false })
  })
  .catch(() => this.changeRoute(null, '/'))
}
