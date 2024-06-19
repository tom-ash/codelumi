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
      <div className='cooperation-mode'>
        <SVG name={cooperationModeIcon} />
        <span>{cooperationModeLabel}</span>
      </div>
      <div className='location'>
        <SVG name='marker' />
        <span>{locality}, {country}</span>
      </div>
      <FloatClear />
    </section>
  )
}
