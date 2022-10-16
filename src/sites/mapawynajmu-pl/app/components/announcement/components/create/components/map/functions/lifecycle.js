import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import drawPin from './draw-pin'
import removePin from '../../../../../functions/map/pins/remove-pin'

const options = {
  center: {
    lat: 52,
    lng: 19
  },
  zoom: 5.8
}

export function componentDidMount() {
  const {
    shouldInitializeMap,
    isMapInitialized,
    googleMapsScriptLoaded,
    changeControl,
  } = this.props

  setShouldInitializeMap({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    changeControl,
  })
}

export function componentDidUpdate(prevProps) {  const {
  shouldInitializeMap: prevShouldInitializeMap,
  latitude: prevLatitude,
  longitude: prevLongitude,
  category: prevCategory,
} = prevProps

const {
  shouldInitializeMap,
  isMapInitialized,
  googleMapsScriptLoaded,
  changeControl,
  changeData,
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
    changeControl,
  })

  if (shouldInitializeMap && !prevShouldInitializeMap) {
    initializeMap({
      mapOptions,
      isMobile,
      changeControl,
    })
    addGoogleMapListeners.call(this)
  }

  if (latitude !== prevLatitude || longitude !== prevLongitude || category !== prevCategory) {
    if (pin) removePin(pin)

    changeData({
      pin: drawPin({
        latitude,
        longitude,
        svgs,
        category,
      })
    })
  }
}

export function componentWillUnmount() {
  const {
    pin,
  } = this.props

  if (pin) removePin(pin)
  removeGoogleMapListeners.call(this)
}
