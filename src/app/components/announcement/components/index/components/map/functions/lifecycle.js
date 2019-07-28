import { updateParameters } from '../constants/update-parameters'
import { getMapAnnouncements } from '../../../functions/get-map-announcements'
import { drawPins, removeOldPins } from './draw-pins'
import { compareParameters } from '../../../../../../../functions/compare-update-parameters'


export function componentDidMount() {
  calendarListenersHandler.call(this)
  this.googleMapHandler(() => this.props.changeControl({ loaded: true, fetch: true }))
}

export function shouldComponentUpdate(nextProps) {
  // return compareParameters(this.props, nextProps, updateParameters)
}

export function componentDidUpdate(prevProps) {
  this.googleMapHandler(() => this.props.changeControl({ loaded: true, fetch: true }))
  if (this.props.fetch && !prevProps.fetch) getMapAnnouncements.call(this)
  if (this.props.draw && !prevProps.draw) drawPins.call(this)
  if (this.props.tile && compareParameters(prevProps.tile, this.props.tile, ['id'])) this.fetchTile()
}

export function componentWillUnmount() {
  removeOldPins.call(this)
  this.props.resetControl()
  this.props.resetInputs()
  this.props.resetData()
}

function calendarListenersHandler() {
  const calendar = document.getElementsByClassName('react-calendar')[0]
  calendar.addEventListener('mouseover', () => { this.props.changeControl({ calendarHover: true }) })
  calendar.addEventListener('mouseleave', () => { this.props.changeControl({ calendarHover: false }) })
}
