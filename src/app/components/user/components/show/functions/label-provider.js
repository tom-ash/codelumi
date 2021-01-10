import React from 'react'

export function labelProvider(icon, pl, en) {
  return (
    <span>
      <span className='text'>{this.langHandler(pl, en)}</span>
    </span>
  )
}