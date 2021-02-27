import React from 'react'
import * as lifecycle from './functions/lifecycle'
import { googleMapHandler } from '../../../../../functions/google-map-handler.js'
import { shouldSetUpGoogleMaps } from '../../../../../functions/google-map-handler'
import { shouldSetUpMarker } from '../../../../../functions/google-map-handler'
import Header from '../../../../../../support/components/header/header.js'
import { HEADER } from './constants/texts.js'

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
      longitude,
      langHandler
    } = this.props
    
    if (!(latitude && longitude)) return null

    return (
      <div className='announcement-tile-map'>
        <Header tier={2} text={langHandler(HEADER)} />
        <div id='google-map-container'>
          <div id='google-map' />
        </div>
      </div>
    )
  }
}

export default AnnouncementCreateMap