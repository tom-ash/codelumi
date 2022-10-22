import React from 'react'
import SVG from '../../support/components/svg/svg'

export function phoneSwitchProvider() {
  const { phone } = this.state
  let phoneClass = `phone${phone && phone.length > 8 ? ' open' : ''}`

  return (
    <div className={phoneClass} onClick={e => this.togglePhone()}>
      <div className='svg-container'>
        <SVG name='phone' />
      </div>
      {phone && <a href={`tel:${phone}`}>{phone}</a>}
    </div>
  )
}
