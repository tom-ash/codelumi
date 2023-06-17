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
import { togglePhone } from '../../../functions/toggle-phone'
import { buildUrl } from '../../../../../../shared/functions/builders/url'
import { markListingAsViewed } from '../../../functions/mark-as-viewed'
import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/change-url'

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
    const { venue, id } = this.props

    if (venue === 'map') {
      markListingAsViewed(id)
    }
  }

  render() {
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
      setData,
      setApp,
      setControl,
      path,
      title,
      name,
      link,
      phone,
      showPrimary,
      changeHoveredTileId,
      goBackLink,
      isPromoted,
    } = this.props
    const listerPhoneProps = {
      announcerPhone: this.state.fullPhone || phone,
      announcementId: id,
      venue,
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
      venue,
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

    console.log(isPromoted)

    const classNames = ['announcement-list-tile']

    if (isPromoted) {
      classNames.push('promoted')
    }

    switch (venue) {
      case 'rootList':
        return (
          <a
            href={path}
            title={title}
            className={classNames.join(' ')}
            onMouseOver={() => changeHoveredTileId(id)}
            onMouseLeave={() => changeHoveredTileId(null)}
            onClick={e => {
              e.preventDefault()

              if (!isMobile) {
                const href = buildUrl({ path })
                changeUrl({ href, retainQueryParams: true })
                return
              }

              var fromTop = document.body.getBoundingClientRect().top

              window.scrollBy({
                top: 454 + fromTop,
                behavior: 'smooth',
              })

              setControl({
                mapOptions: {
                  center: {
                    lat: latitude,
                    lng: longitude,
                  },
                  zoom: 12.4,
                },
              })
            }}
          >
            <Link {...linkProps} />
            <div className='data'>
              <Heading {...{ ...headingProps, tier: 2 }} />
              <PrimaryData {...primaryDataProps} />
            </div>
          </a>
        )
      case 'map':
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
      case 'list':
        return (
          <main className='listing-tile'>
            <Heading {...{ ...headingProps, tier: 2 }} />
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
