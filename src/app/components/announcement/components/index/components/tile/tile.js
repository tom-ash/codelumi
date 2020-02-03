import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import PrimaryData from './components/primary-data/primary-data'
import SecondaryData from './components/secondary-data.js/secondary-data'
import Picture from './components/picture/picture'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { fetchPicture } from './functions/fetch-picture'
import { changePicture } from './functions/change-picture'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { parseDistrict } from '../../../../functions/district-parsers'
import { getPicture } from './functions/get-picture'
import { closeTile } from './functions/close-tile'
import { deepCopyAnnouncement } from './functions/deep-copy-announcement'
import { phoneSwitchProvider } from '../../../../functions/phone-switch-provider'
import { togglePhone } from '../../../../functions/toggle-phone'
import { rentPerSqmCounter } from '../../../../functions/rent-per-sqm-counter'
import { parseAvailabilityDate } from '../../../../functions/parse-availability-date'
import WindmillSpinner from '../../../../../support/components/spinner/components/windmill/windmill'
import { viewAnnouncement } from '../../../../functions/view-announcement'
import { changeRoute } from '../../../../../../functions/routers'
import { CloseButton } from '../../../../../support/components/close-button/close-button'
import { floorParser } from '../../../../functions/floor-parser'

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
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.rentCurrency = parseCurrency(this.props.announcement.rentCurrency)
    this.togglePhone = togglePhone.bind(this)
    this.rentPerSqmCounter = rentPerSqmCounter.bind(this)
    this.parseAvailabilityDate = parseAvailabilityDate.bind(this)
    this.viewAnnouncement = viewAnnouncement.bind(this)
    this.SecondaryData = SecondaryData.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.floorParser = floorParser.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }
  
  render() {
    const { languageHandler, getPicture, changePicture, phoneSwitchProvider, parseAvailabilityDate } = this
    const { announcement, control, venue, isMobile } = this.props
    const {
      id, category, district, showLoader, area, rentCurrency, netRentAmount, netRentAmountPerSqm,
      grossRentAmount, grossRentAmountPerSqm, availabilityDate, rooms, floor, totalFloors
    } = announcement

    if (!announcement.pictures) return null

    return (
      <div
      ref={this.container}
      className={`announcement-index-tile${this.props.first ? ' first': ''}${this.props.last ? ' last': ''}${this.props.index % 2 === 0 ? ' even' : ''}`}>
        {venue == 'map' && <CloseButton classNames='map-tile' onClick={this.closeTile}/>}
        {showLoader &&
        <WindmillSpinner spinnerClass='windmill-medium-spinner'/>}
        <PrimaryData
          venue={venue}
          isMobile={isMobile}
          id={id}
          category={category}
          languageHandler={languageHandler}
          district={district}
          parseDistrict={parseDistrict}
          area={area}
          rooms={rooms}
        />
        <Picture
          announcementId={announcement.id}
          getPicture={getPicture}
          changeRoute={this.changeRoute}
          venue={venue}
          phoneSwitchProvider={phoneSwitchProvider}
          changePicture={changePicture}
          
        />
        <SecondaryData
          venue={venue}
          languageHandler={languageHandler}
          area={area}
          rooms={rooms}
          rentCurrency={rentCurrency}
          parseCurrency={parseCurrency}
          netRentAmount={netRentAmount}
          netRentAmountPerSqm={netRentAmountPerSqm}
          grossRentAmount={grossRentAmount}
          grossRentAmountPerSqm={grossRentAmountPerSqm}
          rooms={rooms}
          floor={this.floorParser(floor)}
          totalFloors={totalFloors}
          parseAvailabilityDate={parseAvailabilityDate}
          availabilityDate={availabilityDate}
        />
        {control}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexTile)
