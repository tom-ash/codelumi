import { updateParameters } from '../../../constants/parameters'
import { compareParameters } from '../../../../../../../functions/compare-update-parameters'

export function componentDidMount() {
  const { changeControl } = this.props
  const calendar = document.getElementsByClassName('react-calendar')[0]
  calendar.addEventListener('mouseover', () => {
    changeControl({ availabilityDateActive: true })
  })
  calendar.addEventListener('mouseleave', () => {
    changeControl({ availabilityDateActive: false })
  })
  this.readParams()
}

export function shouldComponentUpdate(nextProps) {
  return compareParameters(this.props, nextProps, updateParameters)
}

export function componentDidUpdate(prevProps) {
  const { readParams, fetch, showList } = this.props
  const { readParams: prevReadParams, fetch: prevFetch } = prevProps
  if (readParams && !prevReadParams) return this.readParams()
  if (fetch && !prevFetch) {
    if (showList) return this.getAnnouncements()
    this.getAnnouncementAmount()
  }
}