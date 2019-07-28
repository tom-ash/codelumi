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
    console.log(jsonResponse)
    let clientParams = {}
    showClientServerParams.map(param => ( clientParams[param.client] = jsonResponse[param.server] ))
    // TODO features
    // TODO furnishings
    clientParams.mapLatitude = jsonResponse.map_latitude / 1000000
    clientParams.mapLongitude = jsonResponse.map_longitude / 1000000
    clientParams.name = jsonResponse.name
    this.props.changeData(clientParams)
    this.props.changeControl({ mapLoaded: false })
  })
}