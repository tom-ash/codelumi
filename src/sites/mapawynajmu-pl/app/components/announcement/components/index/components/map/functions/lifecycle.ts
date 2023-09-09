import removePins from '../../../../../functions/map/pins/remove-pins'
import setShouldInitializeMap from '../../../../../functions/map/set-should-initialize'
import initializeMap from '../../../../../functions/map/initialize'
import setShouldDrawPins from '../../../../../functions/map/pins/set-should-draw'
import { getDefaultMapOptions } from './get-default-map-options'
import drawPins from '../../../../../functions/map/pins/draw-pins'
import redrawPins from '../../../../../functions/map/pins/redraw-pins'

export function componentDidMount() {
  // @ts-ignore
  const { isMapInitialized, shouldInitializeMap, googleMapsScriptLoaded, setControl } = this.props

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
    loadPins: prevLoadPins,
    announcements: prevAnnouncements,
    hoveredTileId: prevHoveredTileId,
    tile: prevTile,
    mapOptions: prevMapOptions,
    shouldInitializeMap: prevShouldInitializeMap,
    shouldDrawPins: prevShouldDrawPins,
    isMobile: prevIsMobile,
  } = prevProps

  const {
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    svgs,
    setData,
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
    pins,
    // @ts-ignore
  } = this.props

  const defaultMapOptions = getDefaultMapOptions(isMobile)

  setShouldInitializeMap({
    isMapInitialized,
    shouldInitializeMap,
    googleMapsScriptLoaded,
    setControl,
  })

  if (shouldInitializeMap && !prevShouldInitializeMap) {
    initializeMap({
      mapOptions: defaultMapOptions,
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

  if (announcements !== prevAnnouncements) {
    redrawPins({
      isMobile,
      svgs,
      pins,
      listings: announcements,
      currentListingId: currentTileId,
      setData,
      setControl,
    })
  }
}

export function componentWillUnmount() {
  // @ts-ignore
  const { pins } = this.props

  removePins(pins)
}
