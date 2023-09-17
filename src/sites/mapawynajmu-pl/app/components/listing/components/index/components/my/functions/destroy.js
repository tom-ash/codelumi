import API_URL from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { DELETE_ROUTE_DATA } from '../constants/api_route_data'

export function destroy(id) {
  const { connecting, announcements, setControl, setData } = this.props
  if (connecting) return

  setControl({ connecting: true })
  const access_token = getAccessToken()
  const { method, route } = DELETE_ROUTE_DATA

  fetch(`${API_URL}/${route}/${id}`, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': access_token },
  }).then(() => {
    const newAnnouncements = announcements.filter(announcement => {
      return announcement.id !== id
    })
    setData({ announcements: newAnnouncements, amount: newAnnouncements.length })
    setControl({ connecting: false, beingDeleted: null })
  })
}
