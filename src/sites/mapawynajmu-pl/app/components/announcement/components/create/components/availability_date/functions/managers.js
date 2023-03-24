import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { SHOW_AVAILABILITY_DATE_EVENT } = analyticEvents

export function addAvailabilityDateManager({ addAvailabilityDate, setInputs }) {
  return {
    classNames: { container: 'form-input checkbox availability-date' },
    checked: addAvailabilityDate,
    label: {
      pl: 'Dodaj datę dostępności',
      en: 'Add Availability Date',
    }['pl'],
    onClick: value => {
      setInputs({ addAvailabilityDate: value })
      sendGaEvent(SHOW_AVAILABILITY_DATE_EVENT)
    },
  }
}
