export function deepCopyAnnouncement(json) {
  const announcement = { ...this.props.announcement }
  const pictureIndex = this.props.announcement.pictureIndex
  const pictures = [ ...announcement.pictures ]
  const picture = { ...pictures[pictureIndex] }
  picture.url = json.url
  pictures[pictureIndex] = picture
  announcement.pictures = pictures
  announcement.showLoader = false
  return announcement
}