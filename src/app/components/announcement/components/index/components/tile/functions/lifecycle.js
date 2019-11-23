import { compareParameters } from '../../../../../../../functions/compare-update-parameters'

export function componentDidMount() {
  const { index, venue } = this.props
  if (index === 0 || venue === 'map') this.fetchPicture()
}

export function componentDidUpdate(prevProps) {
  const { announcements, index, venue, scrollY } = this.props
  const { announcements: precedingAnnouncements } = prevProps

  

  if (prevProps.announcement.pictureIndex !== this.props.announcement.pictureIndex) {
    return this.fetchPicture()
  }
  if (index === 0 || venue === 'map') return

  const announcement = announcements[index]

  // console.log()

  if (announcement.pictures[announcement.pictureIndex].fetched) return



  const precedingAnnouncement = announcements[index - 1]
  const prevPrecedingAnnouncement = precedingAnnouncements[index - 1]
  if (precedingAnnouncement.pictures[0].url && !prevPrecedingAnnouncement.pictures[0].url) {
    if (index === 1 || index === 2) return this.fetchPicture()
  }
  
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = this.container.current.getBoundingClientRect()
  const offset   = elemRect.top - bodyRect.top;

  if (scrollY + 1000 < offset) return

  if (!announcements[index].pictures[0].url) this.fetchPicture()
}
