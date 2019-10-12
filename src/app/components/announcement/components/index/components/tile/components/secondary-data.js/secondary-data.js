import React from 'react'

export default function SecondaryData(props) {
  const {
    venue,
    languageHandler,
    rentCurrency,
    area,
    netRentAmount,
    netRentAmountPerSqm,
    grossRentAmount,
    grossRentAmountPerSqm
  } = props

  return (
    <div className={`secondary-data ${venue}`}>
      <div className='outer area'>
        <div className='inner'>
          {area} {languageHandler('m2', 'sqm')}
        </div>
      </div>
      <div className='outer rent net total'>
        <div className='inner'>
          <div className='amount'>
            {netRentAmount} {rentCurrency}
          </div>
          <div className='meta'>
            {languageHandler('netto + VAT / mc', 'net + VAT/ mo')}
          </div>
        </div>
      </div>
      <div className='outer rent gross total'>
        <div className='inner'>
          <div className='amount'>
            {grossRentAmount / 100} {rentCurrency}
          </div>
          <div className='meta'>
            {languageHandler('brutto / mc', 'gross / mo')}
          </div>
        </div>
      </div>
      <div className='outer rent net per-sqm'>
        <div className='inner'>
          <div className='amount'>
            {netRentAmountPerSqm / 100} {rentCurrency} / {languageHandler('m2', 'sqm')}
          </div>
          <div className='meta'>
            {languageHandler('netto + VAT / mc', 'net + VAT/ mo')}
          </div>
        </div>
      </div>
      <div className='outer rent gross per-sqm'>
        <div className='inner'>
          <div className='amount'>
            {grossRentAmountPerSqm / 100} {rentCurrency} / {languageHandler('m2', 'sqm')}
          </div>
          <div className='meta'>
            {languageHandler('brutto / mc', 'gross / mo')}
          </div>
        </div>
      </div>
    </div>
  )
}
