import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import * as managers from './functions/managers'
import { ManagedPagination, ManagedButton } from 'managed-inputs'
import AnnouncementIndexTile from '../tile/tile'
import { controlProvider } from './functions/control-provider'
import { activeProvider } from './functions/active-provider'
import './styles/styles.scss'
import { buttonProvider } from './functions/button-provider'
import { triggerVisible } from './functions/trigger-visible'
import { extend } from './functions/extend'
import { destroy } from './functions/destroy'
import { edit } from './functions/edit'
import { pageHeaderProvider, sectionHeaderProvider } from '../../../../../../functions/header-providers'

class AnnouncementIndexList extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount

    this.controlProvider = controlProvider.bind(this)
    this.activeProvider = activeProvider.bind(this)
    this.buttonProvider = buttonProvider.bind(this)
    this.edit = edit.bind(this)
    this.triggerVisible = triggerVisible.bind(this)
    this.destroy = destroy.bind(this)

    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
    
    this.paginationManager = managers.paginationManager.bind(this)
    this.destroyManager = managers.destroyManager.bind(this)
    this.cancelDestroyManager = managers.cancelDestroyManager.bind(this)
    this.extend = extend.bind(this)
  }

  render() {

    return (
      <div id='announcement-index-list'>
        {
        this.props.beingDeleted &&
        <div className='delete'>
          <div className='cover' />
          <div className='monit'>
            <div className='text'>
              {
              this.languageHandler(`Usunięte ogłoszenie nie może być przywrócone. Czy na pewno chcesz usunąć ogłoszenie Nr ${this.props.beingDeleted}. `, `The deleted announcement cannot be restored. Are you sure you want to delete the announcement No. ${this.props.beingDeleted}`)
              }
            </div>
            <ManagedButton {...this.cancelDestroyManager()} />
            <ManagedButton {...this.destroyManager()} />
            <div className='float-clear' />
          </div>
        </div>
        }
        <div className='announcements-amount'>
          {this.props.amount} {this.languageHandler('Ogłoszenia', 'Announcements')} 
        </div>
        <div className='pagination-container'>
          <ManagedPagination {...this.paginationManager()} />
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
          active={this.activeProvider(announcement, index)}
          changeAnnouncement={this.props.changeAnnouncement} />
          ))
          }
          <div className='float-clear' />
        </div>
        <div className='pagination-container bottom'>
          <ManagedPagination {...this.paginationManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexList)