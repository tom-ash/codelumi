import replaceMap from './replace'
import mapOptionsProvider, { MapOptions } from './options-provider'

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
      document.getElementById('google-map'),
      mapOptionsProvider({
        mapOptions,
        isMobile,
      })
    )

    // @ts-ignore
    window.sessionToken = new google.maps.places.AutocompleteSessionToken()
  }

  changeControl({
    isMapInitialized: true,
    shouldInitializeMap: false,
  })
}

export default initializeMap
