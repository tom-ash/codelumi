import React from 'react'

export function buttonProvider(pl, en, announcement, index, callback, className) {
  return (
    <button onClick={() => callback(announcement, index)} className={`button${className ? className : ''}`}>
      {this.langHandler({ pl, en })}
    </button>
  )
}
