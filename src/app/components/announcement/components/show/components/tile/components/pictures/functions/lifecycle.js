export function componentDidMount() {
  const {
    pictures
  } = this.props

  const {
    pictureIndex
  } = this.state

  if (pictures && pictures[pictureIndex]) {
    this.fetchPicture()
  }
}

export function componentDidUpdate(prevProps) {
  const {
    pictures
  } = this.props

  const {
    pictureIndex
  } = this.state

  if (pictures && pictures[pictureIndex]) {
    this.fetchPicture()
  }
}
