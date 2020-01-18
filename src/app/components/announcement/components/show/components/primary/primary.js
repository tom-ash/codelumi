import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { items } from './constants/items'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { parseAvailabilityDate } from './functions/parse-availability-date'
import { floorParser } from '../../../../functions/floor-parser'
import DataTile from '../../../index/components/tile/components/data-tile/data-tile'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.parseAvailabilityDate = parseAvailabilityDate.bind(this)
    this.floorParser = floorParser.bind(this)
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
      area,
      rooms,
      rentCurrency,
      netRentAmount,
      netRentAmountPerSqm,
      grossRentAmount,
      grossRentAmountPerSqm,
      floor,
      totalFloors,
      availabilityDate
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
                      {grossRentAmount} {currency}
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
                    {netRentAmountPerSqm} {currency} / {this.languageHandler('m2', 'sqm')}
                  </div>
                  <div className='meta'>
                    {this.languageHandler('netto + VAT / mc', 'net + VAT / mo')}
                  </div>
                </div>
                <div className='gross'>
                  <div className='inner'>
                    <div className='amount'>
                      {grossRentAmountPerSqm} {currency} / {this.languageHandler('m2', 'sqm')}
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
            value={`${this.floorParser(floor)} (${this.languageHandler('z', 'of')} ${totalFloors})`}
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