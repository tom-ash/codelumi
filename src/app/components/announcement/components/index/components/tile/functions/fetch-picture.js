import { apiUrl } from '../../../../../../../constants/urls'

export function fetchPicture() {
  const { changeAnnouncement } = this.props
  const announcement = { ...this.props.announcement }
  if (!window.announcementId) window.announcementId = 1
  window.announcementId = window.announcementId + 1
  if (announcement.fetchingPicture) return

  announcement.fetchingPicture = true
  changeAnnouncement(announcement)
  if (!announcement || !announcement.pictures) return
  const pictureIndex = announcement.pictureIndex
  if (announcement.pictures[pictureIndex].url) return
  fetch(`${apiUrl}/pictures`, {
    headers: {
      'key': `announcements/${announcement.id}/${announcement.pictures[pictureIndex].database}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => { if (response.ok) return response.json() })
  .then(json => {
    changeAnnouncement(this.deepCopyAnnouncement(json))
  })
}


