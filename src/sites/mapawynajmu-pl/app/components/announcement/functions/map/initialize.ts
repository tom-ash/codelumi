import replaceMap from './replace'
import mapOptionsProvider, { MapOptions } from './options-provider'
import setUpPinCreator from './pins/set-up-creator'

interface InitializeMapProps {
  mapOptions: MapOptions
  isMobile: boolean
  setControl(props: object): void
}

function initializeMap(props: InitializeMapProps) {
  const { mapOptions, isMobile, setControl } = props

  // @ts-ignore
  if (window.googleMap) {
    replaceMap({
      mapOptions,
      isMobile,
      setControl,
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
      }),
    )

    setUpPinCreator({
      // TODO
    })

    // @ts-ignore
    window.sessionToken = new google.maps.places.AutocompleteSessionToken()
  }

  setControl({
    isMapInitialized: true,
    shouldInitializeMap: false,
  })
}

export default initializeMap
