import { getAnnouncementPath, validId } from '../../../functions/routers'
import { fetchAnnouncement } from './fetch-announcement'

export function componentDidMount() {
  const id = getAnnouncementPath()
  if (validId(id)) fetchAnnouncement.call(this, id)
  addEventListener('scroll', this.fixedPhoneHandler)
}

export function componentWillUnmount() {
  removeEventListener('scroll', this.fixedPhoneHandler)
}
