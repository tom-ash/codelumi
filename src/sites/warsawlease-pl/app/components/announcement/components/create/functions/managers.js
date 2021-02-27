import { sendGaEvent } from '../../../../../functions/google-analytics/send-ga-event'
import { analyticEvent } from '../constants/analytic-event'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'form-input button' },
    label: 'TODO LANG',
    // label: this.langHandler('Dalej', 'Next'),
    onClick: () => {
      this.publish()
      sendGaEvent(analyticEvent)
    }
  }
}
