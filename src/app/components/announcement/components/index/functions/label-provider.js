import React from 'react'
import { labels } from '../constants/labels'

export function labelProvider(input) {
  let text
  if (this.props.venue == 'indexFull' &&
      this.props.screenSize != 'largePhone' &&
      this.props.screenSize != 'smallPhone') {
    text = this.props.venue == 'indexFull' ? labels[input].textShort : labels[input].text
  } else {
    text = labels[input].text
  }
  return <div><i className={labels[input].icon} /> {this.languageObjectHandler(text)}</div>
}