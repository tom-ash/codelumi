export function addGoogleMapListeners() {
  if (typeof window === 'undefined') return
  
  const map = window.googleMap
  google.maps.event.addListener(map, 'click', function(event) {
    this.props.changeInputs({ latitude: event.latLng.lat(), longitude: event.latLng.lng()} )
    this.props.changeErrors({ map: { pl: '', en: '' }})
  }.bind(this))
  google.maps.event.addListener(map, 'rightclick', function() {  
    this.props.changeInputs({ latitude: null, longitude: null })
  }.bind(this))
}