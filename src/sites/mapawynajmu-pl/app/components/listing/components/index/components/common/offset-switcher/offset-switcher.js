import React from 'react'
import { Spinner } from '../../../../../../support/components/spinner/spinner'
import scrollToTop from '../../../../../../../functions/scrollers/instant-scroll'

export function OffsetSwitcher({ setInputs, setControl, offset, amount, classNames, scrollTop }) {
  let className = 'offset-switcher'
  if (classNames) className += ` ${classNames}`

  if (amount === null) {
    return (
      <div className={className}>
        <Spinner spinnerClass='button-spinner' />
      </div>
    )
  }

  if (amount <= 50) {
    className += ' only-amount'

    return <div className={className}>{amount}</div>
  }

  return (
    <div className={className}>
      {offset !== 0 && (
        <div
          className='switch min'
          onClick={() => {
            if (scrollTop) scrollToTop()
            setInputs({ offset: offset - 50 })
            setControl({ fetch: true })
          }}
        ></div>
      )}
      <div className='text'>
        {offsetCounter(offset, amount)} {{ pl: 'z', en: 'of' }['pl']} {amount}
      </div>
      {offset + 50 < amount && (
        <div
          className='switch max'
          onClick={() => {
            if (scrollTop) scrollToTop()
            setInputs({ offset: offset + 50 })
            setControl({ fetch: true })
          }}
        ></div>
      )}
      <div className='float-clear' />
    </div>
  )
}

function offsetCounter(offset, amount) {
  const offsetPlusOne = offset + 1

  if (offsetPlusOne === amount) return offsetPlusOne
  return `${offsetPlusOne} - ${offset + 50 > amount ? amount : offset + 50}`
}
