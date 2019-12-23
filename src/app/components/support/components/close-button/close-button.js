import React from 'react'

export const CloseButton = ({ classNames, onClick }) => {
  const classes = ` ${classNames}` || ''

  return (
    <button
      className={`close-button${classes}`}
      onClick={onClick}
    >
      <i className='fas fa-times' />
    </button>
  )
}