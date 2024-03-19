import React from 'react'
import { MapMarker } from '../../../../../../../../shared/app/components/support/map-marker/map-marker'

export const Location = () => {
  return (
    <div className='location'>
      <h2>Lokalizacja</h2>
      <MapMarker />
    </div>
  )
}
