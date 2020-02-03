import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedSelect } from 'managed-inputs'
import { ManagedText } from 'managed-inputs'
import * as managers from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { handleErrorOnSelect, handleErrorOnValidate } from './functions/errors-handler'
import { onSelectHandler } from './functions/on-select-handler'
import Calendar from 'react-calendar';
import { parseDate } from '../../../../../../functions/date-parsers'
import { labelProvider } from '../../../../../../functions/providers/label'
import { getRentAmounts } from '../../functions/get-rent-amounts'
import { floorsProvider } from './functions/floors-provider'
import './styles/styles.scss'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.rentAmountManager = managers.rentAmountManager.bind(this)
    this.areaManager = managers.areaManager.bind(this)
    this.roomsManager = managers.roomsManager.bind(this)
    this.floorManager = managers.floorManager.bind(this)
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    this.handleErrorOnSelect = handleErrorOnSelect.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
    this.availabilityDateSelectManager = managers.availabilityDateSelectManager.bind(this)
    this.availableDateManager = managers.availableDateManager.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.getRentAmounts = getRentAmounts.bind(this)
    this.floorsProvider = floorsProvider.bind(this)
  }
  
  render() {
    return (
      <div id='announcement-create-primary' className='section'>
          <ManagedSelect {...this.categoryManager()}/>
          <ManagedSelect {...this.districtManager()}/>
          <ManagedSelect {...this.rentCurrencyManager()}/>
          <ManagedText {...this.rentAmountManager()}/>
          <div className='float-clear'/>
          <ManagedText {...this.areaManager()}/>
          <ManagedSelect {...this.roomsManager()}/>
          <ManagedSelect {...this.floorManager()}/>
          <ManagedSelect {...this.totalFloorsManager()}/>
          <div className={this.props.availabilityDateSelect == 'date' ? 'date' : ''}>
          <ManagedSelect {...this.availabilityDateSelectManager()} />
          </div>
          <div
          className='calendar'>       
            {
            this.props.availabilityDateSelect == 'date' &&
            <ManagedSelect {...this.availableDateManager()}/>
            }
            <div
            style={{ display: this.props.availabilityDateFocus ? 'block' : 'none' }}>
              <Calendar 
              onChange = {(date) => {
                this.props.changeInputs({ availabilityDate: parseDate(date) })
                this.props.changeControl({ availabilityDateFocus: false })
              }}
              locale={this.props.language == 'pl' ? 'pl' : 'en'}/>
            </div>
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary);