import React from 'react'
import { parseCurrency } from '../../../../../functions/currency-parsers'
import { presentRooms } from './functions/present-rooms'
import { presentFloor } from './functions/present-floor'
import { presentTotalFloors } from './functions/present-total-floors'
import { presentAvailabilityDate } from './functions/present-availability-date'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
  }

  classProvider(itemName) {
    switch (itemName) {
      case 'rent':
        return ' net'
      case 'netRentAmountPerSqm':
        return ' net'
      default:
        return ''
    }
  }

  render() {
    const {
      category,
      area,
      netRentAmount,
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm,
      rentCurrency,
      rooms,
      floor,
      totalFloors,
      availabilityDate,
      showPrimary,
    } = this.props

    const currency = parseCurrency(rentCurrency)

    if (!area && !grossRentAmount && !rooms && !floor && !totalFloors && !availabilityDate)
      <div className='primary-data' />

    return (
      <div className='primary-data'>
        <div className='column'>
          {area && (
            <div className='area'>
              {area}&nbsp;
              {/* TODO: LANG! */}
              m<sup>2</sup>
              <div className='float-clear' />
            </div>
          )}
        </div>
        <div className='column'>
          <PresentRent
            amount={grossRentAmount}
            currency={currency}
            type='gross total'
            perSqm={false}
          />
          {showPrimary && (
            <PresentRent
              amount={grossRentAmountPerSqm}
              currency={currency}
              type='gross per-sqm'
              perSqm={true}
            />
          )}
        </div>
        {netRentAmount && netRentAmountPerSqm && (
          <div className='column'>
            <PresentRent
              amount={netRentAmount}
              currency={currency}
              type='net total'
              perSqm={false}
              net={true}
            />
            {showPrimary && (
              <PresentRent
                amount={netRentAmountPerSqm}
                currency={currency}
                type='net per-sqm'
                perSqm={true}
                net={true}
              />
            )}
          </div>
        )}
        <div className='float-clear' />
        {showPrimary && (
          <>
            {rooms !== null && (
              <div className='rooms'>
                {/* TODO: LANG! */}
                {rooms} {presentRooms({ rooms, category })['pl']}
              </div>
            )}
            {floor !== null && <div className='floor'>{presentFloor({ floor })['pl']}</div>}
            {totalFloors !== null && (
              // TODO: LANG!
              <div className='total-floors'>{presentTotalFloors({ totalFloors })['pl']}</div>
            )}
            {availabilityDate !== null && (
              <div className='available-from'>
                {/* TODO: LANG! */}
                {presentAvailabilityDate({ availabilityDate, category })['pl']}
              </div>
            )}
            <div className='float-clear' />
          </>
        )}
      </div>
    )
  }
}

export default AnnouncementCreatePrimary

function PresentRent({ amount, currency, type, perSqm, net }) {
  if (!amount) return null

  const multipliedAmount = `${Math.ceil(amount * 100)}`

  return (
    <div className={`rent-container ${type}`}>
      {multipliedAmount.slice(0, -2)} <sup className='decimal'>{multipliedAmount.slice(-2)}</sup> {currency}
      {perSqm &&
        <>
          {/* TODO: LANG! */}
          {' '}
          /m<sup>2</sup>
        </>}
        {/* TODO: LANG */}
      <sub>${net ? 'NETTO' : ''} /MC</sub>
      <div className='float-clear' />
    </div>
  )
}
