import React from 'react'
import { useGoogleMaps } from '../../../../../mapawynajmu-pl/app/functions/use-google-maps'

interface GoogleMapInterface {
  (): React.ReactElement
}

export const GoogleMap: GoogleMapInterface = () => {
  useGoogleMaps()

  return (
    <div id='google-map-container'>
      <div id='google-map' />
    </div>
  )
}
