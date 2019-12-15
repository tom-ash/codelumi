import React from 'react'

export function labelProvider(icon, pl, en) {
  return (
    <span>
      <i className={icon}></i>
      <span className='text'>{this.languageHandler(pl, en)}</span>
    </span>
  )
}