import sendGaEvent from '../../../../../functions/google-analytics/send-ga-event'
import { analyticEvent } from '../constants/analytic-event'

export function addAnnouncementManager() {
  return {
    classNames: { container: 'submit-button' },
    label: { pl: 'Dodaj ogłoszenie', en: 'Add Announcement' }['pl'],
    onClick: () => {
      this.publish()
      sendGaEvent(analyticEvent)
    },
  }
}
