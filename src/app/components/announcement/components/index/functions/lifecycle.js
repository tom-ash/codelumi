export function componentDidMount() {
  if (typeof window === 'undefined') return
  
  const {
    announcements
  } = this.props

  if (announcements === null) this.fetchAnnouncements()
}

export function componentDidUpdate(prevProps) {
  const { fetch, showUser } = this.props
  const { fetch: prevFetch } = prevProps

  if (!prevFetch && fetch) {
    this.fetchAnnouncements()
    if (!showUser) this.paramsBuilder()
  }
}
