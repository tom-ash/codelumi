import React from 'react'
import { ManagedSelect, ManagedText, ManagedButton } from 'managed-inputs'
import Calendar from 'react-calendar';
import { parseDate } from '../../../../../../../functions/date-parsers'

export function panel() {
  return (
    <div className='panel'>
      <div>
        <ManagedSelect manager={this.categoryManager}/>
        <ManagedSelect manager={this.districtManager}/>
        <div className='float-clear' />
      </div>
      <div>
        <ManagedSelect manager={this.rentCurrencyManager}/>
        <ManagedText manager={this.rentAmountMinManager}/>
        <ManagedText manager={this.rentAmountMaxManager}/>
        <div className='availability-date'>
          <ManagedText manager={this.availabilityDateManager}/>
          <div className='float-clear' />
          <div
          className='react-calendar-container'
          style={{ display: this.props.availabilityDateFocus ? 'block' : 'none' }}>
            <Calendar
            locale={this.props.language == 'polish' ? 'pl' : 'en'}
            onChange = {(date) => {
              this.props.changeInputs({ availabilityDate: parseDate(date) })
              this.props.changeControl({ availabilityDateFocus: false })
            }}/>
          </div>
        </div>
        <ManagedSelect manager={this.floorMinManager}/>
        <ManagedSelect manager={this.floorMaxManager}/>
        <ManagedText manager={this.areaMinManager}/>
        <ManagedText manager={this.areaMaxManager}/>
        <ManagedSelect manager={this.roomsMinManager}/>
        <ManagedSelect manager={this.roomsMaxManager}/>
        <ManagedSelect manager={this.totalFloorsMinManager}/>
        <ManagedSelect manager={this.totalFloorsMaxManager}/>
        <div className='float-clear' />
        <ManagedButton manager={this.buttonManager}/>
      </div>
    </div>
  )


}