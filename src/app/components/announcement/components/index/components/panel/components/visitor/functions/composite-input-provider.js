import React from 'react'
import { ManagedSelect } from 'managed-inputs'

export function compositeInputProvider(inputName) {
  const className = inputName == 'totalFloors' ? 'total-floors' : inputName
  
  return (
    <div className={`composite-input-container ${className}`}>
      <ManagedSelect {...this[`${inputName}Manager`](inputName)} />
    </div>
  )
}
