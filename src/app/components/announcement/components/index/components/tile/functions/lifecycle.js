import { compareParameters } from '../../../../../../../functions/compare-update-parameters'

export function componentDidMount() {
  this.fetchPicture()
}

export function shouldComponentUpdate(nextProps) {
  if (this.props.language !== nextProps.language) return true
  return compareParameters(this.props.announcement, nextProps.announcement, ['phone', 'pictures', 'pictureIndex', 'status'])
}

export function componentDidUpdate(prevProps) {
  if (prevProps.announcement.pictureIndex != this.props.announcement.pictureIndex) {
    this.fetchPicture()
  }
}
