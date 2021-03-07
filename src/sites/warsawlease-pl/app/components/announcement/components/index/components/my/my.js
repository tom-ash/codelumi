import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import * as managers from './functions/managers'
import Tile from '../../../common/tile/tile.js'
import { controlProvider } from './functions/control-provider'
import { buttonProvider } from './functions/button-provider'
import { triggerVisible } from './functions/trigger-visible'
import { extend } from './functions/extend'
import { destroy } from './functions/destroy'
import { edit } from './functions/edit'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { ManagedButton } from 'managed-inputs'
import AppContext from '../../../../../../constants/context.js'

class AnnouncementIndexMy extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.controlProvider = controlProvider.bind(this)
    this.buttonProvider = buttonProvider.bind(this)
    this.edit = edit.bind(this)
    this.triggerVisible = triggerVisible.bind(this)
    this.destroy = destroy.bind(this)
    this.destroyManager = managers.destroyManager.bind(this)
    this.cancelDestroyManager = managers.cancelDestroyManager.bind(this)
    this.extend = extend.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      amount,
      offset,
      lang,
      changeAnnouncementShowData,
      urlDataSynced
    } = this.props

    const toValue = offset + 10 < amount ? offset + 10 : amount
    let whichAnnouncements = `${offset + 1} - ${toValue} ${this.langHandler({ pl: 'z', en: 'of' })}`
    if (offset + 1 === amount) whichAnnouncements = `${offset + 1} ${this.langHandler({ pl: 'z', en: 'of' })}`

    if (!urlDataSynced) return null

    return (
      <div id='announcement-index-list'>
        {
        this.props.beingDeleted &&
        <div className='destroy'>
          <div className='cover' />
          <div className='monit'>
            <div className='text'>
              {
              this.langHandler({ pl: `Usunięte ogłoszenie nie może być przywrócone. Czy na pewno chcesz usunąć ogłoszenie Nr ${this.props.beingDeleted}. `, en: `The deleted announcement cannot be restored. Are you sure you want to delete the announcement No. ${this.props.beingDeleted}` })
              }
            </div>
            <ManagedButton {...this.cancelDestroyManager()} />
            <ManagedButton {...this.destroyManager()} />
            <div className='float-clear' />
          </div>
        </div>
        }
        <div className='announcements'>
          {this.props.announcements && this.props.announcements.map((announcement, index) => (
          <Tile
            venue='list'
            key={`${announcement.id}`}
            index={index}
            control={this.controlProvider(announcement, index)}
            first={index == 0}
            last={index == this.props.announcements.length - 1}
            id={announcement.id}
            category={announcement.category}
            district={announcement.district}
            pictures={announcement.pictures}
            area={announcement.area}
            netRentAmount={announcement.netRentAmount}
            netRentAmountPerSqm={announcement.netRentAmountPerSqm}
            grossRentAmount={announcement.grossRentAmount}
            grossRentAmountPerSqm={announcement.grossRentAmountPerSqm}
            rooms={announcement.rooms}
            rentCurrency={announcement.rentCurrency}
            floor={announcement.floor}
            totalFloors={announcement.totalFloors}
            availabilityDate={announcement.availabilityDate}
            control={this.controlProvider(announcement, index)}
            control={this.controlProvider(announcement, index)}
            lang={lang}
            changeData={changeAnnouncementShowData}
          />))}
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMy))
