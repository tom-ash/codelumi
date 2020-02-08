export function componentDidMount() {
  if (this.props.pictures && this.props.pictures[this.props.pictureIndex]) {
    this.fetchPicture()
  }
}

export function componentDidUpdate() {
  if (this.props.pictures[this.props.pictureIndex]) {
    this.fetchPicture()
  }
}


