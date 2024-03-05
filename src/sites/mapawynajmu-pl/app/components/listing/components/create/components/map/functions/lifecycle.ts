import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import { initializeMap } from '../../../../../functions/map/initialize'
import drawPin from './draw-pin'
import { removePins } from '../../../../../functions/map/pins/remove-pins'

export function componentDidMount() {
  const {
    googleMapsScriptLoaded,
    mapOptions,
    isMobile,
    setControl,
    // @ts-ignore
  } = this.props

  if (googleMapsScriptLoaded) {
    setControl({ isMapInitialized: true })

    initializeMap({
      mapOptions,
      isMobile,
    })

    // @ts-ignore
    addGoogleMapListeners.call(this)
  }
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

  if (googleMapsScriptLoaded && !isMapInitialized) {
    setControl({ isMapInitialized: true })

    initializeMap({
      mapOptions,
      isMobile,
    })

    // @ts-ignore
    addGoogleMapListeners.call(this)
  }

  if (shouldInitializeMap && !prevShouldInitializeMap) {
    initializeMap({
      mapOptions,
      isMobile,
    })
    // @ts-ignore
    addGoogleMapListeners.call(this)
  }

  if (isMapInitialized && longitude && latitude && !pin) {
    setData({
      pin: drawPin({
        latitude,
        longitude,
        svgs,
        category,
      }),
    })

    return
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
  }
}

export function componentWillUnmount() {
  // @ts-ignore
  const { pin } = this.props

  if (pin) {
    removePins([pin])
  }

  // @ts-ignore
  removeGoogleMapListeners.call(this)
}
