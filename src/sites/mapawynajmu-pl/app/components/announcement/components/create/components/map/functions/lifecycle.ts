import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import drawPin from './draw-pin'
import { removePins } from '../../../../../functions/map/pins/remove-pins'

export function componentDidMount() {
  // @ts-ignore
  const { shouldInitializeMap, isMapInitialized, googleMapsScriptLoaded, setControl } = this.props

  setShouldInitializeMap({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    setControl,
  })
}

// @ts-ignore
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
    // @ts-ignore
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
    // @ts-ignore
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
  // @ts-ignore
  const { pin, setData } = this.props

  if (pin) {
    removePins([pin])
  }

  // @ts-ignore
  removeGoogleMapListeners.call(this)
}
