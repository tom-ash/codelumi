export function componentDidMount() {
  if (!this.props.fetched) this.getAnnouncements()
}

export function componentDidUpdate(prevProps) {
  if (!prevProps.fetch && this.props.fetch) this.getAnnouncements()
}

export function componentWillUnmount() {
  const { resetControl, resetInputs, resetData } = this.props
  resetControl()
  resetInputs()
  resetData()
}