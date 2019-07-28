export function componentDidUpdate() {
  if (this.props.pictures[this.props.pictureIndex]) {
    this.fetchPicture()
  }
}


