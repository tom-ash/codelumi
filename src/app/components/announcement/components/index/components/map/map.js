import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as lifecycle from './functions/lifecycle'
import AnnouncementTile from '../../../show/components/tile/tile'
import { googleMapHandler } from '../../../../functions/google-map-handler'
import { fetchTile } from './functions/fetch-tile'
import { drawPins } from './functions/draw-pins'
import AnnouncementShowPictures from '../../../show/components/tile/components/pictures/pictures'
import { parseCategory } from '../../../../../../../shared/functions/parsers/parse-category'
import { parseDistrict } from '../../../../../../../shared/functions/parsers/parse-district'
import { AreaPresenter } from '../../../show/functions/area-presenter'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import { RentPresenter } from '../../../show/functions/rent-presenter'
import { shouldSetUpGoogleMaps, shouldSetUpPins } from '../../../../functions/google-map-handler'
import { viewAnnouncement } from '../../../../functions/view-announcement'
import { buildLink } from '../../../../functions/build-link'

class AnnouncementIndexMap extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.googleMapHandler = googleMapHandler.bind(this)
    this.drawPins = drawPins.bind(this)
    this.fetchTile = fetchTile.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.shouldSetUpGoogleMaps = shouldSetUpGoogleMaps.bind(this)
    this.shouldSetUpPins = shouldSetUpPins.bind(this)
  }

  render() {
    const {
      showAnnouncementIndexCatalogue,
      tile,
      language,
      announcements,
      changeData,
      device,
      isMobile
    } = this.props

    const minListDevices = ['largePc', 'smallPc', 'largeTablet']

    return (
      <div
        id='announcement-index-map'
        className={`${showAnnouncementIndexCatalogue ? 'hidden' : 'visible'}`}
      >
        <div id='google-map-container'>
          <div id='mini-list'>
            {announcements !== null && announcements.map(announcement => {
              const {
                id,
                latitude: lat,
                longitude: lng,
                pictures,
                category,
                district,
                area,
                grossRentAmount,
                rentCurrency: currency
              } = announcement

              return (
                <a
                  className='announcement-show-container'
                  key={id}
                  href={buildLink({ ...announcement, language })}

                  onMouseOver={() => {
                    const pin = document.getElementById(`googl-map-pin-${id}`)
                    if (!pin) return

                    pin.classList.add('focused');
                  }}

                  onMouseLeave={() => {
                    const pin = document.getElementById(`googl-map-pin-${id}`)
                    if (!pin) return

                    pin.classList.remove('focused');
                  }}

                  onClick={e => {
                    e.preventDefault()
                    const map = window.googleMap

                    const alteredLng = lng + (isMobile ? 0 : .037)

                    console.log(alteredLng)

                    const options = {
                      center: {
                        lat,
                        lng: alteredLng
                      },
                      zoom: 12.4
                    }
                    map.setOptions(options)
                    viewAnnouncement(id)

                    if (!isMobile) changeData({ tileId: id })
                  }}
                >
                  <AnnouncementShowPictures
                    language={language}
                    venue={'mini-list'}
                    key={id}
                    id={id}
                    pictures={pictures}
                    category={category}
                    district={district}
                    area={area}
                  />
                  <div className='category-and-location'>
                    {parseCategory(category)[language]}, {parseDistrict(district)}
                  </div>
                  <div className='data'>
                    <AreaPresenter
                      area={area}
                      languageObjectHandler={this.languageObjectHandler}
                    />
                    <RentPresenter
                      amount={grossRentAmount}
                      currency={currency}
                      languageObjectHandler={this.languageObjectHandler}
                    />
                  </div>
                  <div className='float-clear' />
                </a>
              )
            })}
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
            />
          </div>}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexMap)
