import React from 'react'
import Calendar from 'react-calendar';
import { ManagedSelect, ManagedButton } from 'managed-inputs'
import { parseDate } from '../../../../../functions/date-parsers'

export function panelProvider() {
  return (
    <div className='panel-container'>
      <div className='panel'>
        <ManagedSelect manager={this.categoryManager}/>
        <ManagedSelect manager={this.districtManager}/>
        {this.compositeInputProvider('area')}
        {this.compositeInputProvider('rent')}
        {this.compositeInputProvider('rooms')}
        {this.compositeInputProvider('floor')}
        {this.compositeInputProvider('totalFloors')}
        <div className={`composite-input-container availability-date${this.props.availabilityDateActive ? ' visible' : ''}`}>
          <ManagedSelect manager={this.availabilityDateManager}/>
          <div 
          className='calendar-container'
          style={{ display: this.props.availabilityDateFocus ? 'block' : 'none' }}>
            <div 
            onClick={() => this.props.changeControl({availabilityDateActive: false, availabilityDateFocus: false })} className='cover'/>
            <Calendar
            locale={this.props.language == 'polish' ? 'pl' : 'en'}
            onChange = {(date) => {
              this.props.changeInputs({ availabilityDate: parseDate(date) })
              this.props.changeControl({ availabilityDateFocus: false })
              this.props.changeControl({ fetch: true })
            }}/>
          </div>
        </div>
        <div className='float-clear' />
      </div>
      {
      this.props.venue == 'indexFull' &&
      <ManagedButton manager={this.buttonManager}/>
      }
    </div>
  )
}