import React from 'react'

const englishMonths = [
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

const polishMonths = [
  'stycznia',
  'lutego',
  'marca',
  'kwietnia',
  'maja',
  'czerwca',
  'lipca',
  'sierpnia',
  'września',
  'października',
  'listopada',
  'grudnia'
]

interface PrettifyDateProps {
  date: string,
  lang?: string
}

const getEnglishMonth = (month: number): string => englishMonths[month - 1]
const getPolishMonth = (month: number): string => polishMonths[month - 1]

const getDaySuffix = (day: number) => {
  if ([1, 21, 31].indexOf(day) !== -1) return 'st'
  if ([2, 22].indexOf(day) !== -1) return 'nd'
  if ([3, 23].indexOf(day) !== -1) return 'rd'

  return 'th'
}

const prettifyDate = (props: PrettifyDateProps) => {
  const { date, lang } = props
  const matches = date.match(/^(\d{4})-(\d{2})-(\d{2})$/)

  if (!matches) return null

  const [_fullMatch, year, month, day] = matches

  let prettifiedMonth
  let prettifiedDay

  if (lang === 'pl') {
    prettifiedMonth = getPolishMonth(+month)
    prettifiedDay = day

    return <>{prettifiedDay} {prettifiedMonth} {year}</>
  }

  if (lang === 'en') {
    prettifiedMonth = getEnglishMonth(+month)
    prettifiedDay = <>{+day}<sup>{getDaySuffix(+day)}</sup></>

    return <>{prettifiedMonth} {prettifiedDay}, {year}</>
  }
}

export default prettifyDate
