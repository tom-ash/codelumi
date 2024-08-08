import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { ContractSelector } from './components/contract-selector/contract-selector'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { SectionHeading } from '../../../../../../../../../../shared/app/components/support/headings/section-heading'

interface Contract {
  name: string
  label: string
  instructions: string
}

export const Contracts = () => {
  useStyles(styles)

  const { contracts } = useInputs()
  const inputs = useInputs()
  const { minPlaceholder, maxPlaceholder, optional } = useTexts()

  return (
    <div className='contracts'>
      <SectionHeading
        name='remuneration'
        suffix={<span className='suffix optional'>{optional}</span>}
      />
      {contracts.map((contract: Contract) => {
        const { name, label, instructions } = contract

        const checked = inputs[name]

        return (
          <ContractSelector
            key={label}
            name={name}
            label={label}
            checked={checked}
            instructions={instructions}
            minPlaceholder={minPlaceholder}
            maxPlaceholder={maxPlaceholder}
          />
        )
      })}
    </div>
  )
}
