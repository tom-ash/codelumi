import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import langHandler from '../../../../functions/lang-handler'
import { togglePhone } from '../../functions/toggle-phone'
import Tile from '../common/tile/tile.js'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.langHandler = langHandler.bind(this)
    this.togglePhone = togglePhone.bind(this)
    this.state = { phone: null }
  }

  render() {
    const {
      lang,
      venue,
      id,
      category,
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
      name,
      link: annLink,
      links,
      locality,
      sublocality,
      title,
    } = this.props

    const { phone } = this.state
    const deviceClass = device === 'largePc' ? ' large-pc' : ''
    const showcaseProps = {
      announcerPhone: phone,
      announcementId: id,
      venue,
      togglePhone: this.togglePhone
    }
    const isMobile = ['largeTablet', 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1
    const link = links[`current/${lang}`]
    const path = link && link.path

    return (
      <div id='announcement-show' className={deviceClass}>
        <Tile
          venue='show'
          lang={lang}
          id={id}
          category={category}
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
          markerLoaded={markerLoaded}
          mapLoading={mapLoading}
          changeControl={changeControl}
          resetControl={resetControl}
          changeData={changeData}
          resetData={resetData}
          changeApp={changeApp}
          path={path}
          locality={locality}
          sublocality={sublocality}
          title={title}
          name={name}
          link={annLink}
          {...showcaseProps}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementShow))
