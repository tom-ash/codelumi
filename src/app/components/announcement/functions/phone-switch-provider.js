import React from 'react'

export function phoneSwitchProvider() {
  const { phone } = this.state
  let phoneClass =`phone${phone && phone.length > 8 ? ' open' : ''}`

  return (
    <div
      className={phoneClass}
      onClick={e => this.togglePhone()}
    >
      <i className='fas fa-phone' />
      {phone &&
      <a href={`tel:${phone}`}>
        {phone}
      </a>}
    </div>
  )
}
