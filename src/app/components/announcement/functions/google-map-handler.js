export function googleMapHandler(callback, options) {
  if (this.props.mapLoaded) return
  if (this.props.scripts.googleMaps && window.googleMap) return replaceGoogleMap.call(this, callback, options)
  if (!this.props.scripts.googleMaps || window.googleMap) return
  const div = document.getElementById('google-map')
  if (!div) return
  const initializeMap = () => window.googleMap = new google.maps.Map(div, setOptions.call(this, options))
  initializeMap()
  if (callback) callback()
}

export function replaceGoogleMap(callback, options) {
  const googleMapContainer = document.getElementById('google-map-container')
  if (!googleMapContainer) return
  const map = window.googleMap
  googleMapContainer.replaceChild(map.getDiv(), document.getElementById('google-map'))
  map.setOptions(setOptions.call(this, options))
  if (callback) callback()
}

function setOptions(options) {
  options = options || {}
  return {
    center: {
      lat: options.latitude || (this.props.isMobile ? 52.220: 52.222),
      lng: options.longitude || (this.props.isMobile ? 21.012 : 20.985)
    },
    zoom: options.zoom || (this.props.isMobile ? 12.2 : 12.6),
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    clickableIcons: false,
    styles
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








// [
//   // {
//   //   featureType: "poi",
//   //   elementType: "labels",
//   //   stylers: [
//   //     { visibility: "off" }
//   //   ]
//   // },
//   // {
//   //   featureType: "roads.administrative",
//   //   elementType: "labels",
//   //   stylers: [
//   //     { visibility: "off" }
//   //   ]
//   // }







  
// ]