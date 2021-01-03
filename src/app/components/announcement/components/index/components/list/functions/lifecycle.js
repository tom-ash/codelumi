export function componentDidMount() {
  const { fetch } = this.props

  if (fetch) this.fetchAnnouncements()
}

export function componentDidUpdate(prevProps) {
  // if (!prevProps.fetch && this.props.fetch) this.getAnnouncements()
}

export function componentWillUnmount() {
  // TODO
  // const {
  //   resetControl,
  //   resetInputs,
  //   resetData
  // } = this.props

  // resetControl()
  // resetInputs()
  // resetData()
}