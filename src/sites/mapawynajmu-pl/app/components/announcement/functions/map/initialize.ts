import replaceMap from './replace'
import mapOptionsProvider, { MapOptions } from './options-provider'
import setUpPinCreator from './pins/set-up-creator'

interface InitializeMapProps {
  mapOptions: MapOptions
  isMobile: boolean
  changeControl(props: object): void
}

function initializeMap(props: InitializeMapProps) {
  const {
    mapOptions,
    isMobile,
    changeControl,
  } = props

  // @ts-ignore
  if (window.googleMap) {
    replaceMap({
      mapOptions,
      isMobile,
      changeControl,
    })
  } else {
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

  changeControl({
    isMapInitialized: true,
    shouldInitializeMap: false,
  })
}

export default initializeMap
