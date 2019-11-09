import React from 'react'

export function buttonLabelHandler() {
  const { panelAmount } = this.props
  
  return (
    <span>
      <i className="fas fa-search"></i>
      <span className='amount'>
        {panelAmount === null ?
        '-'
        :
        panelAmount}
      </span>
    </span>
  )
}