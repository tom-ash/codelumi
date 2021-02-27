import React from 'react'

export function pageHeaderProvider(icon, labelObject) {
  return (
    <h2 className='page-header'>
      <i className={icon}></i>
      <span className='text'>{this.langHandler(labelObject)}</span>
    </h2>
  )
}

export function sectionHeaderProvider(icon, labelObject, classNames) {
  return (
    <h3 className={`section-header${classNames ? ` ${classNames}` : ''}`}>
      <i className={icon}></i>
      <span className='text'>{this.langHandler(labelObject)}</span>
    </h3>
  )
}