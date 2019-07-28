import React from 'react'

export function buttonProvider(polish, english, announcement, index, callback) {
  return (
    <div className='button-container'>
      <button
      onClick={() => callback(announcement, index)}
      className='button'>
        {this.languageHandler(polish, english)}
      </button>
    </div>
  )
}