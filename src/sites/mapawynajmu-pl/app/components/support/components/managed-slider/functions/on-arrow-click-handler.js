export function onArrowClickHandler(e, direction) {
  e.stopPropagation()
  e.preventDefault()

  const { pictures } = this.props

  let statePictures = [...this.state.statePictures]
  let currentPicture

  if (direction === '<') {
    currentPicture = this.state.currentPicture - 1
    statePictures[currentPicture] = pictures[currentPicture]
  } else {
    currentPicture = this.state.currentPicture + 1
    statePictures[currentPicture] = pictures[currentPicture]
  }

  const currentLeft = -currentPicture * this.state.width

  this.setState({
    currentPicture,
    statePictures,
    currentLeft,
  })
}
