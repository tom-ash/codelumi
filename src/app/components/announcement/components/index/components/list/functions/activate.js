import { apiUrl } from '../../../../../../../constants/urls'
import { getTokens } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function activate(announcement, index) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const [UST, UAT] = getTokens()
  fetch(`${apiUrl}/announcements/${announcement.id}?attribute=status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', UST, UAT },
    body: JSON.stringify({ status: announcement.status == 1 ? 2 : 1 })
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
  copiedAnnouncement.status = announcement.status == 1 ? 2 : 1

  console.log(copiedAnnouncement)

  announcements[index] = copiedAnnouncement
  return announcements
}