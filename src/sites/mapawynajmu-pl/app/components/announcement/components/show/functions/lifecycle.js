import { viewAnnouncement } from '../../../functions/view-announcement'

export function componentDidMount() {
  const {
    fetched,
    changeControl
  } = this.props

  if (!fetched) {
    const id = this.props.id || +window.location.pathname.match(/\d+/)[0]

    viewAnnouncement(id)
    changeControl({ fetched: true })
  }
}
