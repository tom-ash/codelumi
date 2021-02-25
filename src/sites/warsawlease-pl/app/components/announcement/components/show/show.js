import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { langObjHandler } from '../../../../functions/lang-handler'
import { phoneSwitchProvider } from '../../functions/phone-switch-provider'
import { togglePhone } from '../../functions/toggle-phone'
import { fixedPhoneHandler } from './functions/fixed-phone-handler'
import Showcase from './components/showcase/showcase.js'
import Tile from '../common/tile/tile.js'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.langObjHandler = langObjHandler.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.togglePhone = togglePhone.bind(this)
    this.fixedPhoneHandler = fixedPhoneHandler.bind(this)
    this.state = {
      phone: null
    }
  }

  render() {
    const {
      lang,
      venue,
      id,
      category,
      district,
      area,
      pictures,
      pictureIndex,
      rentCurrency,
      netRentAmount,
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm,
      rooms,
      floor,
      totalFloors,
      availabilityDate,
      features,
      furnishings,
      latitude,
      longitude,
      polishDescription,
      englishDescription,
      isMobile,
      device,
      scripts,
      loadMap,
      mapLoaded,
      loadMarker,
      markerLoaded,
      mapLoading,
      changeControl,
      resetControl,
      changeData,
      resetData,
      changeApp,
      name
    } = this.props

    const { phone } = this.state
    const deviceClasss = device === 'largePc' ? ' large-pc' : ''
    const showcaseProps = { announcerName: name, announcerPhone: phone,
      announcementId: id, togglePhone: this.togglePhone, langObjHandler: this.langObjHandler, venue }

    return (
      <div id='announcement-show' className={deviceClasss}>
        <Showcase { ...showcaseProps } />
        <div className='contact'>
          {this.phoneSwitchProvider()}
        </div>
        <Tile
          venue='show'
          lang={lang}
          id={id}
          category={category}
          district={district}
          area={area}
          pictures={pictures}
          pictureIndex={pictureIndex}
          rentCurrency={rentCurrency}
          netRentAmount={netRentAmount}
          netRentAmountPerSqm={netRentAmountPerSqm}
          grossRentAmount={grossRentAmount}
          grossRentAmountPerSqm={grossRentAmountPerSqm}
          rooms={rooms}
          floor={floor}
          totalFloors={totalFloors}
          availabilityDate={availabilityDate}
          features={features}
          furnishings={furnishings}
          latitude={latitude}
          longitude={longitude}
          polishDescription={polishDescription}
          englishDescription={englishDescription}
          isMobile={isMobile}
          device={device}
          scripts={scripts}
          loadMap={loadMap}
          mapLoaded={mapLoaded}
          loadMarker={loadMarker}
          latitude={latitude}
          longitude={longitude}
          markerLoaded={markerLoaded}
          mapLoading={mapLoading}
          changeControl={changeControl}
          resetControl={resetControl}
          changeData={changeData}
          resetData={resetData}
          changeApp={changeApp}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementShow))
