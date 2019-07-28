import { changeRoute } from '../../../../../../../../../functions/routers'

export function componentDidMount() {
  if (this.props.authorized && !this.props.phoneVerified) this.startVerification()
}

export function componentDidUpdate() {
  if (this.props.announcementPublishing && this.props.phoneVerified) {
    changeRoute.call(this, null, 'addAnnouncement')
  }
}