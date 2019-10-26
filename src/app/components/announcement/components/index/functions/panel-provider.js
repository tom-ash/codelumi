import React from 'react'
import { ManagedSelect, ManagedButton } from 'managed-inputs'

export function panelProvider() {
  const { isMobile } = this.props;
  return (
    <div className='panel-container'>
      <div className='panel'>
        <ManagedSelect {...this.categoryManager()} />
        <ManagedSelect {...this.districtManager()}/>
        {this.compositeInputProvider('area')}
        {this.compositeInputProvider('rent')}
        {this.compositeInputProvider('rooms')}
        {this.compositeInputProvider('floor')}
        {this.compositeInputProvider('totalFloors')}
        <ManagedSelect {...this.availabilityDateManager()}/>
      </div>
      {
      this.props.venue == 'indexFull' &&
      <ManagedButton {...this.buttonManager()}/>
      }
    </div>
  )
}