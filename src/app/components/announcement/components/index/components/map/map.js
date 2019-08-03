import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { buildRequestParameters } from '../../functions/build-parameters'
import AnnouncementIndexTile from '../tile/tile'
import { buildPanel } from './functions/build-panel'
import { buildSelectCategories } from '../../../../functions/build-select-categories'
import { buildSelectDistricts } from '../../../../functions/build-select-districts'
import * as managers from '../../functions/managers'
import { changeInput } from './functions/change-input'
import { labelProvider } from '../../functions/label-provider'
import { googleMapHandler } from '../../../../functions/google-map-handler'
import { fetchTile } from './functions/fetch-tile'

import './styles/styles.scss'

class AnnouncementIndexSearchFull extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.buildPanel = buildPanel.bind(this)
    this.buildRequestParameters = buildRequestParameters.bind(this)
    this.buildSelectCategories = buildSelectCategories.bind(this)
    this.buildSelectDistricts = buildSelectDistricts.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changeInput = changeInput.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.rentAmountMinManager = managers.rentAmountMinManager.bind(this)
    this.rentAmountMaxManager = managers.rentAmountMaxManager.bind(this)
    this.areaMinManager = managers.areaMinManager.bind(this)
    this.areaMaxManager = managers.areaMaxManager.bind(this)
    this.roomsMinManager = managers.roomsMinManager.bind(this)
    this.roomsMaxManager = managers.roomsMaxManager.bind(this)
    this.floorMinManager = managers.floorMinManager.bind(this)
    this.floorMaxManager = managers.floorMaxManager.bind(this)
    this.totalFloorsMinManager = managers.totalFloorsMinManager.bind(this)
    this.totalFloorsMaxManager = managers.totalFloorsMaxManager.bind(this)
    this.availabilityDateManager = managers.availabilityDateManager.bind(this)
    this.googleMapHandler = googleMapHandler.bind(this)
    this.fetchTile = fetchTile.bind(this)
  }

  
  render() {
    return (
      <div id='announcement-index-map'>
        {this.buildPanel()}
        <div id='google-map-container'>
          <div className='results'>
            {this.props.amount}
          </div>
          <div id='google-map' />
          {
          this.props.tile && Object.keys(this.props.tile).length > 1 &&
          <AnnouncementIndexTile announcement={this.props.tile} venue='map'
          changeAnnouncement={this.props.changeAnnouncement}/>
          }
        </div>
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexSearchFull)