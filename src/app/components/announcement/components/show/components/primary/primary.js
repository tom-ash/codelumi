import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { items } from './constants/items'
import { parseCurrency } from '../../../../functions/currency-parsers'
import { parseAdditionalFees } from '../../../../functions/additional-fee-parsers'
import { parseAvailabilityDate } from './functions/parse-availability-date'
import './styles/styles.scss'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
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
              <div className='value'>
                {
                item.stateKey !== 'rent' &&
                item.stateKey !== 'availabilityDate' &&
                item.stateKey !== 'rentGross' &&
                this.props[item.stateKey]
                }
                {
                item.stateKey === 'rent' &&
                `${this.props.rentAmount} ${parseCurrency(this.props.rentCurrency)}`
                }
                {
                item.stateKey === 'rentGross' &&
                `${this.props.rentAmount * 1.23} ${parseCurrency(this.props.rentCurrency)}`
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
                {
                item.stateKey == 'floor' &&
                this.languageHandler(` (z ${this.props.totalFloors})`, ` (of ${this.props.totalFloors})`)
                }
              </div>
              <div className='float-clear' />
            </div>
          </div>
        ))
        }
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary)