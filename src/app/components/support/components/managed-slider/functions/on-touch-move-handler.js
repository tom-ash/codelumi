export function onTouchMoveHandler(e) {
  const {
    disableSLides
  } = this.props
  
  if (disableSLides) return

  e.preventDefault()

  if (this.state.clientX === null) {
    this.setState({ clientX: e.touches[0].clientX })
  } else {
    const difference = (this.state.clientX - e.touches[0].clientX) * 2
    const currentLeft = this.state.currentLeft - difference

    if (currentLeft > - (this.state.statePictures.length - 1) * this.state.width - 100 && currentLeft < 50) {
      this.setState({
        clientX: e.touches[0].clientX,
        currentLeft
      })
    }
  }
}
