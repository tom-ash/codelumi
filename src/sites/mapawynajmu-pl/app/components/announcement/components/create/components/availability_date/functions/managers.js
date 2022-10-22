import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { SHOW_AVAILABILITY_DATE_EVENT } = analyticEvents

export function addAvailabilityDateManager({ addAvailabilityDate, changeInputs }) {
  return {
    classNames: { container: 'form-input checkbox availability-date' },
    checked: addAvailabilityDate,
    label: this.langHandler({
      pl: 'Dodaj datę dostępności',
      en: 'Add Availability Date',
    }),
    onClick: value => {
      changeInputs({ addAvailabilityDate: value })
      sendGaEvent(SHOW_AVAILABILITY_DATE_EVENT)
    },
  }
}
