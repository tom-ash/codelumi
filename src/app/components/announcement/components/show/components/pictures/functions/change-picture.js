export function changePicture(direction) {
  let pictureIndex
  if (direction === 'previous') {
    pictureIndex = this.props.pictureIndex - 1
    if (pictureIndex < 0) {
      pictureIndex = this.props.pictures.length - 1
    }
  }
  if (direction === 'next') {
    pictureIndex = this.props.pictureIndex + 1
    if (pictureIndex >= this.props.pictures.length) {
      pictureIndex = 0
    }
  }
  this.props.changeData({ pictureIndex: pictureIndex })
}