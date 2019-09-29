import React from 'react'
import { ManagedSelect } from 'managed-inputs'

export function compositeInputProvider(inputName) {
  const { isMobile } = this.props
  const className = inputName == 'totalFloors' ? 'total-floors' : inputName
  return (
    <div className={`composite-input-container ${className} ${this.props[`${inputName}Active`] ? ' visible' : ''}`}>
    <ManagedSelect {...this[`${inputName}Manager`]()}/>
    <div style={{ display: this.props[`${inputName}Active`] ? 'block' : 'none'}}>
      <div className='sub-inputs-container'>
        {
        !this.props.isMobile &&
        <div onClick={() => this.props.changeControl({ [`${inputName}Active`]: false })} className='cover' />
        }
        <ManagedSelect {...this[`${inputName}MinManager`]()}/>
        <ManagedSelect {...this[`${inputName}MaxManager`]()}/>
        {
        inputName == 'rent' &&
        <ManagedSelect {...this.rentCurrencyManager()}/>
        }
        <div className='float-clear' />
      </div>
    </div>
    </div>
  )
}