import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../../../../../functions/language-handler'
import { googleMapHandler } from '../../../../../../functions/google-map-handler'

import { shouldLoadMap } from '../../../../../../functions/google-map-handler'
import { shouldLoadMarker } from '../../../../../../functions/google-map-handler'

class AnnouncementCreateMap extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.googleMapHandler = googleMapHandler.bind(this)
    this.shouldLoadMap = shouldLoadMap.bind(this)
    this.shouldLoadMarker = shouldLoadMarker.bind(this)
  }
  
  render() {
    if (!(this.props.latitude && this.props.longitude)) return null

    return (
      <div id='announcement-show-tile-map'>
        <div id='google-map-container'>
          <div id='google-map' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateMap)