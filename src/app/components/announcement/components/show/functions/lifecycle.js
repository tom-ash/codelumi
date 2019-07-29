import { getAnnouncementPath, validId } from '../../../functions/routers'
import { fetchAnnouncement } from './fetch-announcement'

export function componentDidMount() {
  const id = getAnnouncementPath()
  if (validId(id)) {
    fetchAnnouncement.call(this, id)
  }

  addEventListener('scroll', () => {
    if (window.scrollY > showcase.offsetTop + showcase.offsetHeight - 64 &&
        window.scrollY + window.innerHeight < footer.offsetTop) {
      if (this.props.showFixedPhone) return
      this.props.changeControl({ showFixedPhone: true })
    } else {
      if (!this.props.showFixedPhone) return
      this.props.changeControl({ showFixedPhone: false })
    }
  })
}

