import { compareParameters } from '../../../../../../../functions/compare-update-parameters'

export function componentDidMount() {
  const { index, venue } = this.props
  if (index === 0 || venue === 'map') this.fetchPicture()
}

export function shouldComponentUpdate(nextProps) {
  if (this.props.language !== nextProps.language) return true
  return compareParameters(this.props.announcement, nextProps.announcement, ['announcements', 'phone', 'pictures', 'pictureIndex', 'status'])
}

export function componentDidUpdate(prevProps) {
  const { announcements, index, venue } = this.props
  const { announcements: precedingAnnouncements } = prevProps
  if (prevProps.announcement.pictureIndex != this.props.announcement.pictureIndex) {
    this.fetchPicture()
  }
  if (index === 0 || venue === 'map') return
  const precedingAnnouncement = announcements[index - 1]
  const prevPrecedingAnnouncement = precedingAnnouncements[index - 1]
  if (precedingAnnouncement.pictures[0].url && !prevPrecedingAnnouncement.pictures[0].url) {
    this.fetchPicture()
  }
}
