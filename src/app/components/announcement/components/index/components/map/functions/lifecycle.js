import { getMapAnnouncements } from '../../../functions/get-map-announcements'
import {
  drawPins,
  removeOldPins
} from './draw-pins'

export function componentDidMount() {
  const { changeControl } = this.props

  this.googleMapHandler(() => changeControl({
    loaded: true,
    fetch: true
  }))
}

export function componentDidUpdate(prevProps) {
  const {
    changeControl,
    fetch,
    draw,
    tile: { id: tileId }
  } = this.props
  const {
    fetch: prevFetch,
    draw: prevDraw,
    tile: { id: prevTileId }
  } = prevProps

  this.googleMapHandler(() => changeControl({
    loaded: true,
    fetch: true
  }))
  if (fetch && !prevFetch) getMapAnnouncements.call(this)
  if (draw && !prevDraw) drawPins.call(this)
  if (tileId && tileId !== prevTileId) this.fetchTile()
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
