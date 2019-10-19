import { apiUrl } from '../../../../../../../constants/urls'
import { getUserToken } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function extend(announcement, index) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const uT = getUserToken()
  fetch(`${apiUrl}/announcements/extend/${announcement.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json',
    uT
  }
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
  const announcements = [ ...this.props.announcements ]
  const clonedAnnouncement = { ...announcement }
  clonedAnnouncement.activeUntil = json.activeUntil
  announcements[index] = clonedAnnouncement
  return announcements
}