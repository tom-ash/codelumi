import React from 'react'
import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'

interface RemunerationInterface {
  (props: {
    b2bMin?: number
    b2bMax?: number
    // b2bCurrency?: string;
    employmentMin?: number
    employmentMax?: number
    // employmentCurrency?: string;
  }): React.ReactElement | null
}

interface FormatRemuneration {
  (remuneration: number): string
}

const formatRemuneration: FormatRemuneration = remuneration => {
  return Number(remuneration).toLocaleString().replace(/,/g, ' ')
}

export const Remuneration: RemunerationInterface = props => {
  const { b2bMin, b2bMax, employmentMin, employmentMax } = props

  if (b2bMin && b2bMax) {
    return (
      <strong className='b2b-remuneration'>
        {/* <SVG name='coins' /> */}
        {formatRemuneration(b2bMin)} - {formatRemuneration(b2bMax)} PLN
      </strong>
    )
  }

  if (employmentMin && employmentMax) {
    return (
      <strong className='employment-remuneration'>
        {employmentMin} - {employmentMax} PLN
      </strong>
    )
  }

  return null
}
