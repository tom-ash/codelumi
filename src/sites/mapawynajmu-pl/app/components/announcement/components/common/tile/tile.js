import React from 'react'
import Heading from './components/heading'
import Pictures from './components/pictures/pictures'
import PrimaryData from './components/primary/primary'
import Items from './components/features-furnishings/features-furnishings'
import Description from './components/description/description'
import Map from './components/map/map'
import langHandler from '../../../../../functions/lang-handler.js'
import { togglePhone } from '../../../functions/toggle-phone'
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
      phone,
      showPrimary,
      showFeatures,
      showFurnishings,
      showDescription,
      showMap
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
    const description = this.props.description || this.langHandler({ pl: polishDescription, en: englishDescription })

    const element = venue === 'show' ? 'main' : 'div'

    const headingProps = {
      name,
      category,
      locality,
      sublocality,
      lang,
      langHandler: this.langHandler
    }

    const tileComponents = (
      <>
        {venue === 'map' &&
        <button
          onClick={closeButtonOnClick}
          className='go-back-to-list'
        >
          <SVG name='arrowRight' />
        </button>}
        <Heading {...headingProps} />
        {[1,2,3,4,5].includes(category)
        && venue !== 'list'
        && <Showcase { ...showcaseProps } />}
        {[6, 7].includes(category)
        && venue !== 'list'
        && <GoToLink {...goToLinkProps} />}
        <Pictures
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
        <PrimaryData
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
          showPrimary={showPrimary}
        />
        {showFeatures && features && features.length > 0 &&
        <Items
          lang={lang}
          itemsName='features'
          items={features}
        />}
        {showFurnishings && furnishings && furnishings.length > 0 &&
        <Items
          lang={lang}
          itemsName='furnishings'
          items={furnishings}
        />}
        {showDescription && description &&
        <Description
          lang={lang}
          description={description}
        />}
        {showMap && <Map
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
      </>
    )

    return React.createElement(
      element,
      { className: 'listing-tile' },
      tileComponents
    )
  }
}

export default AnnouncementTile
