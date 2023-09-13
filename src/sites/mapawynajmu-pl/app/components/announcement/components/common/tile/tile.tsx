import React from 'react'
import loadable from '@loadable/component'
const GoBack = loadable(() => import('./components/go-back'))
const ListerPhone = loadable(() => import('./components/lister-phone/lister-phone'))
const GoToLink = loadable(() => import('./components/go-to-link'))
const Heading = loadable(() => import('./components/heading'))
const Pictures = loadable(() => import('./components/pictures/pictures'))
const PrimaryData = loadable(() => import('./components/primary/primary'))
const Secondary = loadable(() => import('./components/secondary/secondary'))
const Items = loadable(() => import('./components/features-furnishings/features-furnishings'))
const Description = loadable(() => import('./components/description/description'))
import { togglePhone } from '../../../functions/toggle-phone'
import { markListingAsViewed } from '../../../functions/mark-as-viewed'

class AnnouncementTile extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.container = React.createRef()
    // @ts-ignore
    this.togglePhone = togglePhone.bind(this)
    this.state = {
      fullPhone: null,
    }
  }

  componentDidMount() {
    // @ts-ignore
    const { id } = this.props

    markListingAsViewed(id)
  }

  render() {
    const {
      // @ts-ignore
      lang,
      // @ts-ignore
      id,
      // @ts-ignore
      category,
      // @ts-ignore
      locality,
      // @ts-ignore
      sublocality,
      // @ts-ignore
      area,
      // @ts-ignore
      pictures,
      // @ts-ignore
      rentCurrency,
      // @ts-ignore
      netRentAmount,
      // @ts-ignore
      netRentAmountPerSqm,
      // @ts-ignore
      grossRentAmount,
      // @ts-ignore
      grossRentAmountPerSqm,
      // @ts-ignore
      rooms,
      // @ts-ignore
      floor,
      // @ts-ignore
      totalFloors,
      // @ts-ignore
      availabilityDate,
      // @ts-ignore
      features,
      // @ts-ignore
      furnishings,
      // @ts-ignore
      polishDescription,
      // @ts-ignore
      isMobile,
      // @ts-ignore
      latitude,
      // @ts-ignore
      longitude,
      // @ts-ignore
      setData,
      // @ts-ignore
      setApp,
      // @ts-ignore
      path,
      // @ts-ignore
      title,
      // @ts-ignore
      name,
      // @ts-ignore
      link,
      // @ts-ignore
      phone,
      // @ts-ignore
      goBackLink,
      // @ts-ignore
      isPromoted,
    } = this.props
    const listerPhoneProps = {
      // @ts-ignore
      announcerPhone: this.state.fullPhone || phone,
      announcementId: id,
      // @ts-ignore
      togglePhone: this.togglePhone,
    }
    const goToLinkProps = {
      name,
      link,
    }
    // @ts-ignore
    const description = this.props.description || polishDescription // TODO: LANG!
    const headingProps = {
      name,
      category,
      locality,
      sublocality,
      lang,
    }
    const linkProps = {
      id,
      path,
      title,
      lat: latitude,
      lng: longitude,
      isMobile,
      setData,
      pictures,
    }
    const picturesProps = {
      lang,
      id,
      pictures,
      category,
      area,
      isMobile,
      setApp,
      setData,
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
    }
    const featuresProps = {
      lang,
      itemsName: 'features',
      items: features,
    }
    const furnishingsProps = {
      lang,
      itemsName: 'furnishings',
      items: furnishings,
    }
    const descriptionProps = {
      lang,
      description,
    }
    const isPhoneable = [1, 2, 3, 4, 5].includes(category)
    const classNames = ['announcement-list-tile']

    if (isPromoted) {
      classNames.push('promoted')
    }

    const key = `listing-${id}`

    return (
      <>
        <GoBack
          id={id}
          goBackLink={goBackLink}
        />
        <div className='listing-tile' key={key}>
          <Heading {...{ ...headingProps, tier: 1 }} />
          {isPhoneable ? <ListerPhone {...listerPhoneProps} /> : <GoToLink {...goToLinkProps} />}
          {/* @ts-ignore */}
          <Pictures {...picturesProps} />
          <PrimaryData {...primaryDataProps} />
          <Secondary 
            rooms={rooms}
            category={category}
            floor={floor}
            totalFloors={totalFloors}
            availabilityDate={availabilityDate}
          />
          {features && features.length > 0 && <Items {...featuresProps} />}
          {furnishings && furnishings.length > 0 && <Items {...furnishingsProps} />}
          {description && <Description {...descriptionProps} />}
        </div>
      </>
    )
  }
}

export default AnnouncementTile
