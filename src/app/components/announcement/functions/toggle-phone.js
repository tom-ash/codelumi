import { apiUrl } from '../../../constants/urls'

export function togglePhone(e, showVenue, call) {
  e.stopPropagation()
  const phone = showVenue ? this.props.phone : this.props.announcement.phone
  if (phone && phone.length > 8) return
  const id = showVenue ? this.props.id : this.props.announcement.id
  fetch(`${apiUrl}/announcement/phone/${id}`, { headers: { 'Content-Type': 'application/json' } })
  .then(response => { if (response.ok) return response.json() })
  .then(jsonResponse => {
    if (this.props.isMobile && call) window.location.href=(`tel:${jsonResponse.phone}`)
    if (showVenue) return this.props.changeData({ phone: jsonResponse.phone })
    let announcement = { ...this.props.announcement }
    announcement.phone = jsonResponse.phone
    this.props.changeAnnouncement(announcement)
  })
}