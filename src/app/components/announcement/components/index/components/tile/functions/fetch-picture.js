import { apiUrl } from '../../../../../../../constants/urls'

export function fetchPicture() {
  if (typeof window === 'undefined') return
  
  const { changeAnnouncement } = this.props
  const announcement = { ...this.props.announcement }
  changeAnnouncement(superDeepCopyAnnouncement.call(this))
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


function superDeepCopyAnnouncement() {
  const announcement = { ...this.props.announcement }
  const pictureIndex = this.props.announcement.pictureIndex
  const pictures = [ ...announcement.pictures ]
  const picture = { ...pictures[pictureIndex] }
  picture.fetched = true
  pictures[pictureIndex] = picture
  announcement.pictures = pictures
  return announcement
}