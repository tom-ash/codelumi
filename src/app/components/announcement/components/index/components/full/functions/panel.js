import React from 'react'
import { ManagedSelect, ManagedText, ManagedButton } from 'managed-inputs'
import Calendar from 'react-calendar';
import { parseDate } from '../../../../../../../functions/date-parsers'

export function panel() {
  return (
    <div className='panel'>
        <ManagedSelect manager={this.categoryManager}/>
        <div className='gap' />
        <ManagedSelect manager={this.districtManager}/>
        <div className='float-clear' />
        <div className={`inputs-group${this.props.rentActive ? ' active' : ''}`}>
          <ManagedText manager={this.rentManager}/>
          {
          this.props.rentActive &&  
          <div className='inputs-group'>
            <div onClick={() => this.props.changeControl({ rentActive: false })} className='cover'/>
            <ManagedSelect manager={this.rentMinManager}/>
            <ManagedSelect manager={this.rentMaxManager}/>
            <ManagedSelect manager={this.rentCurrencyManager}/>
            <div className='float-clear' />
          </div>
          }
        </div>
        <div className='gap' />
        <div className={`inputs-group${this.props.areaActive ? ' active' : ''}`}>
          <ManagedText manager={this.areaManager}/>
          {
          this.props.areaActive &&
          <div className='inputs-group'>
            <div onClick={() => this.props.changeControl({ areaActive: false })} className='cover'/>
            <ManagedSelect manager={this.areaMinManager}/>
            <ManagedSelect manager={this.areaMaxManager}/>
          </div>
          }
        </div>
        <div className='gap' />
        <div className={`inputs-group${this.props.roomsActive ? ' active' : ''}`}>
          <ManagedText manager={this.roomsManager}/>
          {
          this.props.roomsActive &&
          <div className='inputs-group'>
            <div onClick={() => this.props.changeControl({ roomsActive: false })} className='cover'/>
            <ManagedSelect manager={this.roomsMinManager}/>
            <ManagedSelect manager={this.roomsMaxManager}/>
          </div>
          }
        </div>
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
        <div className='gap' />
        <div className={`inputs-group${this.props.floorActive ? ' active' : ''}`}>
          <ManagedText manager={this.floorManager}/>
          {
          this.props.floorActive &&
          <div className='inputs-group'>
            <div onClick={() => this.props.changeControl({ floorActive: false })} className='cover'/>
            <ManagedSelect manager={this.floorMinManager}/>
            <ManagedSelect manager={this.floorMaxManager}/>
          </div>
          }
        </div>
        <div className='gap' />
        <div className={`inputs-group${this.props.totalFloorsActive ? ' active' : ''}`}>
          <ManagedText manager={this.totalFloorsManager}/>
          {
          this.props.totalFloorsActive &&
          <div className='inputs-group'>
            <div onClick={() => this.props.changeControl({ totalFloorsActive: false })} className='cover'/>
            <ManagedSelect manager={this.totalFloorsMinManager}/>
            <ManagedSelect manager={this.totalFloorsMaxManager}/>
          </div>
          }
        </div>
        <div className='gap' />



      <div className='float-clear' />
      









      <div>
      <div className='float-clear' />

    
    



      

        {/* {
        this.props.screenSize != 'largePhone' && this.props.screenSize != 'smallPhone' &&
        <div>
          Miesięczny czynsz netto
        </div>
        }
        
        

        <ManagedSelect manager={this.floorMinManager}/>
        <ManagedSelect manager={this.floorMaxManager}/>
        <ManagedText manager={this.areaMinManager}/>
        <ManagedText manager={this.areaMaxManager}/>
        <ManagedSelect manager={this.roomsMinManager}/>
        <ManagedSelect manager={this.roomsMaxManager}/>
        <ManagedSelect manager={this.totalFloorsMinManager}/>
        <ManagedSelect manager={this.totalFloorsMaxManager}/>
        <div className='float-clear' /> */}
        <ManagedButton manager={this.buttonManager}/>
      </div>
    </div>
  )


}