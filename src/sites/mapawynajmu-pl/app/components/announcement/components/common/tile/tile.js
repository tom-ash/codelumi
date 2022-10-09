import React from 'react'
import loadable from '@loadable/component'
const GoBack = loadable(() => import('./components/go-back'))
const ListerPhone = loadable(() => import('./components/lister-phone/lister-phone'))
const GoToLink = loadable(() => import('./components/go-to-link'))
const Heading = loadable(() => import('./components/heading'))
const Link = loadable(() => import('./components/link'))
const Pictures = loadable(() => import('./components/pictures/pictures'))
const PrimaryData = loadable(() => import('./components/primary/primary'))
const Items = loadable(() => import('./components/features-furnishings/features-furnishings'))
const Description = loadable(() => import('./components/description/description'))
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
      isMobile,
      latitude,
      longitude,
      changeData,
      changeApp,
      path,
      title,
      name,
      link,
      phone,
      showPrimary,
      changeHoveredTileId,
      changeCurrentTileId,
    } = this.props
    const listerPhoneProps = {
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
    const headingProps = {
      name,
      category,
      locality,
      sublocality,
      lang,
      langHandler: this.langHandler
    }
    const linkProps = {
      id,
      path,
      title,
      lat: latitude,
      lng: longitude,
      isMobile,
      changeData,
      pictures,
      changeCurrentTileId,
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
    const isPhoneable = [1,2,3,4,5].includes(category)

    switch (venue) {
      case 'rootList':
        return (
          <div
            className='announcement-list-tile'
            onMouseOver={() => changeHoveredTileId(id)}
            onMouseLeave={() => changeHoveredTileId(null)}
          >
            <Link {...linkProps} />
            <Heading {...headingProps} />
            <PrimaryData {...primaryDataProps} />
          </div>
        )
      case 'map':
        return (
          <>
            <GoBack changeCurrentTileId={changeCurrentTileId} />
            <div className='listing-tile'>
              <Heading {...headingProps} />
              {isPhoneable ? <ListerPhone { ...listerPhoneProps } /> : <GoToLink {...goToLinkProps} />}
              <Pictures {...picturesProps} />
              <PrimaryData {...primaryDataProps} />
              {features && features.length > 0 && <Items {...featuresProps} />}
              {furnishings && furnishings.length > 0 && <Items {...furnishingsProps} />}
              {description && <Description {...descriptionProps} />}
            </div>
          </>
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
