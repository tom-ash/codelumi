import React from 'react'

export function labelProvider(icon, polish, english) {
  return (
    <span>
      <i className={icon}></i>
      <span className='text'>{this.languageHandler(polish, english)}</span>
    </span>
  )
}