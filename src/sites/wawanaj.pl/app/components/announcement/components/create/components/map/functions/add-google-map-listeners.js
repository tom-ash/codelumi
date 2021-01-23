import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  MAP_PIN_ADDED_EVENT,
  MAP_PIN_REMOVED_EVENT
} = analyticEvents

export function addGoogleMapListeners() {
  if (typeof window === 'undefined') return
  
  const map = window.googleMap
  google.maps.event.addListener(map, 'click', function(event) {
    this.props.changeInputs({ latitude: event.latLng.lat(), longitude: event.latLng.lng()} )
    this.props.changeErrors({ map: { pl: '', en: '' }})
    sendGaEvent(MAP_PIN_ADDED_EVENT)
  }.bind(this))
  google.maps.event.addListener(map, 'rightclick', function() {  
    this.props.changeInputs({ latitude: null, longitude: null })
    sendGaEvent(MAP_PIN_REMOVED_EVENT)
  }.bind(this))
}
