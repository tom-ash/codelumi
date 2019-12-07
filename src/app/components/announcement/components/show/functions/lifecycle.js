import { fetchAnnouncement } from './fetch-announcement'

export function componentDidMount() {
  const { announcementId } = this.props

  if (announcementId) {
    fetchAnnouncement.call(this)
    this.viewAnnouncement(announcementId)
  }
  addEventListener('scroll', this.fixedPhoneHandler)
}

export function componentWillUnmount() {
  removeEventListener('scroll', this.fixedPhoneHandler)
}
