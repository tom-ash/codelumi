import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { radioManager } from './managers/managers.js'

export default props => {
  const { renderCatalogue } = props
  const ballClassNames = ['ball'].concat(renderCatalogue ? 'catalogue' : 'map')
  
  return (
    <div className='map-catalogue-switch'>
      <div className='switch'>
        <div className={ballClassNames.join(' ')} />
      </div>
      <ManagedRadio {...radioManager(props)} />
    </div>
  )
}
