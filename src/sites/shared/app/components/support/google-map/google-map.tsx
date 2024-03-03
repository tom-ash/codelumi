import React from 'react'

interface GoogleMapInterface {
  (): React.ReactElement
}

export const GoogleMap: GoogleMapInterface = () => {
  return (
    <div id='google-map-container'>
      <div id='google-map' />
    </div>
  )
}
