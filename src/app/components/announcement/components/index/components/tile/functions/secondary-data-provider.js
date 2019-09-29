import React from 'react'

export function secondaryDataProvider() {
  const {
    announcement,
    venue
  } = this.props
  const {
    area,
    net_rent_amount,
    net_rent_amount_per_sqm,
    gross_rent_amount,
    gross_rent_amount_per_sqm
  } = announcement

  return (
    <div className={`data ${venue}`}>
      <div className='outer area'>
        <div className='inner'>
          {area} {this.languageHandler('m2', 'sqm')}
        </div>
      </div>
      <div className='outer rent net total'>
        <div className='inner'>
          <div className='amount'>
            {net_rent_amount} {this.rentCurrency}
          </div>
          <div className='meta'>
            {this.languageHandler('netto + VAT / mc', 'net + VAT/ mo')}
          </div>
        </div>
      </div>
      <div className='outer rent gross total'>
        <div className='inner'>
          <div className='amount'>
            {gross_rent_amount} {this.rentCurrency}
          </div>
          <div className='meta'>
            {this.languageHandler('brutto / mc', 'gross / mo')}
          </div>
        </div>
      </div>
      <div className='outer rent net per-sqm'>
        <div className='inner'>
          <div className='amount'>
            {net_rent_amount_per_sqm / 100} {this.rentCurrency} / {this.languageHandler('m2', 'sqm')}
          </div>
          <div className='meta'>
            {this.languageHandler('netto + VAT / mc', 'net + VAT/ mo')}
          </div>
        </div>
      </div>
      <div className='outer rent gross per-sqm'>
        <div className='inner'>
          <div className='amount'>
            {gross_rent_amount_per_sqm / 100} {this.rentCurrency} / {this.languageHandler('m2', 'sqm')}
          </div>
          <div className='meta'>
            {this.languageHandler('brutto / mc', 'gross / mo')}
          </div>
        </div>
      </div>
    </div>
  )
}