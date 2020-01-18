import React from 'react'

export default function DerivedRents(props) {
  const {
    languageHandler,
    rentCurrency,
    parsedRentCurrency,
    area,
    netRentAmount,
    calculatedNetRentAmountPerSqm,
    calculatedGrossRentAmount,
    calculatedGrossRentAmountPerSqm
  } = props

  if (+area <= 0 ||
      +netRentAmount <= 0 ||
      +calculatedNetRentAmountPerSqm <= 0 ||
      +calculatedGrossRentAmount <= 0 ||
      +calculatedGrossRentAmountPerSqm <= 0 ||
      rentCurrency === '') return null

  return (
    <div className='derived-rents'>
      <div>
        {languageHandler('Na podstawie:', 'Pursuant to:')}
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {languageHandler('podanego miesięcznego czynszu netto', 'the provided monthly net rent')} (<span>{netRentAmount}&nbsp;{parsedRentCurrency}</span>),
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {languageHandler('podanej powierzchni', 'the provided area')} (<span>{area}&nbsp;{languageHandler('m2', 'sqm')}</span>), {languageHandler('oraz', 'and')}
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {languageHandler('23% stawki VAT', 'the VAT rate of 23%')},
        </div>
      </div>
      <div>
        {languageHandler('automatycznie zostały wyliczene następujące pochodne miesięczne kwoty czynszu:', <span>the following derived monthly rent amounts have been automatically calculated:</span>)}
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {calculatedGrossRentAmount} {parsedRentCurrency} {languageHandler('brutto', 'gross')}
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
            {calculatedNetRentAmountPerSqm} {parsedRentCurrency} {languageHandler('netto + VAT / m2', 'net + VAT  / sqm')}
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {calculatedGrossRentAmountPerSqm} {parsedRentCurrency} {languageHandler('brutto / m2', 'gross / sqm')}
        </div>
      </div>
    </div>
  )
}
