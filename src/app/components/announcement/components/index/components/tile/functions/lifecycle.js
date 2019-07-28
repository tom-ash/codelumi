import { compareParameters } from '../../../../../../../functions/compare-update-parameters'

export function componentDidMount() {
  this.fetchPicture()
  // setTimeout(() => {
  //   this.fetchPicture()
  // }, this.props.index * 64);
}

export function shouldComponentUpdate(nextProps) {
  if (this.props.language !== nextProps.language) return true
  return compareParameters(this.props.announcement, nextProps.announcement, ['phone', 'pictures', 'pictureIndex', 'active'])
}

export function componentDidUpdate(prevProps) {
  if (prevProps.announcement.pictureIndex != this.props.announcement.pictureIndex) {
    this.fetchPicture()
  }
}
