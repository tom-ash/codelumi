import removePins from '../../../../../functions/map/pins/remove-pins'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import setShouldDrawPins from '../../../../../functions/map/pins/set-should-draw'

export function componentDidMount() {
  const { isMapInitialized, shouldInitializeMap, googleMapsScriptLoaded, setControl } = this.props

  setShouldInitializeMap({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    setControl,
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
    setControl,
    announcements,
    // loadPins,
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
    setControl,
  })

  if (shouldInitializeMap && !prevShouldInitializeMap) {
    initializeMap({
      mapOptions,
      isMobile,
      setControl,
    })
  }

  setShouldDrawPins({
    isPinsDrawn,
    isMapInitialized,
    setControl,
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

  if (announcements !== prevAnnouncements) {
    this.redrawPins(currentTileId)
  }
}

export function componentWillUnmount() {
  const { pins } = this.props

  removePins(pins)
}
