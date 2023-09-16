import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import ListingShowTile from '../../../show/components/tile/tile'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { ListingIndexTile } from '../tile/tile'
import { updateUrl } from '../../../../../../../../shared/app/functions/routes/updaters/update-url'
import GoBack from '../../../show/components/tile/components/go-back'

class AnnouncementIndexMap extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.miniList = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
  }

  render() {
    const {
      // @ts-ignore
      tile,
      // @ts-ignore
      lang,
      // @ts-ignore
      announcements,
      // @ts-ignore
      isMobile,
      // @ts-ignore
      setApp,
      // @ts-ignore
      setControl,
      // @ts-ignore
      title,
      // @ts-ignore
      currentPartnerName,
      // @ts-ignore
      goBackLink,
      // @ts-ignore
      screenHeight,
    } = this.props
    // @ts-ignore
    const changeHoveredTileId = hoveredTileId => setControl({ hoveredTileId })
    const height = isMobile ? undefined : screenHeight - 60 - 60 - 36

    return (
      <div
        id='listing-index-map'
        style={{
          height,
        }}
      >
        <div id='google-map-container'>
          <div
            // @ts-ignore
            ref={this.miniList}
            id='mini-list'
          >
            <h1>{title}</h1>
            {currentPartnerName && <h2>{currentPartnerName}</h2>}
            {announcements !== null &&
              // @ts-ignore
              announcements.map(announcement => {
                const {
                  id,
                  title,
                  pictures,
                  name,
                  category,
                  locality,
                  sublocality,
                  netRentAmount,
                  grossRentAmount,
                  rentCurrency,
                  area,
                  path: href,
                  latitude,
                  longitude,
                  isPromoted,
                } = announcement

                const isCommercial = [0, 1, 6, 7, 8].indexOf(category) !== -1
                const rentAmount = isCommercial ? netRentAmount : grossRentAmount

                const onClick = (e: React.SyntheticEvent) => {
                  e.preventDefault()

                  if (!isMobile) {
                    setControl({ currentTileId: id })
                    updateUrl({ href, retainQueryParams: true, withScroll: false })
                  } else {
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
                  }
                }

                const tileProps = {
                  key: title,
                  href,
                  id,
                  title,
                  pictures,
                  disableSLides: true,
                  name,
                  category,
                  locality,
                  sublocality,
                  lang,
                  rentAmount,
                  rentCurrency,
                  area,
                  isPromoted,
                  onClick,
                  onMouseOver: () => changeHoveredTileId(id),
                  onMouseLeave: () => changeHoveredTileId(null),
                }

                return <ListingIndexTile {...tileProps} />
              })}
          </div>
          <div id='google-map' />
          {tile && Object.keys(tile).length > 1 && (
            <div id='listing-show'>
              <GoBack
                id={tile.id}
                goBackLink={goBackLink}
              />
              <ListingShowTile
                // @ts-ignore
                lang={lang}
                id={tile.id}
                category={tile.category}
                pictures={tile.pictures}
                area={tile.area}
                netRentAmount={tile.netRentAmount}
                netRentAmountPerSqm={tile.netRentAmountPerSqm}
                grossRentAmount={tile.grossRentAmount}
                grossRentAmountPerSqm={tile.grossRentAmountPerSqm}
                rooms={tile.rooms}
                rentCurrency={tile.rentCurrency}
                floor={tile.floor}
                totalFloors={tile.totalFloors}
                availabilityDate={tile.availabilityDate}
                isMobile={isMobile}
                setApp={setApp}
                path={tile.path}
                title={tile.title}
                locality={tile.locality}
                sublocality={tile.sublocality}
                // @ts-ignore
                description={{ pl: tile.polishDescription, en: tile.englishDescription }[lang]}
                name={tile.name}
                link={tile.link}
                phone={tile.phone}
                features={tile.features}
                furnishings={tile.furnishings}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMap))
