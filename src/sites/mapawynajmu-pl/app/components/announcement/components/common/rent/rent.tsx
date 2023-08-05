import React from 'react'
import { parseCurrency } from '../../../functions/currency-parsers'

interface RentInterface {
  (props: { amount: number; currency: number }): React.ReactElement | null
}

export const Rent: RentInterface = props => {
  const {
    amount,
    currency,
    // type,
    // perSqm,
    // net
  } = props
  if (!amount) return null

  const multipliedAmount = `${Math.ceil(amount * 100)}`
  const integerAmount = <span className='amount'>{multipliedAmount.slice(0, -2)}</span>
  const decimalAmount = multipliedAmount.slice(-2)
  const amountWithDecimal = (
    <>
      {integerAmount}
      <sup className='decimal'>{decimalAmount}</sup> 
    </>
  )
  const parsedAmount = decimalAmount === '00' ? integerAmount : amountWithDecimal
  const parsedCurrency = parseCurrency(currency)

  return (
    <div className={'rent'}>
      {parsedAmount}
      {parsedCurrency}
      <span className='per-month'>/MC</span>
    </div>
  )
}
