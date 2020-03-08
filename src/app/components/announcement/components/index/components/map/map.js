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

    const minListDevices = ['largePc', 'smallPc']

    return (
      <div
        id='announcement-index-map'
        className={`${showAnnouncementIndexList ? 'hidden' : 'visible'}`}
      >
        <div id='google-map-container'>
          <div id='google-map' />
          {minListDevices.indexOf(device) !== -1 &&
          <div id='mini-list'>
            {announcements !== null && announcements.map(announcement => (
              <a
                key={announcement.id}
                href={`${CLIENT_URL}/${announcement.id}`}
                onClick={e => {
                  e.preventDefault()
                  const map = window.googleMap
                  const options = {
                    center: {
                      lat: announcement.latitude,
                      lng: announcement.longitude
                    },
                    zoom: 14
                  }
                  map.setOptions(setOptions.call(this, options))
                  changeData({ tile: { id: announcement.id }})
                }}
                className='announcement-show-container'
              >
                <AnnouncementShowPictures
                  language={language}
                  venue={'mini-list'}
                  key={announcement.id}
                  id={announcement.id}
                  pictures={announcement.pictures}
                />
                <div className='category-and-location'>
                  {parseCategory(announcement.category)[language]}, {parseDistrict(announcement.district)}
                </div>
                <div className='data'>
                  <AreaPresenter
                    area={announcement.area}
                    languageObjectHandler={this.languageObjectHandler}
                  />
                  <RentPresenter
                    amount={announcement.grossRentAmount}
                    currency={announcement.currency}
                    languageObjectHandler={this.languageObjectHandler}
                  />
                </div>
                <div className='float-clear' />
              </a>
            ))
            }
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
              closeButtonOnClick={() => this.props.changeData({ tile: {} })}
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

  return {
    center: {
      lat: this.props.isMobile ? 52.220: 52.202,
      lng: this.props.isMobile ? 21.012 : 20.985
    },
    zoom: this.props.isMobile ? 11.8 : 11.6,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    clickableIcons: false,
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
