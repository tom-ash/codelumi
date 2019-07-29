import React from 'react'

export function phoneSwitchProvider() {
  if (this.props.venue == 'list') return
  const showVenue = this.props.venue == 'show'
  const phone = showVenue ? this.props.phone : this.props.announcement.phone
  let phoneClass =`phone${phone && phone.length > 8 ? ' open' : ''}`
  if (!this.props.showFixedPhone) phoneClass += ' hidden'
  return (
    <div
    className={phoneClass}
    onClick={(e) => this.togglePhone(e, showVenue, true)}>
      <i className='fas fa-phone' />
      <a href={`tel:${phone}`}>{phone}</a>
    </div>
  )
}
