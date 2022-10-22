import React from 'react'
import SVG from '../svg/svg'

export const CloseButton = ({ classNames, onClick }) => {
  const classes = ` ${classNames}` || ''

  return (
    <button className={`close-button${classes}`} onClick={onClick}>
      <SVG name='close' />
    </button>
  )
}
