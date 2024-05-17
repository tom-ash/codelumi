import React from 'react'
import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'
import { ContractAndRemunerationItem } from './components/contract-and-remuneration-item/contract-and-remuneration-item'
import { useTexts } from '../../../../../../../shared/app/functions/store/use-texts'
import { FloatClear } from '../../../../../../../shared/app/components/support/float-clear/float-clear'

interface RemunerationInterface {
  (props: {
    b2bMin?: number
    b2bMax?: number
    // b2bCurrency?: string;
    employmentMin?: number
    employmentMax?: number
    // employmentCurrency?: string;
  }): React.ReactElement
}

export const Remuneration: RemunerationInterface = props => {
  const { b2bMin, b2bMax, employmentMin, employmentMax } = props

  const { b2bContract, employmentContract, b2bPer, employmentPer } = useTexts()

  return (
    <div>
      {b2bMin && b2bMax && (
        <ContractAndRemunerationItem
          className='b2b'
          contract={b2bContract}
          min={b2bMin}
          max={b2bMax}
          currency='PLN'
          per={b2bPer}
        />
      )}
      {employmentMin && employmentMax && (
        <ContractAndRemunerationItem
          className='employment'
          contract={employmentContract}
          min={employmentMin}
          max={employmentMax}
          currency='PLN'
          per={employmentPer}
        />
      )}
      <FloatClear />
    </div>
  )
}
