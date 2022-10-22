import API_URL from '../../../../../../../../shared/constants/urls/api.js'
import getAccessToken from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'
import { UPDATE_VISIBLE_ROUTE_DATA } from '../constants/api_route_data.js'

export function triggerVisible(announcement, index) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const access_token = getAccessToken()
  const { method, route } = UPDATE_VISIBLE_ROUTE_DATA

  fetch(`${API_URL}/${route}/${announcement.id}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      access_token,
    },
    body: JSON.stringify({ visible: !announcement.visible }),
  }).then(response => {
    if (response.ok) {
      this.props.changeData({ announcements: deepCloneAnnouncement.call(this, announcement, index) })
    }
    this.props.changeControl({ connecting: false })
  })
}

function deepCloneAnnouncement(announcement, index) {
  const announcements = [...this.props.announcements]
  const copiedAnnouncement = { ...announcement }
  copiedAnnouncement.visible = !announcement.visible

  announcements[index] = copiedAnnouncement
  return announcements
}
