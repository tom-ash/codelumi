import { removeOldPins } from './draw-pins'

export function componentDidMount() {
  const { changeControl } = this.props

  this.googleMapHandler(() => changeControl({ mapLoaded: true }))
}

export function componentDidUpdate(prevProps) {
  const {
    changeControl, mapLoaded, tile: { id: tileId }, announcements
  } = this.props
  const {
    mapLoaded: prevMapLoaded, tile: { id: prevTileId }, announcements: prevAnnouncements
  } = prevProps

  this.googleMapHandler(() => changeControl({ mapLoaded: true }))

  if (announcements && !prevMapLoaded && mapLoaded ||
      !prevAnnouncements && announcements && mapLoaded) this.drawPins()
  if (tileId && prevTileId !== tileId) this.fetchTile()
}

export function componentWillUnmount() {
  const {
    resetControl,
    resetInputs,
    resetData
  } = this.props

  removeOldPins.call(this)
  resetControl()
  resetInputs()
  resetData()
}
