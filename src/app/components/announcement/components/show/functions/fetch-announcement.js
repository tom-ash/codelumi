import { apiUrl } from '../../../../../constants/urls'
import { showClientServerParams } from '../../../constants/client-server-params'

export function fetchAnnouncement(id) {
  fetch(`${apiUrl}/announcements/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    let clientParams = {}
    showClientServerParams.map(param => ( clientParams[param.client] = jsonResponse[param.server] ))
    clientParams.mapLatitude = jsonResponse.latitude / 1000000
    clientParams.mapLongitude = jsonResponse.longitude / 1000000
    clientParams.name = jsonResponse.name
    clientParams.features = jsonResponse.features
    clientParams.furnishings = jsonResponse.furnishings
    clientParams.descriptionPolish = jsonResponse.polish_description
    clientParams.descriptionEnglish = jsonResponse.english_description
    this.props.changeData(clientParams)
    this.props.changeControl({ mapLoaded: false })
  })
  .catch(() => this.changeRoute(null, '/'))
}
