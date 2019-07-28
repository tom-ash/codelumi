import React from 'react'

export function sectionHeaderProvider(icon, labelObject) {
  return (
    <h3 className='section-header'>
      <i className={icon}></i>
      <span className='text'>{this.languageObjectHandler(labelObject)}</span>
    </h3>
  )
}