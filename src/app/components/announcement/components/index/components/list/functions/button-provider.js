import React from 'react'

export function buttonProvider(pl, en, announcement, index, callback, className) {
  return (
    <div className={`button-container${className ? className : ''}`}>
      <button
      onClick={() => callback(announcement, index)}
      className={`button${className ? className : ''}`}>
        {this.languageHandler(pl, en)}
      </button>
    </div>
  )
}