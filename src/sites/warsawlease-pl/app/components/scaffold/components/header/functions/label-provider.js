import React from 'react'

export function labelProvider(icon, text) {
  return (
    <span>
      <i className={icon}></i>
      { this.langHandler(text) }
    </span>
  )
}