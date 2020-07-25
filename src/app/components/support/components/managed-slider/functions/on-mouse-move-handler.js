export function onMouseMoveHandler(e) {
  if (e.movementX !== 0) {
    const currentLeft = this.state.currentLeft + e.movementX * 2
    if (currentLeft <= 0 && currentLeft >= - (this.state.statePictures.length - 1) * this.state.width) {
      this.setState({
        currentLeft
      })
    }
  }
}
