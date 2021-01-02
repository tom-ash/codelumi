import { fetchAnnouncement } from './fetch-announcement'
import { viewAnnouncement } from '../../../functions/view-announcement'

export function componentDidMount() {
  const {
    id,
    phone
  } = this.props

  if (!id) {
    const id = +window.location.pathname.match(/\d+/)[0]

    fetchAnnouncement.call(this, id)
    viewAnnouncement(id)
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
