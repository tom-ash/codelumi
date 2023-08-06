import React from 'react'
import { parseCurrency } from '../../../functions/currency-parsers'

interface RentInterface {
  (props: { rentAmount: number; rentCurrency: number }): React.ReactElement | null
}

export const Rent: RentInterface = props => {
  const {
    rentAmount,
    rentCurrency,
    // type,
    // perSqm,
    // net
  } = props

  if (!rentAmount) return null

  const multipliedAmount = `${Math.ceil(rentAmount * 100)}`
  const integerAmount = <span className='amount'>{multipliedAmount.slice(0, -2)}</span>
  const decimalAmount = multipliedAmount.slice(-2)
  const amountWithDecimal = (
    <>
      {integerAmount}
      <sup className='decimal'>{decimalAmount}</sup> 
    </>
  )
  const parsedAmount = decimalAmount === '00' ? integerAmount : amountWithDecimal
  const parsedCurrency = parseCurrency(rentCurrency)

  return (
    <div className={'rent'}>
      {parsedAmount}
      {parsedCurrency}
      <span className='per-month'>/MC</span>
    </div>
  )
}
