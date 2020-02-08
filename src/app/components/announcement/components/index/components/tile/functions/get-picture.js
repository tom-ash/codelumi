export function getPicture() {
  if (typeof window === 'undefined') return
  
  const announcement = this.props.announcement
  if (!announcement.pictures) return
  const pictureIndex = announcement.pictureIndex
  const url = announcement.pictures[pictureIndex].url
  if (!url) return ''
  return `url('${url}')`
}