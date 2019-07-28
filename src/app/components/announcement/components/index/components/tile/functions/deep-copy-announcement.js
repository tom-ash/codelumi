export function deepCopyAnnouncement(jsonResponse) {
  const announcement = { ...this.props.announcement }
  const pictureIndex = this.props.announcement.pictureIndex
  const pictures = [ ...announcement.pictures ]
  const picture = { ...pictures[pictureIndex] }
  picture.url = jsonResponse.url
  pictures[pictureIndex] = picture
  announcement.pictures = pictures
  return announcement
}