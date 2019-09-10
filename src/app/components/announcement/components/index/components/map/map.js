import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { buildRequestParameters } from '../../functions/build-parameters'
import AnnouncementIndexTile from '../tile/tile'
import { buildSelectCategories } from '../../../../functions/build-select-categories'
import { buildSelectDistricts } from '../../../../functions/build-select-districts'
import * as managers from '../../functions/managers'
import { changeInput } from './functions/change-input'
import { labelProvider } from '../../functions/label-provider'
import { googleMapHandler } from '../../../../functions/google-map-handler'
import { fetchTile } from './functions/fetch-tile'
import { panelProvider } from '../../functions/panel-provider'
import { subInputValueParser } from '../../functions/sub-input-value-parser'
import { compositeInputProvider } from '../../functions/composite-input-provider'
import { compositeManagerProvider, subInputMinManagerProvider, subInputMaxManagerProvider } from '../../functions/managerProviders'
import './styles/styles.scss'

import { subInputNames } from '../../constants/subInputNames'

class AnnouncementIndexSearchFull extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.buildRequestParameters = buildRequestParameters.bind(this)
    this.buildSelectCategories = buildSelectCategories.bind(this)
    this.buildSelectDistricts = buildSelectDistricts.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changeInput = changeInput.bind(this)
    this.panelProvider = panelProvider.bind(this)
    this.googleMapHandler = googleMapHandler.bind(this)
    this.fetchTile = fetchTile.bind(this)
    this.subInputValueParser = subInputValueParser.bind(this)
    this.compositeInputProvider = compositeInputProvider.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.compositeManagerProvider = compositeManagerProvider.bind(this)
    this.subInputMinManagerProvider = subInputMinManagerProvider.bind(this)
    this.subInputMaxManagerProvider = subInputMaxManagerProvider.bind(this);
    subInputNames.map(inputName => {
      this[`${inputName}Manager`] = this.compositeManagerProvider(inputName)
      this[`${inputName}MinManager`] = this.subInputMinManagerProvider(inputName)
      this[`${inputName}MaxManager`] = this.subInputMaxManagerProvider(inputName)
    })
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.availabilityDateManager = managers.availabilityDateManager.bind(this)
  }

  render() {
    console.log(this.props.showList)
    return (
      <div id='announcement-index-map' className={`${this.props.showList ? 'hidden' : 'visible'}`}>
        <div id='google-map-container'>
          <h3>
            <i className={`fas fa-map-marker-alt`} />{this.languageHandler(`Wyszukaj na mapie`, `Search on Map`)}
          </h3>
          {this.panelProvider()}
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