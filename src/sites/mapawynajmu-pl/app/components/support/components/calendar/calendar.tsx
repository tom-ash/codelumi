import React from 'react'
import ReactCalendar from 'react-calendar/dist/entry.nostyle'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'
import { parseDate } from '../../../../functions/date-parsers'

const Calendar = () => {
  const { state, dispatch } = useStore()
  const { app, inputs } = state
  const { lang: locale } = app
  const { availabilityDate } = inputs
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onChange = (date: Date) => setInputs({ availabilityDate: parseDate(date) })
  const value = availabilityDate ? new Date(availabilityDate) : null

  const calendarProps = {
    locale,
    value,
    onChange,
  }

  //@ts-ignore
  return <ReactCalendar {...calendarProps} />
}

export default Calendar
