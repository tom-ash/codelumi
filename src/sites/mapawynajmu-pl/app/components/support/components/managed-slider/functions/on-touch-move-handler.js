export function onTouchMoveHandler(e) {
  const { disableSLides } = this.props

  if (disableSLides) return

  if (this.state.clientX === null) {
    this.setState({ clientX: e.touches[0].clientX })
  } else {
    const difference = (this.state.clientX - e.touches[0].clientX) * 2

    if (Math.abs(difference) < 10) return

    e.preventDefault()
    const currentLeft = this.state.currentLeft - difference

    if (currentLeft > -(this.state.statePictures.length - 1) * this.state.width - 100 && currentLeft < 50) {
      this.setState({
        clientX: e.touches[0].clientX,
        currentLeft,
      })
    }
  }
}
