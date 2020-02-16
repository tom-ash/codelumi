export function changePicture(direction) {
  const {
    pictureIndex
  } = this.state

  const {
    pictures
  } = this.props

  let newPictureIndex
  if (direction === 'previous') {
    newPictureIndex = pictureIndex - 1
    if (newPictureIndex < 0) {
      newPictureIndex = pictures.length - 1
    }
  }
  if (direction === 'next') {
    newPictureIndex = pictureIndex + 1
    if (newPictureIndex >= pictures.length) {
      newPictureIndex = 0
    }
  }
  this.setState({
    pictureIndex: newPictureIndex
  })
}