import React from 'react'

interface ContractAndRemunerationItemInterface {
  (props: {
    className: string
    contract: string
    min: number
    max: number
    currency: string
    per: string
  }): React.ReactElement
}

interface FormatRemuneration {
  (remuneration: number): string
}

const formatRemuneration: FormatRemuneration = remuneration => {
  return Number(remuneration).toLocaleString().replace(/,/g, ' ')
}

export const ContractAndRemunerationItem: ContractAndRemunerationItemInterface = props => {
  const { className, contract, min, max, currency, per } = props

  return (
    <div className={`contract-and-remuneration ${className}`}>
      <div className='contract'>{contract}</div>
      <div className='remuneration'>
        <span className='amount'>
          {formatRemuneration(min)} - {formatRemuneration(max)}
        </span>
        <span className='currency'>{currency}</span>
        <span className='per'>/{per}</span>
      </div>
    </div>
  )
}
