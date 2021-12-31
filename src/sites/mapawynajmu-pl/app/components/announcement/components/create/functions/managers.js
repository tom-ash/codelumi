import sendGaEvent from '../../../../../functions/google-analytics/send-ga-event'
import { analyticEvent } from '../constants/analytic-event'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'form-input button' },
    label: this.langHandler({ pl: 'Dodaj ogłoszenie', en: 'Add Announcement' }),
    onClick: () => {
      this.publish()
      sendGaEvent(analyticEvent)
    }
  }
}
