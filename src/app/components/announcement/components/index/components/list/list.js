import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { getAnnouncements } from './functions/get-announcements'
import { switchesManager, sortManager, paginationManager } from './functions/managers'
import { ManagedMultipleCheckbox, ManagedSelect, ManagedPagination } from 'managed-inputs'
import AnnouncementIndexTile from '../tile/tile'
import { controlProvider } from './functions/control-provider'
import './styles/styles.scss'
import { buttonProvider } from './functions/button-provider'
import { activate } from './functions/activate'
import { destroy } from './functions/destroy'
import { edit } from './functions/edit'
import { changeRoute } from '../../../../../../functions/routers'
import { pageHeaderProvider, sectionHeaderProvider } from '../../../../../../functions/header-providers'

class AnnouncementIndexList extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    // this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    // this.componentDidUpdate = lifecycle.componentDidUpdate
    // this.getAnnouncements = getAnnouncements.bind(this)
    // this.buildRequestParameters = buildRequestParameters.bind(this)
    // this.readUrlParameters = readUrlParameters.bind(this)
    // this.paginationManager = paginationManager.bind(this)
    this.getAnnouncements = getAnnouncements.bind(this)
    this.controlProvider = controlProvider.bind(this)
    this.buttonProvider = buttonProvider.bind(this)
    this.edit = edit.bind(this)
    this.activate = activate.bind(this)
    this.destroy = destroy.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.switchesManager = switchesManager.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
    this.sortManager = sortManager.bind(this)
    this.paginationManager = paginationManager.bind(this)
  }

  render() {
    return (
      <div id='announcement-index-list'>
        {this.pageHeaderProvider('fas fa-list-ol', { polish: 'Dodane ogłoszenia', english: 'Added Announcements' })}
        {this.sectionHeaderProvider('fas fa-filter', { polish: 'Filtry', english: 'Filters' })}
        <div className='filters'>
          <ManagedMultipleCheckbox manager={this.switchesManager} />
          <div className='float-clear' />
        </div>
        <ManagedSelect manager={this.sortManager} />
        <div className='float-clear' />
        {this.sectionHeaderProvider('fas fa-bars', { polish: 'Lista', english: 'List' })}
        <div className='first-pagination'>
          <ManagedPagination manager={this.paginationManager} />
        </div>
        <div className='announcements'>
          {
          this.props.announcements && this.props.announcements.map((announcement, index) => {
            announcement.index = index
            return <AnnouncementIndexTile key={`${announcement.id}`} venue='list' announcement={announcement}
                   announcements={this.props.announcements} index={index}
                   control={this.controlProvider(announcement, index)}
                   changeAnnouncement={this.props.changeAnnouncement}/>
          })
          }
          <div className='float-clear' />
        </div>
        <ManagedPagination manager={this.paginationManager} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexList)