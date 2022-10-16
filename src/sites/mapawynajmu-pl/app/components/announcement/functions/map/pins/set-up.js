import drawPins from './draw-pins'

export function setUpPins(currentListingId) {
  removeOldPins.call(this)
  drawPins.call(this, currentListingId)
}

export function removeOldPins() {
  const { pins } = this.props

  if (!pins) return

  pins.length && pins.map(pin => pin.setMap(null))
}
