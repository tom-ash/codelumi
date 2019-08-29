import React from 'react'

export function pageHeaderProvider(icon, labelObject) {
  return (
    <h2 className='page-header'>
      <i className={icon}></i>
      <span className='text'>{this.languageObjectHandler(labelObject)}</span>
    </h2>
  )
}

export function sectionHeaderProvider(icon, labelObject) {
  return (
    <h3 className='section-header'>
      <i className={icon}></i>
      <span className='text'>{this.languageObjectHandler(labelObject)}</span>
    </h3>
  )
}