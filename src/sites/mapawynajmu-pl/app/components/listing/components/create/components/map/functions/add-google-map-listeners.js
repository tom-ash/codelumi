// import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
// import analyticEvents from '../constants/analytics/events'

// const {
//   MAP_PIN_ADDED_EVENT,
//   MAP_PIN_REMOVED_EVENT
// } = analyticEvents

import getLocality from './get-locality'
import getSublocality from './get-sublocality'

export function addGoogleMapListeners() {
  if (typeof window === 'undefined') return

  const map = window.googleMap
  google.maps.event.addListener(
    map,
    'click',
    function (event) {
      const { setInputs, setErrors } = this.props
      const latitude = event.latLng.lat()
      const longitude = event.latLng.lng()
      const latlng = { lat: latitude, lng: longitude }
      const geocoder = new google.maps.Geocoder()

      geocoder.geocode({ location: latlng }).then(({ results: addresses }) => {
        const address = addresses[0]
        const addressComponents = address.address_components
        const locality = getLocality(addressComponents)
        const sublocality = getSublocality(addressComponents)

        this.setState({ autocompleteInput: address.formatted_address })
        setInputs({ latitude, longitude, locality, sublocality })
        setErrors({ map: { pl: '', en: '' } })
      })
    }.bind(this)
  )
  google.maps.event.addListener(
    map,
    'rightclick',
    function () {
      this.props.setInputs({ latitude: null, longitude: null })
      // sendGaEvent(MAP_PIN_REMOVED_EVENT)
    }.bind(this)
  )
}
