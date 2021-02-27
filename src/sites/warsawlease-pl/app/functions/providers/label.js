import React from 'react'

export function labelProvider(icon, labelObject) {
  return (
    <span>
      <i className={icon}></i>
      <span className='text'>{this.langHandler(labelObject)}</span>
    </span>
  )
}
