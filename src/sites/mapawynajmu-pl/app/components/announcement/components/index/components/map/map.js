import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import ListingTile from '../../../common/tile/tile'
import drawPins from '../../../../functions/map/pins/draw-pins'
import redrawPins from '../../../../functions/map/pins/redraw-pins'
import { langHandler } from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AppContext from '../../../../../../constants/context.js'

class AnnouncementIndexMap extends React.Component {
  constructor(props) {
    super(props)
    this.miniList = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.drawPins = drawPins.bind(this)
    this.redrawPins = redrawPins.bind(this)
    this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      tile,
      lang,
      announcements,
      changeData,
      isMobile,
      miniListFarthestScrollTop,
      miniListFarthestScrollLeft,
      changeApp,
      changeControl,
    } = this.props

    const changeHoveredTileId = hoveredTileId => changeControl({ hoveredTileId })
    const tileComponents = {
      showPrimary: true,
    }

    return (
      <div id='announcement-index-map'>
        <div id='google-map-container'>
          <div ref={this.miniList} id='mini-list'>
            {announcements !== null &&
              announcements.map((announcement, index) => {
                const { name, link } = announcement

                const tileProps = {
                  name,
                  link,
                }

                return (
                  <ListingTile
                    venue='rootList'
                    key={index}
                    index={index}
                    id={announcement.id}
                    latitude={announcement.latitude}
                    longitude={announcement.longitude}
                    pictures={announcement.pictures}
                    category={announcement.category}
                    area={announcement.area}
                    grossRentAmount={announcement.grossRentAmount}
                    rentCurrency={announcement.rentCurrency}
                    lang={lang}
                    langHandler={this.langHandler}
                    changeData={changeData}
                    changeControl={changeControl}
                    isMobile={isMobile}
                    path={announcement.path}
                    title={announcement.title}
                    miniListFarthestScrollTop={miniListFarthestScrollTop}
                    miniListFarthestScrollLeft={miniListFarthestScrollLeft}
                    locality={announcement.locality}
                    sublocality={announcement.sublocality}
                    changeHoveredTileId={changeHoveredTileId}
                    {...tileProps}
                  />
                )
              })}
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
                changeApp={changeApp}
                path={tile.path}
                title={tile.title}
                locality={tile.locality}
                sublocality={tile.sublocality}
                description={this.langHandler({ pl: tile.polishDescription, en: tile.englishDescription })}
                name={tile.name}
                link={tile.link}
                phone={tile.phone}
                features={tile.features}
                furnishings={tile.furnishings}
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
