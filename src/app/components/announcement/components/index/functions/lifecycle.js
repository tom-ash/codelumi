export function componentDidMount() {
  const { fetch } = this.props

  if (!this.userIndex()) {
    if (fetch) return this.fetchAnnouncements()

    this.paramsReader()
  } else {
    this.fetchAnnouncements()
  }
}

export function componentDidUpdate(prevProps) {
  const { fetch } = this.props
  const { fetch: prevFetch } = prevProps

  if (!prevFetch && fetch) {
    this.fetchAnnouncements()
    if (!this.userIndex()) this.paramsBuilder()
  }  
}
