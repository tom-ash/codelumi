import React from 'react'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { parseCurrency } from '../../../../../../functions/currency-parsers'
import { presentRooms } from './functions/present-rooms'
import { presentFloor } from './functions/present-floor'
import { presentTotalFloors } from './functions/present-total-floors'
import { presentAvailabilityDate } from './functions/present-availability-date'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  classProvider(itemName) {
    switch (itemName) {
      case 'rent': return ' net'
      case 'netRentAmountPerSqm': return ' net'
      default: return ''
    }
  }
  
  render() {
    const {
      category,
      netRentAmount,
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm,
      rentCurrency,
      rooms,
      floor,
      totalFloors,
      availabilityDate
    } = this.props

    const currency = parseCurrency(rentCurrency)

    return (
      <div id='announcement-show-tile-primary'>
        <div className='rent-column'>
          <PresentRent
            amount={grossRentAmount}
            currency={currency}
            type='gross total'
            perSqm={false}
            languageObjectHandler={this.languageObjectHandler}
          />
          <PresentRent
            amount={grossRentAmountPerSqm}
            currency={currency}
            type='gross per-sqm'
            perSqm={true}
            languageObjectHandler={this.languageObjectHandler}
          />
        </div>
        {netRentAmount && netRentAmountPerSqm &&
        <div className='rent-column right'>
          <PresentRent
            amount={netRentAmount}
            currency={currency}
            type='net total'
            perSqm={false}
            languageObjectHandler={this.languageObjectHandler}
            net={true}
          />
          <PresentRent
            amount={netRentAmountPerSqm}
            currency={currency}
            type='net per-sqm'
            perSqm={true}
            languageObjectHandler={this.languageObjectHandler}
            net={true}
          />
        </div>
        }
        <div className='float-clear' />
        {rooms !== null &&
        <div className='rooms'>
          {rooms} {this.languageObjectHandler(presentRooms({ rooms, category }))}
        </div>}
        {floor !== null &&
        <div className='floor'>
          {this.languageObjectHandler(presentFloor({ floor }))}
        </div>}
        {totalFloors !== null &&
        <div className='total-floors'>
          {this.languageObjectHandler(presentTotalFloors({ totalFloors   }))}
        </div>}
        {availabilityDate !== null &&
        <div className='available-from'>
          {this.languageObjectHandler(presentAvailabilityDate({ availabilityDate, category }))}
        </div>}
        <div className='float-clear' />
      </div>
    )
  }
}

export default AnnouncementCreatePrimary

function PresentRent({
  amount,
  currency,
  type,
  perSqm,
  languageObjectHandler,
  net
}) {
  return (
    <div className={`rent-container ${type}`}>
      <div className='amount'>
        {presentAmount(amount)}
      </div>
      <div className='currency'>
        {currency} 
      </div>
      {perSqm &&
      <div className='per-sqm'>
        {languageObjectHandler({
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
        {languageObjectHandler({ pl: `${net ? 'NETTO' : ''}/MC`, en: `${net ? 'NET' : ''}/MO` })}
      </div>
      <div className='float-clear' />
    </div>
  )
}


function presentAmount(amount) {
  if (!amount) return

  const multipliedAmount = `${amount * 100}`

  return (
    <React.Fragment>
      <div className='basis'>
        {multipliedAmount.slice(0, -2)}
      </div>
      <div className='decimal'>
        {multipliedAmount.slice(-2)}
      </div>
    </React.Fragment>
  )
}
