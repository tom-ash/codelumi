import { apiUrl } from '../../../../../../../constants/urls'
import { getAccessToken } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function triggerVisible(announcement, index) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const access_token = getAccessToken()
  fetch(`${apiUrl}/announcements/${announcement.id}?attribute=visible`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify({ visible: !announcement.visible })
  })
  .then(response => {
    if (response.ok) {
      this.props.changeData({ announcements: deepCloneAnnouncement.call(this, announcement, index) })
    }
    this.props.changeControl({ connecting: false })
  })
}

function deepCloneAnnouncement(announcement, index) {
  const announcements = [ ...this.props.announcements ]
  const copiedAnnouncement = { ...announcement }
  copiedAnnouncement.visible = !announcement.visible


  announcements[index] = copiedAnnouncement
  return announcements
}