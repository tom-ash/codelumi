export function onMouseDownHandler(e) {
  const {
    pictures,
    disableSLides
  } = this.props

  if (disableSLides) return

  const { statePictures } = this.state

  e.stopPropagation()
  e.preventDefault()

  let newStatePictures = [...this.state.statePictures]
  let nextPicture = this.state.currentPicture + 1

  if (nextPicture <= statePictures.length - 1 && statePictures[nextPicture].database === undefined) {
    newStatePictures[nextPicture] = pictures[nextPicture]
  }

  this.setState({
    statePictures: newStatePictures,
    transition: null
  }, () => this.slider.current.addEventListener('mousemove', this.onMouseMoveHandler))
}
