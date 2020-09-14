import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedSelect, ManagedCheckbox } from 'managed-inputs'
const Calendar = loadable(() => import('../../../../../support/components/calendar/calendar'), { ssr: false })
import * as managers from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { onSelectHandler } from './functions/on-select-handler'
import { parseDate } from '../../../../../../functions/date-parsers'
import { labelProvider } from '../../../../../../functions/providers/label'
import { floorsProvider } from './functions/floors-provider'
import { getRentAmounts } from '../../functions/get-rent-amounts'

class AnnouncementCreateAdditional extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.roomsManager = managers.roomsManager.bind(this)
    this.floorManager = managers.floorManager.bind(this)
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    this.showAvailabilityDateManager = managers.showAvailabilityDateManager.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.floorsProvider = floorsProvider.bind(this)
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.rentAmountManager = managers.rentAmountManager.bind(this)
    this.getRentAmounts = getRentAmounts.bind(this)
  }
  
  render() {
    const {
      showAvilabilityDate
    } = this.props

    return (
      <div id='announcement-create-additional' className='section'>
        <div className='rent-inputs-container'>
          <ManagedText {...this.rentAmountManager()}/>
          <ManagedSelect {...this.rentCurrencyManager()}/>
          <div className='float-clear'/>
        </div>
        <ManagedSelect {...this.roomsManager()}/>
        <ManagedSelect {...this.floorManager()}/>
        <ManagedSelect {...this.totalFloorsManager()}/>
        <ManagedCheckbox {...this.showAvailabilityDateManager()}/>
        {showAvilabilityDate &&
        <React.Fragment>
          <div className='radio-container availability-date-select'>
          </div>
          <div
          className='calendar'>
            <div>
              <Calendar 
                onChange = {(date) => {
                  this.props.changeInputs({ availabilityDate: parseDate(date) })
                }}
                value={this.props.availabilityDate ? new Date(this.props.availabilityDate) : null}
                locale={this.props.language == 'pl' ? 'pl' : 'en'}
              />
            </div>
          </div>
        </React.Fragment>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateAdditional)
