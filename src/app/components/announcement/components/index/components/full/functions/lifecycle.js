export function componentDidMount() {
  this.paramsReader()
}

export function componentDidUpdate(prevProps) {
  const { readParams, fetchAmount, fetchList, showList } = this.props
  const { paramsReader: prevReadParams, fetchAmount: prevFetchAmount, fetchList: prevFetchList } = prevProps
  if (readParams && !prevReadParams) return this.paramsReader()
  if (fetchAmount && !prevFetchAmount) return this.getAnnouncementAmount()
  if (fetchList && !prevFetchList) return this.getAnnouncements()
}