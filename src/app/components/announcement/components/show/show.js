import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import { langObjHandler } from '../../../../functions/lang-handler'
import { phoneSwitchProvider } from '../../functions/phone-switch-provider'
import { togglePhone } from '../../functions/toggle-phone'
import { fixedPhoneHandler } from './functions/fixed-phone-handler'
import AnnouncementTile from './components/tile/tile'
import { sendAnalyticsEvent } from '../../../../functions/google-analytics/send-analytics-event'
import ScalableVectorGraphic from '../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
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
      scalableVectorGraphics,
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
      changeApp
    } = this.props

    const { phone } = this.state
    const deviceClasss = device === 'largePc' ? ' large-pc' : ''

    return (
      <div id='announcement-show' className={deviceClasss}>
        <div id='showcase' className='small-shadow'>
          <div className='name'>
            {this.props.name}
          </div>
          <div className='phone-showcase'>
            <div className='icon'>
              <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.phone} />
            </div>
            <div className='text'>
              {` ${phone}`}
              {phone && phone.length < 9 &&
              <u
                onClick={(e) => {
                  sendAnalyticsEvent({
                    eventCategory: 'Announcement Show',
                    eventAction: 'Phone Reveal Click',
                    eventLabel: id
                  })
                  this.togglePhone(e, venue)}
                }
              >
                {this.langObjHandler({ pl: 'Pokaż', en: 'Show' })}
              </u>}
            </div>
            <div className='float-clear' />
          </div>
          <div className='contact'>
            {this.phoneSwitchProvider()}
          </div>
        </div>
        <AnnouncementTile
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
          scalableVectorGraphics={scalableVectorGraphics}
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
