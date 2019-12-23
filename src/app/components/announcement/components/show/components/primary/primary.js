import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { items } from './constants/items'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { parseAdditionalFees } from '../../../../functions/additional-fee-parsers'
import { parseAvailabilityDate } from './functions/parse-availability-date'
import './styles/styles.scss'
import { rentPerSqmCounter } from '../../../../functions/rent-per-sqm-counter'
import DataTile from '../../../index/components/tile/components/data-tile/data-tile'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.rentPerSqmCounter = rentPerSqmCounter.bind(this)
    this.parseAvailabilityDate = parseAvailabilityDate.bind(this)
  }

  classProvider(itemName) {
    switch (itemName) {
      case 'rent': return ' net'
      case 'rentNetPerSqm': return ' net'
      default: return ''
    }
  }
  
  render() {
    const {
      area, rooms, netRentAmount, rentCurrency, grossRentAmount, netRentAmountPerSqm, grossRentAmountPerSqm, floor,
      totalFloors, availabilityDate
    } = this.props

    const currency = parseCurrency(rentCurrency)

    return (
      <div id='announcement-show-primary'>
        <div className='left-container'>
          <DataTile classNames='area' icon='fas fa-ruler-combined' value={`${area} ${this.languageHandler('m2', 'sqm')}`} />
        </div>
        <div className='right-container'>
          <DataTile classNames='rooms' icon='fas fa-door-closed' value={`${rooms} ${this.languageHandler('pomieszczeń', 'rooms')}`} />
        </div>
        <div className='float-clear' />
        <div className='left-container rent'>
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
                    {this.languageHandler('netto + VAT / mc', 'net + VAT / mo')}
                  </div>
                </div>
                <div className='gross'>
                  <div className='inner'>
                    <div className='amount'>
                      {grossRentAmount / 100} {currency}
                    </div>
                    <div className='meta'>
                      {this.languageHandler('brutto / mc', 'gross / mo')}
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
        <div className='right-container rent'>
          <DataTile
            classNames='rent'
            icon='fas fa-coins'
            value={(
              <div>
                <div className='net'>
                  <div className='amount'>
                    {netRentAmountPerSqm / 100} {currency} / {this.languageHandler('m2', 'sqm')}
                  </div>
                  <div className='meta'>
                    {this.languageHandler('netto + VAT / mc', 'net + VAT / mo')}
                  </div>
                </div>
                <div className='gross'>
                  <div className='inner'>
                    <div className='amount'>
                      {grossRentAmountPerSqm / 100} {currency} / {this.languageHandler('m2', 'sqm')}
                    </div>
                    <div className='meta'>
                      {this.languageHandler('brutto / mc', 'gross / mo')}
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
        <div className='float-clear' />
        <div className='left-container'>
          <DataTile
            classNames='floor'
            icon='fas fa-layer-group'
            value={`${floor} ${this.languageHandler('piętro', 'floor')} (${this.languageHandler('z', 'of')} ${totalFloors})`}
          />
        </div>
        <div className='right-container'>
          <DataTile
            classNames='availability-date'
            icon='fas fa-calendar-alt'
            value={`${this.parseAvailabilityDate(availabilityDate)}`}
          />
        </div>
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary)