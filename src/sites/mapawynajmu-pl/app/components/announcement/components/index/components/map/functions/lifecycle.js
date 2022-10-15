import { removeOldPins } from './draw-pins'

function handleScroll() {
  const {
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft,
    changeControl
  } = this.props

  const scrollTop = this.miniList.current.scrollTop

  if (scrollTop > miniListFarthestScrollTop + 100) {
    changeControl({ miniListFarthestScrollTop: scrollTop })
  }

  const scrollLeft = this.miniList.current.scrollLeft

  if (scrollLeft > miniListFarthestScrollLeft + 100) {
    changeControl({ miniListFarthestScrollLeft: scrollLeft })
  }
}

export function componentDidMount() {
  const { changeControl, mapOptions } = this.props

  this.googleMapHandler(() => changeControl({ mapLoaded: true }), mapOptions)
}

export function componentDidUpdate(prevProps) {
  const {
    // loadMap: prevLoadMap,
    loadPins: prevLoadPins,
    announcements: prevAnnouncements,
    hoveredTileId: prevHoveredTileId,
    tile: prevTile,
    mapOptions: prevMapOptions,
    scripts: {
      googleMaps: prevGoogleMapScriptLoaded
    },
  } = prevProps

  const {
    changeControl,
    // loadMap,
    announcements,
    loadPins,
    hoveredTileId,
    currentTileId,
    tile,
    mapOptions,
    // mapLoaded,
    scripts: {
      googleMaps: googleMapScriptLoaded
    },
  } = this.props

  if (googleMapScriptLoaded && !prevGoogleMapScriptLoaded) {
    this.googleMapHandler(() => changeControl({ mapLoaded: true }), mapOptions)
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

  if (this.shouldSetUpPins()) changeControl({ loadPins: true })
  if (!prevLoadPins && loadPins) this.drawPins(currentTileId)

  if (announcements !== prevAnnouncements) {
    this.drawPins(currentTileId)
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
