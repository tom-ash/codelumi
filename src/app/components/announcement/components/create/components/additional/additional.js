import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedSelect, ManagedCheckbox } from 'managed-inputs'
const Calendar = loadable(() => import('../../../../../support/components/calendar/calendar'), { ssr: false })
import * as managers from './functions/managers'
import { langHandler, langObjHandler } from '../../../../../../functions/lang-handler'
import { onSelectHandler } from './functions/on-select-handler'
import { parseDate } from '../../../../../../functions/date-parsers'
import { labelProvider } from '../../../../../../functions/providers/label'
import { floorsProvider } from './functions/floors-provider'
import { getRentAmounts } from '../../functions/get-rent-amounts'
import { sendGaEvent } from '../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from './constants/analytics/events'

const { AVAILABILITY_DATE_SELECTED_EVENT } = analyticEvents

class AnnouncementCreateAdditional extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
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
                  sendGaEvent(AVAILABILITY_DATE_SELECTED_EVENT)
                }}
                value={this.props.availabilityDate ? new Date(this.props.availabilityDate) : null}
                locale={this.props.lang == 'pl' ? 'pl' : 'en'}
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
