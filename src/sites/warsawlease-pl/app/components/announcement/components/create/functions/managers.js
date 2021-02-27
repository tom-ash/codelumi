import { sendGaEvent } from '../../../../../functions/google-analytics/send-ga-event'
import { analyticEvent } from '../constants/analytic-event'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'form-input button' },
    label: this.langHandler({ pl: 'Dalej', en: 'Next' }),
    onClick: () => {
      this.publish()
      sendGaEvent(analyticEvent)
    }
  }
}
