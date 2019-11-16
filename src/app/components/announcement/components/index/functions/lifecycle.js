export function componentDidMount() {
  this.paramsReader()
}

export function componentDidUpdate(prevProps) {
  const { fetch } = this.props
  const { fetch: prevFetch } = prevProps

  if (!prevFetch && fetch) {
    this.fetchAnnouncements()
    this.paramsBuilder()
  }  
}