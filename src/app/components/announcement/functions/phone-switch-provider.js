import React from 'react'
import { apiUrl } from '../../../constants/urls'

export function phoneSwitchProvider() {
  if (this.props.venue == 'list') return
  const showVenue = this.props.venue == 'show'
  const phone = showVenue ? this.props.phone : this.props.announcement.phone
  return (
    <div
    className={`phone${phone ? ' open' : ''}`}
    onClick={(e) => togglePhone.call(this, e, showVenue)}>
      <i className='fas fa-phone' />
      {phone}
    </div>
  )
}

function togglePhone(e, showVenue) {
  e.stopPropagation()
  const phone = showVenue ? this.props.phone : this.props.announcement.phone
  if (phone) return
  const id = showVenue ? this.props.id : this.props.announcement.id
  fetch(`${apiUrl}/announcement/phone/${id}`, { headers: { 'Content-Type': 'application/json' } })
  .then(response => { if (response.ok) return response.json() })
  .then(jsonResponse => {
    if (showVenue) return this.props.changeData({ phone: jsonResponse.phone })
    let announcement = { ...this.props.announcement }
    announcement.phone = jsonResponse.phone
    this.props.changeAnnouncement(announcement)
  })
}