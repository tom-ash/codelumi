import React from 'react'

export default function SecondaryData(props) {
  const {
    venue,
    languageHandler,
    rentCurrency,
    parseCurrency,
    area,
    netRentAmount,
    netRentAmountPerSqm,
    grossRentAmount,
    grossRentAmountPerSqm
  } = props

  const currency = parseCurrency(rentCurrency)

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
            {netRentAmount} {currency}
          </div>
          <div className='meta'>
            {languageHandler('netto + VAT / mc', 'net + VAT / mo')}
          </div>
        </div>
      </div>
      <div className='outer rent gross total'>
        <div className='inner'>
          <div className='amount'>
            {grossRentAmount / 100} {currency}
          </div>
          <div className='meta'>
            {languageHandler('brutto / mc', 'gross / mo')}
          </div>
        </div>
      </div>
      <div className='outer rent net per-sqm'>
        <div className='inner'>
          <div className='amount'>
            {netRentAmountPerSqm / 100} {currency} / {languageHandler('m2', 'sqm')}
          </div>
          <div className='meta'>
            {languageHandler('netto + VAT / mc', 'net + VAT / mo')}
          </div>
        </div>
      </div>
      <div className='outer rent gross per-sqm'>
        <div className='inner'>
          <div className='amount'>
            {grossRentAmountPerSqm / 100} {currency} / {languageHandler('m2', 'sqm')}
          </div>
          <div className='meta'>
            {languageHandler('brutto / mc', 'gross / mo')}
          </div>
        </div>
      </div>
    </div>
  )
}
