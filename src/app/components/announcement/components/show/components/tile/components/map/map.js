import React from 'react'
import * as lifecycle from './functions/lifecycle'
import { googleMapHandler } from '../../../../../../functions/google-map-handler'
import { shouldSetUpGoogleMaps } from '../../../../../../functions/google-map-handler'
import { shouldSetUpMarker } from '../../../../../../functions/google-map-handler'

class AnnouncementCreateMap extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.googleMapHandler = googleMapHandler.bind(this)
    this.shouldSetUpGoogleMaps = shouldSetUpGoogleMaps.bind(this)
    this.shouldSetUpMarker = shouldSetUpMarker.bind(this)
  }
  
  render() {
    const {
      latitude,
      longitude
    } = this.props
    
    if (!(latitude && longitude)) return null

    return (
      <div className='announcement-show-tile-map'>
        <div id='google-map-container'>
          <div id='google-map' />
        </div>
      </div>
    )
  }
}

export default AnnouncementCreateMap