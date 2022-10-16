import drawPins from './draw-pins'
import removePins from './remove-pins'

// @ts-ignore
export function redrawPins(currentListingId) {
  const { 
    pins
  // @ts-ignore
  } = this.props

  removePins(pins)

  // @ts-ignore
  drawPins.call(this, currentListingId)
}

export default redrawPins
