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
    this.componentWillUnmount = lifecycle.componentWillUnmount
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
        <div className='panel'>
          <div className='switches'>
            <ManagedMultipleCheckbox manager={this.switchesManager} />
          </div>
          <ManagedSelect manager={this.sortManager} />
        </div>
        <div className='announcements-amount'>
          {this.languageHandler('Znaleziono:', 'Found:')} {this.props.amount}
        </div>
        <div className='pagination-container'>
          <ManagedPagination manager={this.paginationManager} />
        </div>
        <div className='announcements'>
          {
          this.props.announcements && this.props.announcements.map((announcement, index) => (
          <AnnouncementIndexTile
          key={`${announcement.id}`}
          index={index}
          first={index == 0}
          last={index == this.props.announcements.length - 1}
          venue='list'
          announcement={announcement}
          announcements={this.props.announcements}
          control={this.controlProvider(announcement, index)}
          changeAnnouncement={this.props.changeAnnouncement} />
          ))
          }
          <div className='float-clear' />
        </div>
        <div className='pagination-container'>
          <ManagedPagination manager={this.paginationManager} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexList)