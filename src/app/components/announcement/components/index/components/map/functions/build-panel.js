import React from 'react'
import { ManagedSelect, ManagedText } from 'managed-inputs'
import Calendar from 'react-calendar';
import { parseDate } from '../../../../../../../functions/date-parsers'

export function buildPanel() {
  return (
    <div className='panel'>
      <ManagedSelect manager={this.categoryManager}/>
      <ManagedSelect manager={this.districtManager}/>
      <div className='availability-date'>
          <ManagedText manager={this.availabilityDateManager}/>
          <div
          className='react-calendar-container'
          style={{ display: this.props.availabilityDateFocus ? 'block' : 'none' }}
          >
            <Calendar
            locale={this.props.language == 'polish' ? 'pl' : 'en'}
            onChange = {(date) => {
              this.props.changeInputs({ availabilityDate: parseDate(date) })
              this.props.changeControl({ availabilityDateFocus: false })
            }}/>
          </div>
        </div>
      <ManagedSelect manager={this.rentCurrencyManager}/>
      <ManagedText manager={this.rentAmountMinManager}/>
      <ManagedText manager={this.rentAmountMaxManager}/>
      <ManagedText manager={this.areaMinManager}/>
      <ManagedText manager={this.areaMaxManager}/>
      <ManagedSelect manager={this.roomsMinManager}/>
      <ManagedSelect manager={this.roomsMaxManager}/>
      <ManagedSelect manager={this.floorMinManager}/>
      <ManagedSelect manager={this.floorMaxManager}/>
      <ManagedSelect manager={this.totalFloorsMinManager}/>
      <ManagedSelect manager={this.totalFloorsMaxManager}/>      
    </div>
  )
}