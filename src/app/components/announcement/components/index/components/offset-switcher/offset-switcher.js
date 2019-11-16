import React from 'react'

export function OffsetSwitcher({ languageHandler, changeInputs, changeControl, offset, amount }) {
  return (
    <div className='offset-switcher'>
      {offset !== 0 &&
      <div
        className='switch min'
        onClick = {() => {
          changeInputs({ offset: offset - 50 })
          changeControl({ fetch: true })
        }}
      >
        <i className='fas fa-angle-left' />
      </div>}
      <div className='text'>
        {offsetCounter(offset, amount)} {languageHandler('z', 'of')} {amount}
      </div>
      {offset + 50 < amount &&
      <div
        className='switch max'
        onClick = {() => {
          changeInputs({ offset: offset + 50 })
          changeControl({ fetch: true })
        }}
      >
        <i className='fas fa-angle-right' />
      </div>}
      <div className='float-clear' />
    </div>
  )
}

function offsetCounter(offset, amount) {
  return `${offset} - ${offset + 50 > amount ? amount : offset + 50}`
}