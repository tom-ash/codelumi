import React from 'react'
import { parseCurrency } from '../../../functions/currency-parsers';

interface RentInterface {
  (props: {
    amount: number;
    currency: number;
  }): React.ReactElement
}

export const Rent: RentInterface = (props) => {
  const {
    amount,
    currency,
    // type,
    // perSqm,
    // net
  } = props
    const multipliedAmount = `${Math.ceil(amount * 100)}`
    const parsedCurrency = parseCurrency(currency)

    return (
      <div className={'rent'}>
        {multipliedAmount.slice(0, -2)}
        <sup className='decimal'>{multipliedAmount.slice(-2)}</sup>
        {parsedCurrency}
        <span className='per-month'>/MC</span>
      </div>
    )
}
