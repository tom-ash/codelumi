export function componentDidMount() {
  if (!this.props.fetched) this.getAnnouncements()
}

export function componentDidUpdate(prevProps) {
  if (prevProps.fetched && !this.props.fetched) this.getAnnouncements()
}