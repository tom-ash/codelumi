import React from 'react'

export function buttonLabelHandler() {
  return (
    <span>
      <i className="fas fa-search"></i>
      <span className='amount'>
      {
      this.props.panelAmount === null ?
      '?'
      :
      this.props.panelAmount
      }
      </span>
    </span>
  )
}