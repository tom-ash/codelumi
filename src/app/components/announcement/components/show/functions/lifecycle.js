import { fetchAnnouncement } from './fetch-announcement'

export function componentDidMount() {
  const { announcementId } = this.props

  if (announcementId) {
    fetchAnnouncement.call(this)
    this.viewAnnouncement(announcementId)
  }
  addEventListener('scroll', this.fixedPhoneHandler)
}

export function componentDidUpdate(prevProps) {
  const { phone: prevPhone } = prevProps
  const { phone } = this.props

  if (!prevPhone && phone) this.setState({ phone })
}

export function componentWillUnmount() {
  removeEventListener('scroll', this.fixedPhoneHandler)
}
