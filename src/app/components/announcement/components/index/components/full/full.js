import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { getAnnouncements } from '../../functions/get-announcements'
import { readUrlParameters } from './functions/read-url-parameters'
import { buildRequestParameters } from '../../functions/build-parameters'
import { ManagedPagination } from 'managed-inputs'
import AnnouncementIndexTile from '../tile/tile'
import { panelProvider } from '../../functions/panel-provider'
import { changeInput } from './functions/change-input'
import { pageHeaderProvider, sectionHeaderProvider } from '../../../../../../functions/header-providers'
import { labelProvider } from '../../functions/label-provider'
import { buildSelectCategories } from '../../../../functions/build-select-categories'
import { buildSelectDistricts } from '../../../../functions/build-select-districts'
import { buttonLabelHandler } from '../../functions/button-label-handler'
import { getAnnouncementAmount } from '../../functions/get-announcement-amount'
import { subInputValueParser } from '../../functions/sub-input-value-parser'
import { buttonManager, paginationManager } from './functions/managers'
import * as managers from '../../functions/managers'
import * as lifecycle from './functions/lifecycle'
import './styles/styles.scss'
import { compositeManagerProvider, subInputMinManagerProvider, subInputMaxManagerProvider } from '../../functions/managerProviders'
import { compositeInputProvider } from '../../functions/composite-input-provider'

import { subInputNames } from '../../constants/subInputNames'

class AnnouncementIndexFull extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.getAnnouncements = getAnnouncements.bind(this)
    this.buildRequestParameters = buildRequestParameters.bind(this)
    this.readUrlParameters = readUrlParameters.bind(this)
    this.paginationManager = paginationManager.bind(this)
    this.panelProvider = panelProvider.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
    this.buildSelectCategories = buildSelectCategories.bind(this)
    this.buildSelectDistricts = buildSelectDistricts.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changeInput = changeInput.bind(this)
    this.compositeInputProvider = compositeInputProvider.bind(this)
    this.buttonLabelHandler = buttonLabelHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.getAnnouncementAmount = getAnnouncementAmount.bind(this)
    this.subInputValueParser = subInputValueParser.bind(this)
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
    return (
      <div id='announcement-index-full'>
        <h2 className='motto'>
          <div className='main'>
          {this.languageHandler('Znajdź się w Warszawie', 'Find Yourself in Warsaw')}
          </div>
          <div className='add-on'>
            {this.languageHandler(<span>Ogłoszenia wynajmu biur i lokali użytkowych w&nbsp;Warszawie.</span>,
                                  <span>Warsaw Offices and Usable Premises Lease&nbsp;Announcements.</span>)}
          </div>
        </h2>
        <h3>
          <i className={`fas fa-bars`} />{this.languageHandler(`Wyszukaj na liście`, `Search on List`)}
        </h3>
        {this.panelProvider()}
        {
        this.props.searchInitiated &&
        <div>
          <div id='announcement-index-full-scroll-anchor' />
          <div className='announcements'>
            {
            this.props.announcements && this.props.announcements.map((announcement, index) => {
              announcement.index = index
              return <AnnouncementIndexTile index={index} key={`announcement${announcement.id}`}
                    announcement={announcement} announcements={this.props.announcements}
                    changeAnnouncement={this.props.changeAnnouncement}/>
            })
            }
            <div className='float-clear' />
            <div className={this.props.connecting ? 'connecting' : '' }>
              <ManagedPagination manager={this.paginationManager} />
            </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexFull)