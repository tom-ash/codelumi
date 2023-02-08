import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import drawPin from './draw-pin'
import removePin from '../../../../../functions/map/pins/remove-pin'

const options = {
  center: {
    lat: 52,
    lng: 19,
  },
  zoom: 5.8,
}

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
    if (pin) removePin(pin)

    setData({
      pin: drawPin({
        latitude,
        longitude,
        svgs,
        category,
      }),
    })
  }

  if (longitude && latitude && !pin) {
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
  const { pin } = this.props

  if (pin) removePin(pin)
  removeGoogleMapListeners.call(this)
}
