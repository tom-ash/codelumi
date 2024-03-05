import replaceMap from './replace'
import mapOptionsProvider, { MapOptions } from './options-provider'
import setUpPinCreator from './pins/set-up-creator'

interface InitializeMapProps {
  mapOptions: MapOptions
  isMobile: boolean
}

export const initializeMap = (props: InitializeMapProps) => {
  const { mapOptions, isMobile } = props

  // @ts-ignore
  if (window.googleMap) {
    replaceMap({
      mapOptions,
      isMobile,
    })
  } else {
    // TODO: Fix "Loading the Google Maps JavaScript API without a callback is not supported: https://developers.google.com/maps/documentation/javascript/url-params#required_parameters."

    // @ts-ignore
    window.googleMap = new google.maps.Map(
      // @ts-ignore
      document.getElementById('google-map'),
      mapOptionsProvider({
        mapOptions,
        isMobile,
      })
    )

    setUpPinCreator({
      // TODO
    })

    // @ts-ignore
    window.sessionToken = new google.maps.places.AutocompleteSessionToken()
  }
}
