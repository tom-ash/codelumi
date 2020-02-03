import React from 'react'
import DataTile from '../data-tile/data-tile'

export default function SecondaryData(props) {
  const {
    venue, languageHandler, area, rentCurrency, parseCurrency, netRentAmount, netRentAmountPerSqm, grossRentAmount,
    grossRentAmountPerSqm, rooms, floor, totalFloors, parseAvailabilityDate, availabilityDate
  } = props
  const currency = parseCurrency(rentCurrency)

  return (
    <div className={`secondary-data ${venue}`}>
      <div className='data-container area'>
        <DataTile classNames='area' icon='fas fa-ruler-combined' value={`${area} ${languageHandler('m2', 'sqm')}`} />
      </div>
      <div className='data-container rooms'>
        <DataTile
          classNames='rooms'
          icon='fas fa-door-closed'
          value={`${rooms} ${languageHandler('pomieszczeń', 'rooms')}`}
        />
      </div>
      <div className='data-container rent'>
        <DataTile
          classNames='rent'
          icon='fas fa-coins'
          value={(
            <div>
              <div className='net'>
                <div className='amount'>
                  {netRentAmount} {currency}
                </div>
                <div className='meta'>
                  {languageHandler('netto + VAT / mc', 'net + VAT / mo')}
                </div>
              </div>
              <div className='gross'>
                <div className='inner'>
                  <div className='amount'>
                    {grossRentAmount / 100} {currency}
                  </div>
                  <div className='meta'>
                    {languageHandler('brutto / mc', 'gross / mo')}
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>
      <div className='data-container rent'>
        <DataTile
          classNames='rent'
          icon='fas fa-coins'
          value={(
            <div>
              <div className='net'>
                <div className='amount'>
                  {netRentAmountPerSqm / 100} {currency} / {languageHandler('m2', 'sqm')}
                </div>
                <div className='meta'>
                  {languageHandler('netto + VAT / mc', 'net + VAT / mo')}
                </div>
              </div>
              <div className='gross'>
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
          )}
        />
      </div>
      <div className='float-clear' />
      <div className='data-container floor'>
        <DataTile
          classNames='floor'
          icon='fas fa-layer-group'
          value={`${floor} (${languageHandler('z', 'of')} ${totalFloors})`}
        />
      </div>
      <div className='data-container availability-date'>
        <DataTile
          classNames='availability-date'
          icon='fas fa-calendar-alt'
          value={`${parseAvailabilityDate(availabilityDate)}`}
        />
      </div>
      <div className='float-clear' />
    </div>
  )
}
