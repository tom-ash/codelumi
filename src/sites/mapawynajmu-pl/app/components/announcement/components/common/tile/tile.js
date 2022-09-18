import React from 'react'
import loadable from '@loadable/component'
const GoBack = loadable(() => import('./components/go-back'))
const Showcase = loadable(() => import('../../show/components/showcase/showcase'))
const GoToLink = loadable(() => import('./components/go-to-link'))
const Heading = loadable(() => import('./components/heading'))
const Pictures = loadable(() => import('./components/pictures/pictures'))
const PrimaryData = loadable(() => import('./components/primary/primary'))
const Items = loadable(() => import('./components/features-furnishings/features-furnishings'))
const Description = loadable(() => import('./components/description/description'))
const Map = loadable(() => import('./components/map/map'))
import langHandler from '../../../../../functions/lang-handler.js'
import { togglePhone } from '../../../functions/toggle-phone'
import { viewAnnouncement } from '../../../../announcement/functions/view-announcement'

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
    } = this.props
    const showcaseProps = {
      announcerPhone: this.state.fullPhone || phone,
      announcementId: id,
      venue,
      togglePhone: this.togglePhone, 
      langHandler
    }
    const goBackProps = {
      closeButtonOnClick
    }
    const goToLinkProps = {
      name,
      link,
      langHandler: this.langHandler
    }
    const description = this.props.description || this.langHandler({ pl: polishDescription, en: englishDescription })
    const headingProps = {
      name,
      category,
      locality,
      sublocality,
      lang,
      langHandler: this.langHandler
    }
    const picturesProps = {
      lang,
      venue,
      id,
      pictures,
      category,
      area,
      isMobile,
      changeApp,
      changeData,
      path,
      title,
    }
    const primaryDataProps = {
      lang,
      category,
      area,
      netRentAmount,
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm,
      rentCurrency,
      rooms,
      floor,
      totalFloors,
      availabilityDate,
      showPrimary,
    }
    const featuresProps = {
      lang,
      itemsName: 'features',
      items: features
    }
    const furnishingsProps = {
      lang,
      itemsName: 'furnishings',
      items: furnishings
    }
    const descriptionProps = {
      lang,
      description,
    }
    const mapProps = {
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
      langHandler,
      isMobile,
    }
    const isPhoneable = [1,2,3,4,5].includes(category)

    switch (venue) {
      case 'rootList':
        return (
          <div className='announcement-list-tile'>
            <a
              href={path}
              title={title}
              target='_blank'
              onMouseOver={() => {
                const pin = document.getElementById(`googl-map-pin-${id}`)
        
                if (pin) pin.classList.add('focused')
              }}
              onMouseLeave={() => {
                const pin = document.getElementById(`googl-map-pin-${id}`)
                if (pin) pin.classList.remove('focused')
              }}
              onClick={e => {
                e.preventDefault()
                const map = window.googleMap
                const options = { center: { lat: latitude, lng: longitude }, zoom: 12.4 }
                map.setOptions(options)
                viewAnnouncement(id)
        
                if (!isMobile) return changeData({ tileId: id })
        
                scrollToElement(document.getElementById('google-map'), 5, -64)
              }}
            >
              <Pictures {...picturesProps} />
            </a>
            <Heading {...headingProps} />
            <PrimaryData {...primaryDataProps} />
          </div>
        )
      case 'map':
        return (
          <div className='listing-tile'>
            <GoBack {...goBackProps} />
            <Heading {...headingProps} />
            {isPhoneable ? <Showcase { ...showcaseProps } /> : <GoToLink {...goToLinkProps} />}
            <Pictures {...picturesProps} />
            <PrimaryData {...primaryDataProps} />
            {description && <Description {...descriptionProps} />}
          </div>
        )
        case 'show':
          return (
            <main className='listing-tile'>
              <Heading {...headingProps} />
              {isPhoneable ? <Showcase { ...showcaseProps } /> : <GoToLink {...goToLinkProps} />}
              <Pictures {...picturesProps} />
              <PrimaryData {...primaryDataProps} />
              {features && features.length > 0 && <Items {...featuresProps} />}
              {furnishings && furnishings.length > 0 && <Items {...furnishingsProps} />}
              {description && <Description {...descriptionProps} />}
              {<Map {...mapProps} />}
            </main>
          )
        case 'list':
          return (
            <main className='listing-tile'>
              <Heading {...headingProps} />
              <Pictures {...picturesProps} />
              <PrimaryData {...primaryDataProps} />
              {control}
            </main>
          )
      default:
        return null
    }
  }
}

export default AnnouncementTile
