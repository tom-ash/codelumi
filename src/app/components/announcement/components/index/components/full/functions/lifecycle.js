import { updateParameters } from '../../../constants/parameters'
import { compareParameters } from '../../../../../../../functions/compare-update-parameters'

export function componentDidMount() {
  const calendar = document.getElementsByClassName('react-calendar')[0]
  calendar.addEventListener("mouseover", () => { this.props.changeControl({ calendarHover: true }) })
  calendar.addEventListener('mouseleave', () => { this.props.changeControl({ calendarHover: false }) })
  this.readUrlParameters()
}

export function shouldComponentUpdate(nextProps) {
  return compareParameters(this.props, nextProps, updateParameters)
}

export function componentDidUpdate(prevProps) {
  if (!this.props.parametersRead && this.props.parametersRead !== prevProps.parametersRead)  this.readUrlParameters()
  if (!prevProps.fetchAmount && this.props.fetchAmount) this.getAnnouncementAmount()
  if (!prevProps.fetch && this.props.fetch) this.getAnnouncements()
}