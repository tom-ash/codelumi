import React from 'react'
import AnnouncementShowPictures from './components/pictures/pictures'
import AnnouncementShowPrimary from './components/primary/primary'
import AnnouncementShowFeaturesFurnishings from './components/features-furnishings/features-furnishings'
import AnnouncementShowDescription from './components/description/description'
import AnnouncementShowMap from './components/map/map'
import { langObjHandler } from '../../../../../../functions/lang-handler'
import { parseCategory } from '../../../../../../../shared/functions/parsers/parse-category'
import { parseDistrict } from '../../../../functions/district-parsers'
import { CloseButton } from '../../../../../support/components/close-button/close-button'
import { phoneSwitchProvider } from '../../../../functions/phone-switch-provider'
import { togglePhone } from '../../../../functions/toggle-phone'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { buildLink } from '../../../../functions/build-link'

function getPositionFromTop() {
  if (!this.container.current) return

  return this.container.current.getBoundingClientRect().top + window.scrollY
}

class AnnouncementTile extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.langObjHandler = langObjHandler.bind(this)
    this.phoneSwitchProvider = phoneSwitchProvider.bind(this)
    this.togglePhone = togglePhone.bind(this)
    this.state = {
      phone: null
    }
  }

  render() {
    const {
      lang,
      venue,
      showPhoneSwitch,
      id,
      category,
      district,
      area,
      pictures,
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
      polishDescription,
      englishDescription,
      control,
      closeButtonOnClick,
      isMobile,
      scalableVectorGraphics,
      indexFullFarthestScrollTop,
      index,
      device,
      scripts,
      loadMap,
      mapLoaded,
      loadMarker,
      latitude,
      longitude,
      markerLoaded,
      mapLoading,
      changeControl,
      resetControl,
      changeData,
      resetData,
      changeApp,
      changeRoute
    } = this.props

    const venueShow = venue === 'show'
    const positionFromTop = getPositionFromTop.apply(this)
    const deviceClasss = device === 'largePc' ? ' large-pc' : ''

    if (
      index !== 0 && index !== 1 && index !== 2 &&
      (positionFromTop === undefined || positionFromTop  > indexFullFarthestScrollTop + 1000) &&
      venue !== 'map' &&
      venue !== 'show'
    ) {
      return (
        <a
          ref={this.container}
          className='announcement-show-tile-anchor'
          href={buildLink({
            id,
            category,
            district,
            lang
          })}
        />
      )
    }

    return (
      <div
        ref={this.container}
        className={`announcement-show-tile small-shadow ${venue}${deviceClasss}`}
      >
        {venue === 'map' &&
        <CloseButton
          onClick={closeButtonOnClick}
          pathData={scalableVectorGraphics && scalableVectorGraphics.close}
        />}
        <div className='header-container'>
          <h2>
            <div className='header-row category'>
              <span>{category !== null && parseCategory({ categoryNumber: category, lang })}</span>
              &nbsp;
              <span className='for-lease'>{this.langObjHandler({ pl: 'na wynajem', en: 'for lease' })}</span>
            </div>
            <div className='header-row district'>
              {parseDistrict(district)}{this.langObjHandler({ pl: ', Warszawa', en: ', Warsaw' })}
            </div>
            <div className='area'>
              <div className='area-amount'>
              {area}
              </div>
              {this.langObjHandler({
                pl: (
                  <React.Fragment>
                    <div className='m'>
                      m
                    </div>
                    <div className='sq'>
                      2
                    </div>
                  </React.Fragment>
                ),
                en: (
                  <div className='m'>
                    sqm
                  </div>
                )
              })}
              <div className='float-clear' />
            </div>
          </h2>
        </div>
        <div className='float-clear' />
        {showPhoneSwitch &&
        this.phoneSwitchProvider()}
        <AnnouncementShowPictures
          lang={lang}
          venue={venue}
          id={id}
          pictures={pictures}
          category={category}
          district={district}
          area={area}
          isMobile={isMobile}
          scalableVectorGraphics={scalableVectorGraphics}
          changeApp={changeApp}
          changeData={changeData}
          changeRoute={changeRoute}
        />
        <AnnouncementShowPrimary
          lang={lang}
          category={category}
          netRentAmount={netRentAmount}
          netRentAmountPerSqm={netRentAmountPerSqm}
          grossRentAmount={grossRentAmount}
          grossRentAmountPerSqm={grossRentAmountPerSqm}
          rentCurrency={rentCurrency}
          rooms={rooms}
          floor={floor}
          totalFloors={totalFloors}
          availabilityDate={availabilityDate}
        />
        {venueShow &&
        <React.Fragment>
          {features && features.length > 0 &&
          <div>
            <AnnouncementShowFeaturesFurnishings
              lang={lang}
              itemsName='features'
              items={features}
              scalableVectorGraphics={scalableVectorGraphics}
            />
          </div>}
          {furnishings && furnishings.length > 0 &&
          <div>
            <AnnouncementShowFeaturesFurnishings
              lang={lang}
              itemsName='furnishings'
              items={furnishings}
              scalableVectorGraphics={scalableVectorGraphics}
            />
          </div>}
          {(polishDescription || englishDescription) &&
          <AnnouncementShowDescription
            lang={lang}
            polishDescription={polishDescription}
            englishDescription={englishDescription}
          />}
          <div className='float-clear' />
          <AnnouncementShowMap
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
          />
        </React.Fragment>}
        {control}
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementTile)
