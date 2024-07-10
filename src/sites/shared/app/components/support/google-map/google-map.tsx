import React from 'react'
import { useGoogleMaps } from '../../../functions/use-google-maps'
import { MapStyles } from '../map-index/map-index'

interface GoogleMapInterface {
  (props: {
    mapStyles?: MapStyles
  }): React.ReactElement
}

const apiKey = 'AIzaSyAUEJ1HRdOeh_QKQTUU-sCAgnerzNJY-8k'

export const GoogleMap: GoogleMapInterface = (props) => {
  const { mapStyles } = props

  useGoogleMaps(apiKey, mapStyles)

  return (
    <div id='google-map-container'>
      <div id='google-map' />
    </div>
  )
}
