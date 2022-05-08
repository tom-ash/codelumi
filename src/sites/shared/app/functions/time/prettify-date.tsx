import React from 'react'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

interface PrettifyDateProps {
  date: string
}

const getMonth = (month: number): string => months[month - 1]

const getDaySuffix = (day: number) => {
  if ([1, 21, 31].indexOf(day) !== -1) return 'st'
  if ([2, 22].indexOf(day) !== -1) return 'nd'
  if ([3, 23].indexOf(day) !== -1) return 'rd'

  return 'th'
}

const prettifyDate = (props: PrettifyDateProps) => {
  const { date } = props
  const matches = date.match(/^(\d{4})-(\d{2})-(\d{2})$/)

  if (!matches) return null

  const [_fullMatch, year, month, day] = matches
  const prettifiedMonth = getMonth(+month)
  const prettifiedDay = day

  return <>{prettifiedMonth} {+prettifiedDay}<sup>{getDaySuffix(+day)}</sup>, {year}</>
}

export default prettifyDate
