import React from 'react'

import GoBack from './components/go-back'
import Showcase from '../../show/components/showcase/showcase'
import GoToLink from './components/go-to-link'

import Heading from './components/heading'
import Pictures from './components/pictures/pictures'
import PrimaryData from './components/primary/primary'

import Items from './components/features-furnishings/features-furnishings'
import Description from './components/description/description'
import Map from './components/map/map'

import langHandler from '../../../../../functions/lang-handler.js'
import { togglePhone } from '../../../functions/toggle-phone'

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
