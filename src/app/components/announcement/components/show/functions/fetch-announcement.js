import { apiUrl } from '../../../../../constants/urls'
import { showClientServerParams } from '../../../constants/client-server-params'
import { PAGE_NOT_FOUND_TRACK } from '../../../../../../shared/constants/tracks/tracks'

export function fetchAnnouncement(id) {
  const { changeData } = this.props

  fetch(`${apiUrl}/announcements/${id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const clientParams = {}

    showClientServerParams.map(param => ( clientParams[param.client] = json[param.server] ))
    changeData(clientParams)    
  })
  .catch(e => {
    this.changeRoute(PAGE_NOT_FOUND_TRACK)
  })
}
