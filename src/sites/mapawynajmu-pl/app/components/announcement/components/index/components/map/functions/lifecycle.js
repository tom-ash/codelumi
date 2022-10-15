import { removeOldPins } from './draw-pins'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import setShouldDrawPins from '../../../../../functions/map/should-draw-pins'

export function componentDidMount() {
  const {
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    changeControl
  } = this.props

  setShouldInitializeMap({
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
    shouldInitializeMap: prevShouldInitializeMap,
    shouldDrawPins: prevShouldDrawPins,
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
    isMobile,
    isPinsDrawn,
    shouldDrawPins,
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
  }

  setShouldDrawPins({
    isPinsDrawn,
    isMapInitialized,
    listingsChanged: announcements !== prevAnnouncements,
    changeControl,
  })

  if (shouldDrawPins && !prevShouldDrawPins) {
    this.drawPins(currentTileId)
  }

  if (hoveredTileId && !prevHoveredTileId) {
    const pin = document.getElementById(`googl-map-pin-${hoveredTileId}`)
    if (pin) pin.classList.add('hovered')
  }

  if (!hoveredTileId && prevHoveredTileId) {
    const pin = document.getElementById(`googl-map-pin-${prevHoveredTileId}`)
    if (pin) pin.classList.remove('hovered')
  }

  if (!tile && prevTile) {
    const pin = document.getElementById(`googl-map-pin-${prevTile.id}`)
    if (pin) pin.classList.remove('current')
  }

  if (tile && !prevTile) {
    const pin = document.getElementById(`googl-map-pin-${tile.id}`)
    if (pin) pin.classList.add('current')
  }

  if (mapOptions !== prevMapOptions) {
    const map = window.googleMap
    map.setOptions(mapOptions)
  }
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
