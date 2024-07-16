import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { SectionHeading } from '../../../../../../../../shared/app/components/support/headings/section-heading'
import { Remuneration as RemunerationPartial } from '../../../common/remuneration/remuneration'

interface RemunerationInterface {
  (props: {}): React.ReactElement | null
}

export const Remuneration: RemunerationInterface = () => {
  const {
    posting: { b2bMin, b2bMax, b2bCurrency, employmentMin, employmentMax, employmentCurrency },
  } = useData()

  if (!(b2bMin && b2bMax && b2bCurrency) && !(employmentMin && employmentMax && employmentCurrency)) {
    return null
  }

  return (
    <section id='remuneration'>
      <SectionHeading name='remuneration' />
      <RemunerationPartial
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
        b2bCurrency={b2bCurrency}
        employmentCurrency={employmentCurrency}
      />
    </section>
  )
}
