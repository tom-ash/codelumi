import API_URL from '../../../../../../../../shared/constants/urls/api.js'
import getAccessToken from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'
import { DELETE_ROUTE_DATA } from '../constants/api_route_data.js'

export function destroy(id) {
  const { connecting, announcements, changeControl, changeData } = this.props
  if (connecting) return

  changeControl({ connecting: true })
  const access_token = getAccessToken()
  const { method, route } = DELETE_ROUTE_DATA

  fetch(`${API_URL}/${route}/${id}`, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': access_token },
  }).then(() => {
    const newAnnouncements = announcements.filter(announcement => {
      return announcement.id !== id
    })
    changeData({ announcements: newAnnouncements, amount: newAnnouncements.length })
    changeControl({ connecting: false, beingDeleted: null })
  })
}
