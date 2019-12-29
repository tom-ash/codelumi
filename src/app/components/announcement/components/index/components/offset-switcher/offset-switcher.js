import React from 'react'
import WindmillSpinner from '../../../../../support/components/spinner/components/windmill/windmill'
import { instantScroll } from '../../../../../../functions/scrollers/instant-scroll'

export function OffsetSwitcher({
  languageHandler, changeInputs, changeControl, offset, amount, classNames, scrollTop
}) {

  let className = 'offset-switcher'
  if (classNames) className += ` ${classNames}`

  if (amount === null) {
    return (
      <div className={className}>
        <WindmillSpinner spinnerClass='very-small-windmill-spinner'/>
      </div>
    )
  }

  if (amount <= 50) {
    className += ' only-amount'

    return (
      <div className={className}>
        {amount}
      </div>
    )
  }

  return (
    <div className={className}>
      {offset !== 0 &&
      <div
        className='switch min'
        onClick = {() => {
          if (scrollTop) instantScroll()
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
          if (scrollTop) instantScroll()
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
  const offsetPlusOne = offset + 1

  if (offsetPlusOne === amount) return offsetPlusOne
  return `${offsetPlusOne} - ${offset + 50 > amount ? amount : offset + 50}`
}
