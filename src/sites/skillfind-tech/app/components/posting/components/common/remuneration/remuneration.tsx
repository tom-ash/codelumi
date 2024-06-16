import React from 'react'
// import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'
import { ContractAndRemunerationItem } from './components/contract-and-remuneration-item/contract-and-remuneration-item'
import { useTexts } from '../../../../../../../shared/app/functions/store/use-texts'
import { FloatClear } from '../../../../../../../shared/app/components/support/float-clear/float-clear'
import { Currency } from '../../../postings.types'

interface RemunerationInterface {
  (props: {
    b2bMin?: number
    b2bMax?: number
    b2bCurrency?: Currency;
    employmentMin?: number
    employmentMax?: number
    employmentCurrency?: Currency;
  }): React.ReactElement
}

export const Remuneration: RemunerationInterface = props => {
  const { b2bMin, b2bMax, employmentMin, employmentMax, b2bCurrency, employmentCurrency } = props

  const { b2bContract, employmentContract, b2bPer, employmentPer } = useTexts()

  return (
    <div className='contract-and-remuneration'>
      {b2bMin && b2bMax && b2bCurrency && (
        <ContractAndRemunerationItem
          className='b2b'
          contract={b2bContract}
          min={b2bMin}
          max={b2bMax}
          currency={b2bCurrency}
          per={b2bPer}
        />
      )}
      {employmentMin && employmentMax && employmentCurrency && (
        <ContractAndRemunerationItem
          className='employment'
          contract={employmentContract}
          min={employmentMin}
          max={employmentMax}
          currency={employmentCurrency}
          per={employmentPer}
        />
      )}
      <FloatClear />
    </div>
  )
}
