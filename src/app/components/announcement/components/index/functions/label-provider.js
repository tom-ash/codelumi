import React from 'react'
import { labels } from '../constants/labels'

export function labelProvider(input) {
  return <div><i className={labels[input].icon} /> {this.languageObjectHandler(labels[input].text)}</div>
}