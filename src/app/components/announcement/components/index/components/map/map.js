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
      showAnnouncementIndexList,
      tile,
      language,
      announcements,
      changeData,
      device
    } = this.props

    const minListDevices = ['largePc', 'smallPc', 'largeTablet']

    return (
      <div
        id='announcement-index-map'
        className={`${showAnnouncementIndexList ? 'hidden' : 'visible'}`}
      >
        <div id='google-map-container'>
          <div id='google-map' />
          {minListDevices.indexOf(device) !== -1 &&
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
                  onClick={e => {
                    e.preventDefault()
                    const map = window.googleMap
                    const options = {
                      center: {
                        lat,
                        lng: lng + .016
                      },
                      zoom: 13.5
                    }
                    map.setOptions(setOptions.call(this, options))
                    viewAnnouncement(id)
                    changeData({ tileId: id })
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
              )})}
          </div>}
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



function setOptions(options) {
  options = options || {}

  const {
    isMobile
  } = this.props

  return {
    center: {
      lat: isMobile ? 52.220: 52.202,
      lng: isMobile ? 21.012 : 20.985
    },
    zoom: isMobile ? 11.8 : 11.6,
    fullscreenControl: false,
    clickableIcons: false,
    zoomControl: false,
    ...!isMobile && { gestureHandling: 'greedy' },
    styles,
    ...options
  }
}




const styles = 
[

 {
   "featureType": "poi",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
 {
   "featureType": "road",
   "elementType": "labels.icon",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },

 {
  "featureType": "transit.line",
  "elementType": "geometry",
  "stylers": [
    { "color": "#AEB6BF" }
  ]
},

{
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [
    { "color": "#FDFEFE" }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    { "color": "#FAD7A0" }
  ]
},

{
  "featureType": "water",
  // "elementType": "geometry",
  "stylers": [
    { "color": "#5DADE2" }
  ]
},



//  transit.station.rail

 {
  "featureType": "administrative.country",
  "elementType": "geometry",
  "stylers": [
      {
          "visibility": "simplified"
      },
      {
          "hue": "#ff0000"
      }
  ]
},
// {
//   "featureType": "water",
//   "elementType": "geometry",
//   "stylers": [
//       {
//           "saturation": "46"
//       },
//       {
//           "color": 'red'
//       }
//   ]
// }

{
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [
      {
          "color": "#A9DFBF"
      },
      {
          "visibility": "on"
      }
  ]
},



]
