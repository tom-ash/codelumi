export function addGoogleMapListeners() {
  const map = window.googleMap
  google.maps.event.addListener(map, 'click', function(event) {
    this.props.changeInputs({ mapLatitude: event.latLng.lat(), mapLongitude: event.latLng.lng()} )
    this.props.changeErrors({ map: { polish: '', english: '' }})
  }.bind(this))
  google.maps.event.addListener(map, 'rightclick', function() {  
    this.props.changeInputs({ mapLatitude: null, mapLongitude: null })
  }.bind(this))
}