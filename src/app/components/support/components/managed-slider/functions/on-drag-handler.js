export function onDragHandler(prevState) {
  const {
    afterDrag
  } = this.state

  if (afterDrag && !prevState.afterDrag) {
    let currentPicture = Math.abs(Math.round(this.state.currentLeft / this.state.width))

    if (currentPicture < 0) {
      currentPicture = 1
    } else if (currentPicture > this.state.statePictures.length - 1) {
      currentPicture = this.state.statePictures.length - 1
    }

    this.setState({
      afterDrag: false,
      transition: 'all .32s ease-out',
      currentPicture,
      currentLeft: - currentPicture * this.state.width
    })
  }
}
