import React from 'react'
import loadable from '@loadable/component'
const GoBack = loadable(() => import('./components/go-back'))
const ListerPhone = loadable(() => import('./components/lister-phone/lister-phone'))
const GoToLink = loadable(() => import('./components/go-to-link'))
const Heading = loadable(() => import('./components/heading'))
const Pictures = loadable(() => import('./components/pictures/pictures'))
const PrimaryData = loadable(() => import('./components/primary/primary'))
const Items = loadable(() => import('./components/features-furnishings/features-furnishings'))
const Description = loadable(() => import('./components/description/description'))
import { togglePhone } from '../../../functions/toggle-phone'
import { markListingAsViewed } from '../../../functions/mark-as-viewed'

class AnnouncementTile extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    this.togglePhone = togglePhone.bind(this)
    this.state = {
      fullPhone: null,
    }
  }

  componentDidMount() {
    const { id } = this.props

    markListingAsViewed(id)
  }

  render() {
    const {
      lang,
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
      isMobile,
      latitude,
      longitude,
      setData,
      setApp,
      path,
      title,
      name,
      link,
      phone,
      showPrimary,
      goBackLink,
      isPromoted,
    } = this.props
    const listerPhoneProps = {
      announcerPhone: this.state.fullPhone || phone,
      announcementId: id,
      togglePhone: this.togglePhone,
    }
    const goToLinkProps = {
      name,
      link,
    }
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
      showPrimary,
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

    return (
      <>
        <GoBack
          id={id}
          goBackLink={goBackLink}
        />
        <div className='listing-tile'>
          <Heading {...{ ...headingProps, tier: 1 }} />
          {isPhoneable ? <ListerPhone {...listerPhoneProps} /> : <GoToLink {...goToLinkProps} />}
          <Pictures {...picturesProps} />
          <PrimaryData {...primaryDataProps} />
          {features && features.length > 0 && <Items {...featuresProps} />}
          {furnishings && furnishings.length > 0 && <Items {...furnishingsProps} />}
          {description && <Description {...descriptionProps} />}
        </div>
      </>
    )
  }
}

export default AnnouncementTile
