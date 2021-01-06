import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import { ANNOUNCEMENT_CREATE_PICTURE_REMOVED_EVENT } from '../../../../../../../constants/analytics-events'

export function deletePicture(index) {
  const blobs = [...this.props.blobs]
  blobs.splice(index, 1)
  this.props.changeInputs({ blobs: blobs })

  sendGaEvent(ANNOUNCEMENT_CREATE_PICTURE_REMOVED_EVENT)
}