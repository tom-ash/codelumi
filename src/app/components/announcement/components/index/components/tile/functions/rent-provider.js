import React from 'react'

export function rentProvider(perSqm, area) {
  const classes = `${perSqm ? ' per-sqm' : 'total'}`
  let netRentAmount = this.props.announcement.net_rent_amount
  let grossRentAmount = netRentAmount * 1.23
  if (perSqm) netRentAmount = this.rentPerSqmCounter(netRentAmount, area)
  if (perSqm) grossRentAmount = this.rentPerSqmCounter(grossRentAmount, area)
  const netRentAmountWithCurrency = `${netRentAmount} ${this.rentCurrency}${perSqm ? this.languageHandler(' / m2', ' / sqm') : ''}`
  const grossRentAmountWithCurrency = `${grossRentAmount} ${this.rentCurrency}${perSqm ? this.languageHandler(' / m2', ' / sqm') : ''}`
  const netMeta = this.languageHandler('netto + VAT / mc', 'net + VAT/ mo')
  const grossMeta = this.languageHandler('brutto / mc', 'gross / mo')

  return (
    <div className={classes}>
      <div className='net'>
        <div className='amount'>
          {netRentAmountWithCurrency}
        </div>
        <div className='meta'>
          {netMeta}
        </div>
      </div>
      <div className='gross'>
        <div className='amount'>
          {grossRentAmountWithCurrency}
        </div>
        <div className='meta'>
          {grossMeta}
        </div>
      </div>
    </div>
  )
}