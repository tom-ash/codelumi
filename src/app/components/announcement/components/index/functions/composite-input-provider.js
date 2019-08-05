import React from 'react'
import { ManagedSelect } from 'managed-inputs'
import { compositeManagerProvider, subInputMaxManagerProvider } from './managerProviders'

export function compositeInputProvider(inputName) {
  const className = inputName == 'totalFloors' ? 'total-floors' : inputName
  return (
    <div className={`composite-input-container ${className}${this.props[`${inputName}Active`] ? ' active' : ''}`}>
    <ManagedSelect manager={this[`${inputName}Manager`]}/>
    <div style={{ display: this.props[`${inputName}Active`] ? 'block' : 'none'}}>
      <div className='sub-inputs-container'>
        {
        !this.props.isMobile &&
        <div onClick={() => this.props.changeControl({ [`${inputName}Active`]: false })} className='cover' />
        }
        <ManagedSelect manager={this[`${inputName}MinManager`]}/>
        <ManagedSelect manager={this[`${inputName}MaxManager`]}/>
        {
        inputName == 'rent' &&
        <ManagedSelect manager={this.rentCurrencyManager}/>
        }
        <div className='float-clear' />
      </div>
    </div>
    </div>
  )
}