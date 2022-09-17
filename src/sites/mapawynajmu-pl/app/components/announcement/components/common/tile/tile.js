import React from 'react'
import AnnouncementShowPictures from './components/pictures/pictures'
import AnnouncementShowPrimary from './components/primary/primary'
import AnnouncementShowFeaturesFurnishings from './components/features-furnishings/features-furnishings'
import ListingTileDescription from './components/description/description'
import AnnouncementShowMap from './components/map/map'
import langHandler from '../../../../../functions/lang-handler.js'
import { parseCategory } from '../../../../../../shared/functions/parsers/parse-category'
import { togglePhone } from '../../../functions/toggle-phone'
import localitiesPresenter from '../../../functions/localities-presenter'
import Showcase from '../../show/components/showcase/showcase'
import GoToLink from './components/go-to-link'
import SVG from '../../../../../../../shared/app/components/support/svg/svg'

class AnnouncementTile extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.langHandler = langHandler.bind(this)
    this.togglePhone = togglePhone.bind(this)
    this.state = {
      fullPhone: null
    }
  }

  render() {
    const langHandler = this.langHandler
    const {
      lang,
      venue,
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
      name,
      link,
      phone
    } = this.props
    const showcaseProps = {
      announcerPhone: this.state.fullPhone || phone,
      announcementId: id,
      venue,
      togglePhone: this.togglePhone, 
      langHandler
    }
    const goToLinkProps = {
      name,
      link,
      langHandler: this.langHandler
    }
    const venueShow = venue === 'show'
    const deviceClass = device === 'largePc' ? ' large-pc' : ''
    const description = this.props.description || this.langHandler({ pl: polishDescription, en: englishDescription })

    return (
      <div
        ref={this.container}
        className={`listing-tile ${venue}${deviceClass}`}
      >
        {venue === 'map' &&
        <button
          onClick={closeButtonOnClick}
          className='go-back-to-list'
        >
          <SVG name='arrowRight' />
        </button>}
        <h1>
          {name
          && (
          <div className='name'>
            {name}
          </div>
          )}
          <div className='category'>
            <span>{category !== null && parseCategory({ categoryNumber: category, lang })}</span>
            &nbsp;
            <span className='for-lease'>{this.langHandler({ pl: 'na wynajem', en: 'for rent' })}</span>
          </div>
          <div className='locality-sublocality'>
            {localitiesPresenter({ locality, sublocality })}
          </div>
        </h1>
        {[1,2,3,4,5].includes(category)
        && venue !== 'list'
        && <Showcase { ...showcaseProps } />}
        {[6, 7].includes(category)
        && venue !== 'list'
        && <GoToLink {...goToLinkProps} />}
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
        {features && features.length > 0 &&
        <AnnouncementShowFeaturesFurnishings
          lang={lang}
          itemsName='features'
          items={features}
        />}
        {furnishings && furnishings.length > 0 &&
        <AnnouncementShowFeaturesFurnishings
          lang={lang}
          itemsName='furnishings'
          items={furnishings}
        />}
        {description &&
        <ListingTileDescription
          lang={lang}
          description={description}
        />}
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
        {control}
      </div>
    )
  }
}

export default AnnouncementTile
