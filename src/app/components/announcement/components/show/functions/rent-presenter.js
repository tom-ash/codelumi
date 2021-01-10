import React from 'react'
import { parseCurrency } from '../../../functions/currency-parsers'

export const RentPresenter = ({
  amount,
  currency,
  type,
  perSqm,
  langObjHandler,
  net
}) => {
  if (!amount) return null
  
  return (
    <div className={`rent-container${type ? ` ${type}` : ''}`}>
      <div className='amount'>
        {presentAmount(amount)}
      </div>
      <div className='currency'>
        {parseCurrency(currency)}
      </div>
      {perSqm &&
      <div className='per-sqm'>
        {langObjHandler({
          pl: (
            <React.Fragment>
              <div className='m'>
                /m
              </div>
              <div className='sq'>
                2
              </div>
            </React.Fragment>
          ),
          en: `/sqm` })}
      </div>}
      <div className='per-month'>
        {langObjHandler({ pl: `${net ? 'NETTO' : ''}/MC`, en: `${net ? 'NET' : ''}/MO` })}
      </div>
      <div className='float-clear' />
    </div>
  )
}

function presentAmount(amount) {
  if (!amount) return

  const multipliedAmount = `${Math.round(amount * 100)}`

  return (
    <React.Fragment>
      <div className='basis'>
        {multipliedAmount.slice(0, -2)}
      </div>
      <div className='decimal'>
        {multipliedAmount.slice(-2)}
      </div>
      <div className='float-clear' />
    </React.Fragment>
  )
}
