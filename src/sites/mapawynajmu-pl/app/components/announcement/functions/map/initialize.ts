import mapOptionsProvider, { MapOptions } from './options-provider'

interface InitializeMapProps {
  mapOptions: MapOptions
  changeControl(props: object): void
  isMobile: boolean
}

function initializeMap(props: InitializeMapProps) {
  const {
    changeControl,
    mapOptions,
    isMobile,
  } = props

  // @ts-ignore
  if (window.googleMap) return replaceMap.call(this)

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

  changeControl({
    isMapInitialized: true,
    shouldInitializeMap: false
  })
}

export default initializeMap
