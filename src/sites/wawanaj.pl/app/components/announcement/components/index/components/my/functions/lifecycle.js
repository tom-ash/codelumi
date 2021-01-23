export function componentDidMount() {
  const { fetch } = this.props

  if (fetch) this.fetchAnnouncements()
}
