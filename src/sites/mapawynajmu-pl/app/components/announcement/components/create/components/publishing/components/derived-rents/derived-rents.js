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
        {langHandler({ pl: 'Na podstawie:', en: 'Pursuant to:' })}
      </div>
      <div className='line'>
        <div className='amount'>
          {langHandler({ pl: 'podanego miesięcznego czynszu netto', en: 'the provided monthly net rent' })} (<span>{netRentAmount}&nbsp;{parsedRentCurrency}</span>),
        </div>
      </div>
      <div className='line'>
        <div className='amount'>
          {langHandler({ pl: 'podanej powierzchni', en: 'the provided area' })} (<span>{area}&nbsp;{langHandler({ pl: 'm2', en: 'sqm' })}</span>), {langHandler({ pl: 'oraz', en: 'and' })}
        </div>
      </div>
      <div className='line'>
        <div className='amount'>
          {langHandler({ pl: '23% stawki VAT', en: 'the VAT rate of 23%' })},
        </div>
      </div>
      <div>
        {langHandler('automatycznie zostały wyliczene następujące pochodne miesięczne kwoty czynszu:', <span>the following derived monthly rent amounts have been automatically calculated:</span>)}
      </div>
      <div className='line'>
        <div className='amount'>
          {calculatedGrossRentAmount} {parsedRentCurrency} {langHandler({ pl: 'brutto', en: 'gross' })}
        </div>
      </div>
      <div className='line'>
        <div className='amount'>
            {calculatedNetRentAmountPerSqm} {parsedRentCurrency} {langHandler({ pl: 'netto + VAT / m2', en: 'net + VAT  / sqm' })}
        </div>
      </div>
      <div className='line'>
        <div className='amount'>
          {calculatedGrossRentAmountPerSqm} {parsedRentCurrency} {langHandler({ pl: 'brutto / m2', en: 'gross / sqm' })}
        </div>
      </div>
    </div>
  )
}
