import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import AnnouncementShowMiniTile from '../../../show/components/mini-tile/mini-tile'
const AnnouncementTile = loadable(() => import('../../../show/components/tile/tile'), { ssr: false })
import { googleMapHandler } from '../../../../functions/google-map-handler'
import { fetchTile } from './functions/fetch-tile'
import { drawPins } from './functions/draw-pins'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import { shouldSetUpGoogleMaps, shouldSetUpPins } from '../../../../functions/google-map-handler'
import { changeRoute } from '../../../../../../functions/routers/change-route'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { buildRequestParameters } from '../../functions/build-parameters'
import { fetchAnnouncements } from '../../functions/fetch-announcements'

class AnnouncementIndexMap extends React.Component {
  constructor(props) {
    super(props)
    this.miniList = React.createRef()
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.googleMapHandler = googleMapHandler.bind(this)
    this.drawPins = drawPins.bind(this)
    this.fetchTile = fetchTile.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.shouldSetUpGoogleMaps = shouldSetUpGoogleMaps.bind(this)
    this.shouldSetUpPins = shouldSetUpPins.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.fetchAnnouncements = fetchAnnouncements.bind(this)
    this.buildRequestParameters = buildRequestParameters.bind(this)
  }

  render() {
    const {
      tile,
      language,
      announcements,
      changeData,
      isMobile,
      scalableVectorGraphics,
      miniListFarthestScrollTop,
      miniListFarthestScrollLeft,
      changeApp,
      changeAnnouncementShowData,
      renderCatalogue
    } = this.props

    return (
      <div
        id='announcement-index-map'
        className={renderCatalogue ? 'hidden' : ''}
      >
        <div id='google-map-container'>
          <div 
            ref={this.miniList}
            id='mini-list'
          >
            {announcements !== null && announcements.map((announcement, index) => (
              <AnnouncementShowMiniTile
                key={index}
                index={index}
                id={announcement.id}
                lat={announcement.latitude}
                lng={announcement.longitude}
                pictures={announcement.pictures}
                category={announcement.category}
                district={announcement.district}
                area={announcement.area}
                grossRentAmount={announcement.grossRentAmount}
                rentCurrency={announcement.currency}
                language={language}
                languageObjectHandler={this.languageObjectHandler}
                changeData={changeData}
                isMobile={isMobile}
                miniListFarthestScrollTop={miniListFarthestScrollTop}
                miniListFarthestScrollLeft={miniListFarthestScrollLeft}
              />
            ))}
            <div className='float-clear' />
          </div>
          <div id='google-map' />
          {tile && Object.keys(tile).length > 1 &&
          <div className='announcement-tile-container'>
            <AnnouncementTile
              venue='map'
              language={language}
              showPhoneSwitch
              id={tile.id}
              category={tile.category}
              district={tile.district}
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
              closeButtonOnClick={() => this.props.changeData({ tileId: null, tile: null })}
              isMobile={isMobile}
              scalableVectorGraphics={scalableVectorGraphics}
              changeApp={changeApp}
              changeData={changeAnnouncementShowData}
              changeRoute={this.changeRoute}
            />
          </div>}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexMap))
