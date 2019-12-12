import React from 'react'

export const CloseButton = ({ width }) => (
  <button className={`close-button${width ? ` ${width}` : ''}`}>
    <i className='fas fa-times' />
  </button>
)