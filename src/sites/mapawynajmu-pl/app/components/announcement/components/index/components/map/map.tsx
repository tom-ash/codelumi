import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import ListingTile from '../../../common/tile/tile'
import drawPins from '../../../../functions/map/pins/draw-pins'
import redrawPins from '../../../../functions/map/pins/redraw-pins'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { ListingIndexTile } from '../tile/tile'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'

class AnnouncementIndexMap extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.miniList = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    // @ts-ignore
    this.drawPins = drawPins.bind(this)
    // @ts-ignore
    this.redrawPins = redrawPins.bind(this)
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
      setData,
      // @ts-ignore
      isMobile,
      // @ts-ignore
      miniListFarthestScrollTop,
      // @ts-ignore
      miniListFarthestScrollLeft,
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
    const tileComponents = { showPrimary: true }
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
              announcements.map((announcement) => {
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
                } = announcement

                const isCommercial = [0, 1, 6, 7, 8].indexOf(category) !== -1
                const rentAmount = isCommercial ? netRentAmount : grossRentAmount

                const onClick = (e: React.SyntheticEvent) => {
                  e.preventDefault()

                  if (!isMobile) {
                    changeUrl({ href, retainQueryParams: true })
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
                  onClick,
                  onMouseOver: () => changeHoveredTileId(id),
                  onMouseLeave: () => changeHoveredTileId(null),
                }

                return (
                  <ListingIndexTile {...tileProps} />
                )
              }
            )}
          </div>
          <div id='google-map' />
          {tile && Object.keys(tile).length > 1 && (
            <div className='listing-tile-container'>
              <ListingTile
                venue='map'
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
                goBackLink={goBackLink}
                {...tileComponents}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMap))
