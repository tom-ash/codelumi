import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import PrimaryData from './components/primary-data/primary-data'
import SecondaryData from './components/secondary-data.js/secondary-data'
import Picture from './components/picture/picture'
import TertiaryData from './components/tertiary-data/tertiary-data'
import { languageHandler } from '../../../../../../functions/language-handler'
import { fetchPicture } from './functions/fetch-picture'
import { changePicture } from './functions/change-picture'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { parseDistrict } from '../../../../functions/district-parsers'
import { getPicture } from './functions/get-picture'
import { closeTile } from './functions/close-tile'
import { deepCopyAnnouncement } from './functions/deep-copy-announcement'
import { showAnnouncement } from './functions/show-announcement'
import { changeRoute } from '../../../../../../functions/routers'
import { phoneSwitchProvider } from '../../../../functions/phone-switch-provider'
import { togglePhone } from '../../../../functions/toggle-phone'
import { rentPerSqmCounter } from '../../../../functions/rent-per-sqm-counter'
import { parseAvailabilityDate } from '../../../../functions/parse-availability-date'
import WindmillSpinner from '../../../../../support/components/spinner/components/windmill/windmill'
import { viewAnnouncement } from '../../../../functions/view-announcement'

class AnnouncementIndexTile extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
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
    this.rentCurrency = parseCurrency(this.props.announcement.rentCurrency)
    this.togglePhone = togglePhone.bind(this)
    this.rentPerSqmCounter = rentPerSqmCounter.bind(this)
    this.parseAvailabilityDate = parseAvailabilityDate.bind(this)
    this.viewAnnouncement = viewAnnouncement.bind(this)
    this.SecondaryData = SecondaryData.bind(this)
  }
  
  render() {
    const {
      languageHandler,
      getPicture,
      showAnnouncement,
      changePicture,
      phoneSwitchProvider,
      parseAvailabilityDate
    } = this
    const {
      announcement,
      control,
      active,
      venue,
      isMobile,
      first,
      scrollY
    } = this.props
    const {
      id,
      category,
      district,
      showLoader,
      visible,
      area,
      rentCurrency,
      netRentAmount,
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm,
      availabilityDate,
      rooms,
      floor,
      totalFloors
    } = announcement

    let coreClass = `core ${venue}`
    if (showLoader) coreClass += ' loader'
    if (!visible) coreClass += ' invisible'
    if (!announcement.pictures) return null

    return (
      <div
      ref={this.container}
      className={`announcement-index-tile${this.props.first ? ' first': ''}${this.props.last ? ' last': ''}${this.props.index % 2 === 0 ? ' even' : ''}`}>
        {venue === 'full' &&
        <div className='divider'/>}
        {venue == 'map' &&
        <i className='fas fa-times close' onClick={this.closeTile}/>}
        {showLoader &&
        <WindmillSpinner spinnerClass='windmill-medium-spinner'/>}
        <PrimaryData
          venue={venue}
          isMobile={isMobile}
          id={id}
          category={category}
          languageHandler={languageHandler}
          parseDistrict={parseDistrict}
          district={district}
        />
        <div className={coreClass}>
          <Picture
            getPicture={getPicture}
            showAnnouncement={showAnnouncement}
            venue={venue}
            phoneSwitchProvider={phoneSwitchProvider}
            changePicture={changePicture}
            parseAvailabilityDate={parseAvailabilityDate}
            availabilityDate={availabilityDate}
          />
          <SecondaryData
            venue={venue}
            languageHandler={languageHandler}
            area={area}
            rentCurrency={rentCurrency}
            parseCurrency={parseCurrency}
            netRentAmount={netRentAmount}
            netRentAmountPerSqm={netRentAmountPerSqm}
            grossRentAmount={grossRentAmount}
            grossRentAmountPerSqm={grossRentAmountPerSqm}
          />
          <TertiaryData
            languageHandler={languageHandler}
            venue={venue}
            rooms={rooms}
            floor={floor}
            totalFloors={totalFloors}
          />
        </div>
        {control}
        {active}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexTile)