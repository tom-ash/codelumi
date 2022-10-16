import { addGoogleMapListeners } from './add-google-map-listeners'
import { removeGoogleMapListeners } from './remove-google-map-listeners'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import drawPin from './draw-pin'

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
  longitude: prevLongitude
  // shouldDrawPins: prevShouldDrawPins,
} = prevProps

const {
  shouldInitializeMap,
  isMapInitialized,
  googleMapsScriptLoaded,
  changeControl,
  mapOptions,
  isMobile,
  latitude,
  longitude,
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

  if (latitude !== prevLatitude || longitude !== prevLongitude) {
    drawPin({
      latitude,
      longitude,
    })
  }

  // console.log(  latitude, longitude,)

  // drawPin

  // this.initializeMap()

  // if (this.props.isMapInitialized && !prevProps.isMapInitialized) addGoogleMapListeners.call(this)
  // if (this.props.latitude != prevProps.latitude && this.props.longitude != prevProps.longitude) {
  //   placeMarker.call(this)
  // }
}

export function componentWillUnmount() {
  removeGoogleMapListeners.call(this)
  // TODO REMOVE PIN  
}
