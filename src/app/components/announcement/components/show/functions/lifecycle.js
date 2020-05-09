import { fetchAnnouncement } from './fetch-announcement'
import { viewAnnouncement } from '../../../functions/view-announcement'

export function componentDidMount() {
  const { announcementId, phone } = this.props

  if (announcementId) {
    fetchAnnouncement.call(this)
    viewAnnouncement(announcementId)
  }
  addEventListener('scroll', this.fixedPhoneHandler)

  if (phone) this.setState({ phone })
}

export function componentDidUpdate(prevProps) {
  const { phone: prevPhone } = prevProps
  const { phone } = this.props

  if (!prevPhone && phone) this.setState({ phone })
}

export function componentWillUnmount() {
  removeEventListener('scroll', this.fixedPhoneHandler)
}
