import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedSelect, ManagedCheckbox } from 'managed-inputs'
import * as managers from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { handleErrorOnSelect, handleErrorOnValidate } from './functions/errors-handler'
import { onSelectHandler } from './functions/on-select-handler'
import Calendar from 'react-calendar/dist/entry.nostyle'
import { parseDate } from '../../../../../../functions/date-parsers'
import { labelProvider } from '../../../../../../functions/providers/label'
import { floorsProvider } from './functions/floors-provider'
// im

class AnnouncementCreateAdditional extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.roomsManager = managers.roomsManager.bind(this)
    this.floorManager = managers.floorManager.bind(this)
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    this.showAvailabilityDateManager = managers.showAvailabilityDateManager.bind(this)
    this.handleErrorOnSelect = handleErrorOnSelect.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.floorsProvider = floorsProvider.bind(this)
  }
  
  render() {

    const {
      showAvilabilityDate
    } = this.props

    return (
      <div id='announcement-create-additional' className='section'>
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
                this.props.changeControl({ availabilityDateFocus: false })
              }}
              locale={this.props.language == 'pl' ? 'pl' : 'en'}/>
            </div>
          </div>
        </React.Fragment>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateAdditional);