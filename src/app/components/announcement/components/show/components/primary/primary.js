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

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.rentPerSqmCounter = rentPerSqmCounter.bind(this)
  }

  classProvider(itemName) {
    switch (itemName) {
      case 'rent': return ' net'
      case 'rentNetPerSqm': return ' net'
      default: return ''
    }
  }
  
  render() {
    return (
      <div id='announcement-show-primary'>
        {
        items.map((item, index) => (
          <div
          key={index}
          className='item'>
            <div className='icon'>
              <i className={item.icon}/>
            </div>
            <div className='label-value'>
              <div className='label'>
                {this.languageHandler(item.label.polish, item.label.english)}
              </div>
              <div className={`value${this.classProvider(item.stateKey)}`}>
                {
                item.stateKey !== 'rent' &&
                item.stateKey !== 'rentPerSqm' &&
                item.stateKey !== 'availabilityDate' &&
                item.stateKey !== 'rentGross' &&
                this.props[item.stateKey]
                }
                {
                item.stateKey === 'rent' &&
                `${this.props.rentAmount} ${parseCurrency(this.props.rentCurrency)} ${this.languageHandler('netto', 'net')} + VAT`
                }
                {
                item.stateKey === 'rentGross' &&
                <span className='gross'>
                  {this.props.rentAmount * 1.23} {parseCurrency(this.props.rentCurrency)} {this.languageHandler('brutto', 'gross')}
                </span>
                }
                {
                item.stateKey === 'rentNetPerSqm' &&
                <span className='net'>
                  {this.rentPerSqmCounter(this.props.rentAmount, this.props.area)} {parseCurrency(this.props.rentCurrency)} {this.languageHandler('netto + VAT', 'net + VAT')}
                </span>
                }
                {
                item.stateKey === 'rentGrossPerSqm' &&
                <span className='gross'>
                  {this.rentPerSqmCounter(this.props.rentAmount * 1.23, this.props.area)} {parseCurrency(this.props.rentCurrency)} {this.languageHandler('brutto', 'gross')}
                </span>
                }
                {
                item.stateKey === 'additionalFees' &&
                this.languageHandler(parseAdditionalFees(this.props.additionalFees).polish,
                                    parseAdditionalFees(this.props.additionalFees).english)
                }
                {
                item.stateKey === 'area' &&
                this.languageHandler(' m2', ' sqm')
                }
                {
                item.stateKey === 'availabilityDate' &&
                parseAvailabilityDate.call(this, this.props[item.stateKey])
                }
              </div>
              <div className='float-clear' />
            </div>
            <div className='float-clear' />
          </div>
        ))
        }
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary)