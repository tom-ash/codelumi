export function changePicture(e, direction) {
  e.stopPropagation()
  let announcement = { ...this.props.announcement }
  const pictures = announcement.pictures
  let pictureIndex = announcement.pictureIndex
  if (direction === 'previous') {
    pictureIndex = pictureIndex - 1
    if (pictureIndex < 0) {
      pictureIndex = pictures.length - 1
    }
  }
  if (direction === 'next') {
    pictureIndex = pictureIndex + 1
    if (pictureIndex >= pictures.length) {
      pictureIndex = 0
    }
  }
  announcement.pictureIndex = pictureIndex
  this.props.changeAnnouncement(announcement)
}
