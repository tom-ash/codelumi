export function getPicture() {
  const announcement = this.props.announcement
  const pictureIndex = announcement.pictureIndex
  const url = announcement.pictures[pictureIndex].url
  if (!url) return ''
  return `url('${url}')`
}