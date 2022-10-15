import { removeOldPins } from './draw-pins'
import SetShouldInitializeMapProps from '../../../../../functions/map/set-should-initialize'

export function componentDidMount() {
  const {
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    changeControl
  } = this.props

  SetShouldInitializeMapProps({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    changeControl,
  })
}

export function componentDidUpdate(prevProps) {
  const {
    loadPins: prevLoadPins,
    announcements: prevAnnouncements,
    hoveredTileId: prevHoveredTileId,
    tile: prevTile,
    mapOptions: prevMapOptions,
    shouldInitializeMap: prevShouldInitializeMap
  } = prevProps

  const {
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    changeControl,
    announcements,
    loadPins,
    hoveredTileId,
    currentTileId,
    tile,
    mapOptions,
  } = this.props

  SetShouldInitializeMapProps({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    changeControl,
  })

  // if (shouldInitializeMap && !prevShouldInitializeMap) {
  //   this.initializeMap()
  // }

  // if (hoveredTileId && !prevHoveredTileId) {
  //   const pin = document.getElementById(`googl-map-pin-${hoveredTileId}`)
  //   if (pin) pin.classList.add('hovered')
  // }

  // if (!hoveredTileId && prevHoveredTileId) {
  //   const pin = document.getElementById(`googl-map-pin-${prevHoveredTileId}`)
  //   if (pin) pin.classList.remove('hovered')
  // }

  // if (!tile && prevTile) {
  //   const pin = document.getElementById(`googl-map-pin-${prevTile.id}`)
  //   if (pin) pin.classList.remove('current')
  // }

  // if (tile && !prevTile) {
  //   const pin = document.getElementById(`googl-map-pin-${tile.id}`)
  //   if (pin) pin.classList.add('current')
  // }

  // if (mapOptions !== prevMapOptions) {
  //   const map = window.googleMap
  //   map.setOptions(mapOptions)
  // }

  // if (this.shouldSetUpPins()) changeControl({ loadPins: true })
  // if (!prevLoadPins && loadPins) this.drawPins(currentTileId)

  // if (announcements !== prevAnnouncements) {
  //   this.drawPins(currentTileId)
  // }
}

export function componentWillUnmount() {
  const {
    resetControl,
    resetInputs
  } = this.props

  removeOldPins.call(this)
  resetControl()
  resetInputs()
}
