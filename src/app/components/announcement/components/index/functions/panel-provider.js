import React from 'react'
import { ManagedSelect, ManagedButton } from 'managed-inputs'

export function panelProvider() {
  return (
    <div className='panel-container'>
      <div className='panel'>
        <div className='pane primary'>
          <ManagedSelect {...this.categoryManager()} />
          {this.compositeInputProvider('area')}
          <ManagedSelect {...this.districtManager()}/>
          {this.compositeInputProvider('rent')}
          <div className='float-clear' />
        </div>
        <ManagedButton {...this.buttonManager()}/>
        <div className='pane secondary'>
          {this.compositeInputProvider('rooms')}
          {this.compositeInputProvider('floor')}
          {this.compositeInputProvider('totalFloors')}
          <ManagedSelect {...this.availabilityDateManager()}/>
          <div className='float-clear' />
        </div>
        <div className='float-clear' />
      </div>
    </div>
  )
}
