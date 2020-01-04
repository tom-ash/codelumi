export function componentDidMount() {
  const { fetch, showUser } = this.props

  if (!showUser) {
    if (fetch) return this.fetchAnnouncements()

    this.paramsReader()
  } else {
    this.fetchAnnouncements()
  }

  window.addEventListener('popstate', () => this.paramsReader())
}

export function componentDidUpdate(prevProps) {
  const { fetch, showUser } = this.props
  const { fetch: prevFetch } = prevProps

  if (!prevFetch && fetch) {
    this.fetchAnnouncements()
    if (!showUser) this.paramsBuilder()
  }
}
