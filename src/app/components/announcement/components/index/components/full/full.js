import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { getAnnouncements } from '../../functions/get-announcements'
import { readUrlParameters } from './functions/read-url-parameters'
import { buildRequestParameters } from '../../functions/build-parameters'
import * as managers from '../../functions/managers'
import { ManagedPagination } from 'managed-inputs'
import AnnouncementIndexTile from '../tile/tile'
import { panel } from './functions/panel'
import { changeInput } from './functions/change-input'
import { pageHeaderProvider, sectionHeaderProvider } from '../../../../../../functions/header-providers'

import { labelProvider } from '../../functions/label-provider'

import { buildSelectCategories } from '../../../../functions/build-select-categories'
import { buildSelectDistricts } from '../../../../functions/build-select-districts'

import { buttonLabelHandler } from '../../functions/button-label-handler'
import { rentManager,
         rentMinManager,
         rentMaxManager,
         rentCurrencyManager,
         areaManager,
         areaMinManager,
         areaMaxManager,
         roomsManager,
         roomsMinManager,
         roomsMaxManager,
         floorManager,
         floorMinManager,
         floorMaxManager,
         totalFloorsManager,
         totalFloorsMinManager,
         totalFloorsMaxManager,
         buttonManager,
         paginationManager } from './functions/managers'

import { getAnnouncementAmount } from '../../functions/get-announcement-amount'

import { groupInputJoiner } from './functions/group-input-joiner'

import './styles/styles.scss'

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
    this.panel = panel.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
    this.buildSelectCategories = buildSelectCategories.bind(this)
    this.buildSelectDistricts = buildSelectDistricts.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changeInput = changeInput.bind(this)

    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.availabilityDateManager = managers.availabilityDateManager.bind(this)

        




    this.rentManager = rentManager.bind(this)
    this.rentMinManager = rentMinManager.bind(this)
    this.rentMaxManager = rentMaxManager.bind(this)
    this.rentCurrencyManager = rentCurrencyManager.bind(this)
    this.areaManager = areaManager.bind(this)
    this.areaMinManager = areaMinManager.bind(this)
    this.areaMaxManager = areaMaxManager.bind(this)
    this.roomsManager = roomsManager.bind(this)
    this.roomsMinManager = roomsMinManager.bind(this)
    this.roomsMaxManager = roomsMaxManager.bind(this)
    this.floorManager = floorManager.bind(this)
    this.floorMinManager = floorMinManager.bind(this)
    this.floorMaxManager = floorMaxManager.bind(this)

    this.totalFloorsManager = totalFloorsManager.bind(this)
    this.totalFloorsMinManager = totalFloorsMinManager.bind(this)
    this.totalFloorsMaxManager = totalFloorsMaxManager.bind(this)


    this.buttonLabelHandler = buttonLabelHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.getAnnouncementAmount = getAnnouncementAmount.bind(this)



    this.groupInputJoiner = groupInputJoiner.bind(this)
  }

  render() {
    return (
      <div id='announcement-index-full'>
        {this.pageHeaderProvider('fas fa-search', { polish: 'Wyszukiwanie ogłoszeń', english: 'Announcements Search' })}
        {this.panel()}
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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexFull)