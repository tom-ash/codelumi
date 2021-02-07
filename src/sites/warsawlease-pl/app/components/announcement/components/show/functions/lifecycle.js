import { viewAnnouncement } from '../../../functions/view-announcement'

export function componentDidMount() {
  const {
    phone,
    fetched,
    changeControl
  } = this.props

  if (!fetched) {
    const id = this.props.id || +window.location.pathname.match(/\d+/)[0]

    viewAnnouncement(id)
    changeControl({ fetched: true })
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
