import drawPins from './draw-pins'
import removePins from './remove-pins'

interface RedrawPins {
  (attrs: {
    pins: any // TODO
    listings: any // TODO
    currentListingId: number
    isMobile: boolean
    svgs: any // TODO
    setData: any // TODO
    setControl: any // TODO
  }): void
}

export const redrawPins: RedrawPins = attrs => {
  const { pins, listings, currentListingId, isMobile, svgs, setData, setControl } = attrs

  removePins(pins)

  drawPins({
    listings,
    currentListingId,
    isMobile,
    svgs,
    setData,
    setControl,
  })
}

export default redrawPins
