import removePins from '../../../../../functions/map/pins/remove-pins'
import initializeMap from '../../../../../functions/map/initialize'
import { getDefaultMapOptions } from './get-default-map-options'
import drawPins from '../../../../../functions/map/pins/draw-pins'

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
  }
}

// @ts-ignore
export function componentDidUpdate(prevProps) {
  const {
    hoveredTileId: prevHoveredTileId,
    tile: prevTile,
    mapOptions: prevMapOptions,
  } = prevProps

  const {
    isMapInitialized,
    googleMapsScriptLoaded,
    svgs,
    setData,
    setControl,
    announcements,
    hoveredTileId,
    currentTileId,
    tile,
    mapOptions,
    isMobile,
    shouldDrawPins,
    // @ts-ignore
  } = this.props

  const defaultMapOptions = getDefaultMapOptions(isMobile)

  if (googleMapsScriptLoaded && !isMapInitialized) {
    setControl({ isMapInitialized: true })

    initializeMap({
      mapOptions: defaultMapOptions,
      isMobile,
    })
  }
  
  if (isMapInitialized && shouldDrawPins) {
    setControl({ shouldDrawPins: false })

    drawPins({
      isMobile,
      listings: announcements,
      currentListingId: currentTileId,
      svgs,
      setData,
      setControl,
    })
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
  // @ts-ignore
  const pins = window.pins

  if (pins) {
    removePins(pins)
  }
}
