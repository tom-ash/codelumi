import { sendGaEvent } from '../../../../../functions/google-analytics/send-ga-event'
import { ANNOUNCEMENT_CREATE_PUBLISH_CLICKED_EVENT } from '../../../../../constants/analytics-events'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'form-input button' },
    label: this.languageHandler('Dalej', 'Next'),
    onClick: () => {
      this.publish()
      sendGaEvent(ANNOUNCEMENT_CREATE_PUBLISH_CLICKED_EVENT)
    }
  }
}
