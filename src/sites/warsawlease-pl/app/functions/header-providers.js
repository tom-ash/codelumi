import React from 'react'

export function pageHeaderProvider(icon, header) {
  return (
    <h2 className='page-header'>
        <i className={icon} />{this.langHandler(header)}
    </h2>
  )
}

export function sectionHeaderProvider(icon, header) {
  return (
    <h3 className='section-header'>
        <i className={icon} />{this.langHandler(header)}
    </h3>
  )
}