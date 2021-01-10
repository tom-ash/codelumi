import React from 'react'

export default function DerivedRents(props) {
  const {
    langHandler,
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
        {langHandler('Na podstawie:', 'Pursuant to:')}
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {langHandler('podanego miesięcznego czynszu netto', 'the provided monthly net rent')} (<span>{netRentAmount}&nbsp;{parsedRentCurrency}</span>),
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {langHandler('podanej powierzchni', 'the provided area')} (<span>{area}&nbsp;{langHandler('m2', 'sqm')}</span>), {langHandler('oraz', 'and')}
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {langHandler('23% stawki VAT', 'the VAT rate of 23%')},
        </div>
      </div>
      <div>
        {langHandler('automatycznie zostały wyliczene następujące pochodne miesięczne kwoty czynszu:', <span>the following derived monthly rent amounts have been automatically calculated:</span>)}
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {calculatedGrossRentAmount} {parsedRentCurrency} {langHandler('brutto', 'gross')}
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
            {calculatedNetRentAmountPerSqm} {parsedRentCurrency} {langHandler('netto + VAT / m2', 'net + VAT  / sqm')}
        </div>
      </div>
      <div className='line'>
        <i className='fas fa-circle' />
        <div className='amount'>
          {calculatedGrossRentAmountPerSqm} {parsedRentCurrency} {langHandler('brutto / m2', 'gross / sqm')}
        </div>
      </div>
    </div>
  )
}
