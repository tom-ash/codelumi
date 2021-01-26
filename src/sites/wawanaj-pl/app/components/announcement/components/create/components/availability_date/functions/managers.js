import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  SHOW_AVAILABILITY_DATE_EVENT
} = analyticEvents

export function showAvailabilityDateManager({
  showAvilabilityDate,
  changeControl
}) {
  return {
    classNames: { container: 'form-input checkbox availability-date' },
    checked: showAvilabilityDate,
    label: this.langObjHandler({
      pl: 'Dodaj datę dostępności',
      en: 'Add Availability Date'
    }),
    onClick: value => {
      changeControl({ showAvilabilityDate: value })
      sendGaEvent(SHOW_AVAILABILITY_DATE_EVENT)
    }
  }
}
