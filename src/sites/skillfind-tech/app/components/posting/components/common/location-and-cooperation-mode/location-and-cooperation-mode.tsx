import React from 'react'
import { SVG } from '../../../../../../../shared/app/components/support/svg/svg'

interface LocationAndCooperationModeInterface {
  (props: {
    locality?: string
    country?: string
    cooperationMode: {
      icon: string
      label: string
    }
  }): React.ReactElement
}

export const LocationAndCooperationMode: LocationAndCooperationModeInterface = props => {
  const { locality, country, cooperationMode } = props

  const { icon: cooperationModeIcon, label: cooperationModeLabel } = cooperationMode

  return (
    <section className='location-and-cooperation-mode'>
      <div className='location'>
        <SVG name='marker' />
        {locality}, {country}
      </div>
      <div className='cooperation-mode'>
        <SVG name={cooperationModeIcon} />
        {cooperationModeLabel}
      </div>
    </section>
  )
}
