import React from 'react'
import ReactCalendar from 'react-calendar/dist/entry.nostyle'
import { parseDate } from '../../../../functions/date-parsers'
import { useApp } from '../../../../../../shared/app/functions/store/use-app'
import { useInputs } from '../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'

const Calendar = () => {
  const { lang: locale } = useApp()
  const { availabilityDate } = useInputs()
  const dispatch = useDispatch()
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
