import React from 'react'
import AnnouncementShowPictures from './components/pictures/pictures'
import AnnouncementShowPrimary from './components/primary/primary'
import AnnouncementShowFeaturesFurnishings from './components/features-furnishings/features-furnishings'
import AnnouncementShowDescription from './components/description/description'
import AnnouncementShowMap from './components/map/map'
import langHandler from '../../../../../functions/lang-handler.js'
import { parseCategory } from '../../../../../../shared/functions/parsers/parse-category'
import { phoneSwitchProvider } from '../../../functions/phone-switch-provider'
import { togglePhone } from '../../../functions/toggle-phone'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import localitiesPresenter from '../../../functions/localities-presenter'

function getPositionFromTop() {
  if (!this.container.current) return

  return this.container.current.getBoundingClientRect().top + window.scrollY
}

class AnnouncementTile extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.langHandler = langHandler.bind(this)
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
      locality,
      sublocality,
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
      path,
      title,
    } = this.props
    const venueShow = venue === 'show'
    const positionFromTop = getPositionFromTop.apply(this)
    const deviceClasss = device === 'largePc' ? ' large-pc' : ''
    const description = this.props.description || this.langHandler({ pl: polishDescription, en: englishDescription })

    if (
      index !== 0 && index !== 1 && index !== 2 &&
      (positionFromTop === undefined || positionFromTop  > indexFullFarthestScrollTop + 1000) &&
      venue !== 'map' &&
      venue !== 'show'
    ) {
      return (
        <a
          ref={this.container}
          className='announcement-tile-anchor'
          href={path}
          title={title}
        />
      )
    }

    return (
      <div
        ref={this.container}
        className={`announcement-tile ${venue}${deviceClasss}`}
      >
        {venue === 'map' &&
        <button
          onClick={closeButtonOnClick}
          className='go-back-to-list'
        >
          &#10145;
        </button>}
        <h1>
          <div className='category'>
            <span>{category !== null && parseCategory({ categoryNumber: category, lang })}</span>
            &nbsp;
            <span className='for-lease'>{this.langHandler({ pl: 'na wynajem', en: 'for rent' })}</span>
          </div>
          <div className='locality-sublocality'>
            {localitiesPresenter({ locality, sublocality })}
          </div>
        </h1>
        <div className='float-clear' />
        {showPhoneSwitch && [0, 1, 2, 3, 4, 5].includes(category) &&
        this.phoneSwitchProvider()}
        <AnnouncementShowPictures
          lang={lang}
          venue={venue}
          id={id}
          pictures={pictures}
          category={category}
          area={area}
          isMobile={isMobile}
          changeApp={changeApp}
          changeData={changeData}
          path={path}
          title={title}
        />
        <AnnouncementShowPrimary
          lang={lang}
          category={category}
          area={area}
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
        <>
          {features && features.length > 0 &&
          <AnnouncementShowFeaturesFurnishings lang={lang} itemsName='features' items={features}/>}
          {furnishings && furnishings.length > 0 &&
          <AnnouncementShowFeaturesFurnishings lang={lang} itemsName='furnishings' items={furnishings}/>}
          {description && <AnnouncementShowDescription lang={lang} description={description}/>}
          <div className='float-clear' />
          {venueShow && <AnnouncementShowMap
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
            langHandler={this.langHandler}
            isMobile={isMobile}
          />}
        </>
        {control}
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementTile)
