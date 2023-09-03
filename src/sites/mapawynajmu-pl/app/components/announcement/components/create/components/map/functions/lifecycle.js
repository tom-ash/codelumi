import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import drawPin from './draw-pin'
import { removePins } from '../../../../../functions/map/pins/remove-pins'

export function componentDidMount() {
  const { shouldInitializeMap, isMapInitialized, googleMapsScriptLoaded, setControl } = this.props

  setShouldInitializeMap({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    setControl,
  })
}

export function componentDidUpdate(prevProps) {
  const {
    shouldInitializeMap: prevShouldInitializeMap,
    latitude: prevLatitude,
    longitude: prevLongitude,
    category: prevCategory,
  } = prevProps

  const {
    shouldInitializeMap,
    isMapInitialized,
    googleMapsScriptLoaded,
    setControl,
    setData,
    mapOptions,
    isMobile,
    latitude,
    longitude,
    pin,
    svgs,
    category,
  } = this.props

  setShouldInitializeMap({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    setControl,
  })

  if (shouldInitializeMap && !prevShouldInitializeMap) {
    initializeMap({
      mapOptions,
      isMobile,
      setControl,
    })
    addGoogleMapListeners.call(this)
  }

  if (latitude !== prevLatitude || longitude !== prevLongitude || category !== prevCategory) {
    if (pin) removePins([pin])

    setData({
      pin: drawPin({
        latitude,
        longitude,
        svgs,
        category,
      }),
    })
  } else if (isMapInitialized && longitude && latitude && !pin) {
    setData({
      pin: drawPin({
        latitude,
        longitude,
        svgs,
        category,
      }),
    })
  }
}

export function componentWillUnmount() {
  const { pin, setData } = this.props

  if (pin) {
    removePins([pin])
  }

  removeGoogleMapListeners.call(this)
}
