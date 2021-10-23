import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { radioManager } from './managers/managers.js'
import Area from './components/area/area.js'

export default props => {
  const { device, renderCatalogue } = props
  const ballClassNames = ['ball'].concat(renderCatalogue ? 'catalogue' : 'map')
  
  return (
    <div>
      {device === 'largePc' && <Area {...props} />}
      <div className='map-catalogue-switch'>
        <div className='switch'>
          <div className={ballClassNames.join(' ')} />
        </div>
        <ManagedRadio {...radioManager(props)} />
      </div>
    </div>
  )
}
