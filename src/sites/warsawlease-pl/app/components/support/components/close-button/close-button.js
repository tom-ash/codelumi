import React from 'react'
import SVG from '../svg/svg'

export const CloseButton = ({ classNames, onClick, pathData}) => {
  const classes = ` ${classNames}` || ''

  return (
    <button
      className={`close-button${classes}`}
      onClick={onClick}
    >
      <SVG pathData={pathData} />
    </button>
  )
}
