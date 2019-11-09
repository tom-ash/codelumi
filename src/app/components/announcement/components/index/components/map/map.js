import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { buildRequestParameters } from '../../functions/build-parameters'
import AnnouncementIndexTile from '../tile/tile'
import { googleMapHandler } from '../../../../functions/google-map-handler'
import { fetchTile } from './functions/fetch-tile'
import './styles/styles.scss'

class AnnouncementIndexSearchFull extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.buildRequestParameters = buildRequestParameters.bind(this)
    this.googleMapHandler = googleMapHandler.bind(this)
    this.fetchTile = fetchTile.bind(this)
  }

  render() {
    const {
      showList,
      tile,
      changeAnnouncement
    } = this.props

    return (
      <div
        id='announcement-index-map'
        className={`${showList ? 'hidden' : 'visible'}`}
      >
        <div id='google-map-container'>
          <div id='google-map' />
          {this.props.tile && Object.keys(tile).length > 1 &&
          <AnnouncementIndexTile announcement={tile} venue='map'
          changeAnnouncement={changeAnnouncement} />}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexSearchFull)