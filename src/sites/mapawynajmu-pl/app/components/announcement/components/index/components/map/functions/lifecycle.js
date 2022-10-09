import { removeOldPins } from './draw-pins'
import { setUpGoogleMaps } from '../../../../../functions/google-map-handler'

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
  const { changeControl } = this.props

  this.googleMapHandler(() => changeControl({ mapLoaded: true }))

  this.miniList.current.addEventListener('scroll', () => handleScroll.apply(this))
}

export function componentDidUpdate(prevProps) {
  const {
    loadMap: prevLoadMap,
    loadPins: prevLoadPins,
    announcements: prevAnnouncements,
    hoveredTileId: prevHoveredTileId,
    currentTileId: prevCurrentTileId,
    reloadPins: prevReloadPins,
  } = prevProps

  const {
    changeControl,
    loadMap,
    announcements,
    loadPins,
    hoveredTileId,
    currentTileId,
    reloadPins,
  } = this.props

  if (hoveredTileId && !prevHoveredTileId) {
    const pin = document.getElementById(`googl-map-pin-${hoveredTileId}`)
    if (pin) pin.classList.add('focused')
  }

  if (!hoveredTileId && prevHoveredTileId) {
    const pin = document.getElementById(`googl-map-pin-${prevHoveredTileId}`)
    if (pin) pin.classList.remove('focused')
  }

  if (currentTileId) {
    const pin = document.getElementById(`googl-map-pin-${currentTileId}`)
    if (pin) pin.classList.add('focused')
  }

  if (!currentTileId && prevCurrentTileId) {
    const pin = document.getElementById(`googl-map-pin-${prevCurrentTileId}`)
    if (pin) pin.classList.remove('focused')
  }

  if (this.shouldSetUpGoogleMaps()) changeControl({ loadMap: true })
  if (!prevLoadMap && loadMap) setUpGoogleMaps.call(this)
  if (this.shouldSetUpPins()) changeControl({ loadPins: true })
  if (!prevLoadPins && loadPins) this.drawPins()
  if (reloadPins && prevAnnouncements && announcements && prevAnnouncements !== announcements) {
    this.setState({ reloadPins: false })
    this.drawPins()
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
