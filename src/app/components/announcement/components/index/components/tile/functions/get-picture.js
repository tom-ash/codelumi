export function getPicture() {
  const announcement = this.props.announcement
  if (!announcement.pictures) return
  const pictureIndex = announcement.pictureIndex
  const url = announcement.pictures[pictureIndex].url
  if (!url) return ''
  return `url('${url}')`
}