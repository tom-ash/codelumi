import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../../../functions/language-handler'
import { fetchPicture } from './functions/fetch-picture'
import { changePicture } from './functions/change-picture'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { parseDistrict } from '../../../../functions/district-parsers'
import { getCategoryIcon } from './functions/get-category-icon'
import { getPicture } from './functions/get-picture'
import { closeTile } from './functions/close-tile'
import { deepCopyAnnouncement } from './functions/deep-copy-announcement'
import { showAnnouncement } from './functions/show-announcement'
import { changeRoute } from '../../../../../../functions/routers'
import { phoneSwitchProvider } from '../../../../functions/phone-switch-provider'
import { togglePhone } from '../../../../functions/toggle-phone'
// import { rentProvider } from './functions/rent-provider'
import { rentPerSqmCounter } from '../../../../functions/rent-per-sqm-counter'
import { parseAvailabilityDate } from '../../../../functions/parse-availability-date'
import WindmillSpinner from '../../../../../support/components/spinner/components/windmill/windmill'
import { viewAnnouncement } from '../../../../functions/view-announcement'

import { secondaryDataProvider } from './functions/secondary-data-provider'

class AnnouncementIndexTile extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.fetchPicture = fetchPicture.bind(this)
    this.changePicture = changePicture.bind(this)
    this.getPicture = getPicture.bind(this)
    this.closeTile = closeTile.bind(this)
    this.deepCopyAnnouncement = deepCopyAnnouncement.bind(this)
    this.showAnnouncement = showAnnouncement.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.rentCurrency = parseCurrency(this.props.announcement.rent_currency)
    this.togglePhone = togglePhone.bind(this)
    this.rentPerSqmCounter = rentPerSqmCounter.bind(this)
    this.parseAvailabilityDate = parseAvailabilityDate.bind(this)
    this.viewAnnouncement = viewAnnouncement.bind(this)

    this.secondaryDataProvider = secondaryDataProvider.bind(this)

  }
  
  render() {
    const { announcement, control, active, venue, first } = this.props

    const { showLoader, show, visible } = announcement
    let coreClass = `core ${venue}`
    if (showLoader) coreClass += ' loader'
    if (!visible) coreClass += ' invisible'
    if (!announcement.pictures) return null
    if (!show) return null

    return (
      <div
      className={`announcement-index-tile${this.props.first ? ' first': ''}${this.props.last ? ' last': ''}${this.props.index % 2 === 0 ? ' even' : ''}`}>
        {
        venue === 'full' && !first &&
        <div className='divider'/>
        }

        {
        this.props.venue == 'map' &&
        <i className='fas fa-times close' onClick={this.closeTile}/>
        }
        {
        showLoader &&
        <div>
          <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
        </div>
        }
        <div className={`primary ${venue}`}>
              <div className='id'>
                {this.props.announcement.id}
              </div>
              <div className={`category ${this.props.announcement.category == '0' ? 'office' : 'usable-premises'}`}>
                {
                this.props.announcement.category == '0' ? this.languageHandler('Biuro', 'Office') : this.languageHandler('Lokal użytkowy', 'Usable Premises')
                }
              </div>
              <div className='district'>
                {parseDistrict(this.props.announcement.district)}
              </div>
            </div>
        <div className={coreClass}>



          <div
          style={{ backgroundImage: this.getPicture() }}
          onClick={() => this.showAnnouncement()}
          className={`picture ${venue}`}>
            {this.phoneSwitchProvider()}
            <div
            className='arrow left'
            onClick={(e) => this.changePicture(e, 'previous')}>
              <div className='cover'>
                <i className='fas fa-chevron-left' />
              </div>
            </div>
            <div
            className='arrow right'
            onClick={(e) => this.changePicture(e, 'next')}>
              <div className='cover'>
                <i className='fas fa-chevron-right' />
              </div>
            </div>
          </div>
          {this.secondaryDataProvider()}
          <div className={`tertiary ${venue}`}>
            <div className='rooms'>
              {/* <i className='fas fa-door-closed'/> */}
              <strong>{this.props.announcement.rooms}</strong> {this.languageHandler('pomieszczeń', 'rooms')}
            </div>
            <div className='floor'>
              {/* <i className='fas fa-layer-group'/> */}
              <strong>{this.props.announcement.floor}</strong> {this.languageHandler('piętro', 'floor')}
              &nbsp;
              ( z <strong>{this.props.announcement.total_floors}</strong> )
            </div>
            {/* <div className='total-floors'>
              <i className='fas fa-building'/>{this.props.announcement.total_floors}
            </div>
            <div className='calendar'>
              <i className='fas fa-calendar-alt'/>{this.parseAvailabilityDate(this.props.announcement.availability_date)}
            </div> */}
            <div className='float-clear' />
          </div>
        </div>
        {control}
        {active}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexTile)