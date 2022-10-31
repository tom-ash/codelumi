import API_URL from '../../../../../../../../shared/constants/urls/api.js'
import getAccessToken from '../../../../../../user/components/auth/components/tokens/functions/get-tokens'
import { UPDATE_ACTIVE_UNTIL_ROUTE_DATA } from '../constants/api_route_data.js'

export function extend(announcement, index) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const access_token = getAccessToken()
  const { method, route } = UPDATE_ACTIVE_UNTIL_ROUTE_DATA

  fetch(`${API_URL}/${route}/${announcement.id}`, {
    method,
    headers: { 'Content-Type': 'application/json', access_token },
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(json => {
      this.props.changeData({ announcements: deepCloneAnnouncement.call(this, json, announcement, index) })
      this.props.changeControl({ connecting: false })
    })
}

function deepCloneAnnouncement(json, announcement, index) {
  const announcements = [...this.props.announcements]
  const clonedAnnouncement = { ...announcement }
  clonedAnnouncement.activeUntil = json.activeUntil
  announcements[index] = clonedAnnouncement
  return announcements
}
