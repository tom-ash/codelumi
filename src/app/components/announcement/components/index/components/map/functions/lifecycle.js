import {
  removeOldPins
} from './draw-pins'

export function componentDidMount() {
  const { changeControl } = this.props

  this.googleMapHandler(() => changeControl({ mapLoaded: true }))
}

export function componentDidUpdate(prevProps) {
  const { changeControl, drawPins, tile: { id: tileId } } = this.props
  const { drawPins: prevDrawPins, tile: { id: prevTileId } } = prevProps

  this.googleMapHandler(() => changeControl({ mapLoaded: true }))
  if (!prevDrawPins && drawPins) this.drawPins()
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
