import React from 'react'
import ScalableVectorGraphic from '../../support/components/scalable-vector-graphic/scalable-vector-graphic'

export function phoneSwitchProvider() {
  const { phone } = this.state
  const { scalableVectorGraphics } = this.props
  let phoneClass =`phone${phone && phone.length > 8 ? ' open' : ''}`

  return (
    <div
      className={phoneClass}
      onClick={e => this.togglePhone()}
    >
      <div className='svg-container'>
        <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.phone} />
      </div>
      {phone &&
      <a href={`tel:${phone}`}>
        {phone}
      </a>}
    </div>
  )
}
