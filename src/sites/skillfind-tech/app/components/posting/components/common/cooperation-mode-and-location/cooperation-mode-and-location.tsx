import React from 'react'
import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'
import { FloatClear } from '../../../../../../../shared/app/components/support/float-clear/float-clear'

interface CooperationModeAndLocationInterface {
  (props: {
    locality?: string
    country?: string
    cooperationMode: {
      icon: string
      label: string
    }
  }): React.ReactElement
}

export const CooperationModeAndLocation: CooperationModeAndLocationInterface = props => {
  const { locality, country, cooperationMode } = props

  const { icon: cooperationModeIcon, label: cooperationModeLabel } = cooperationMode

  return (
    <section className='cooperation-mode-and-location'>
      <span className='cooperation-mode'>{cooperationModeLabel}</span>
      <SVG name='minus' />
      <span className='location'>
        {locality}, {country}
      </span>
    </section>
  )
}
