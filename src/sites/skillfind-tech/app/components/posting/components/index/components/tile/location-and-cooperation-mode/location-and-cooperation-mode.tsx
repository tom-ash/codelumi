import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

interface LocationAndCooperationModeInterface {
  (props: {
    locality?: string;
    country?: string
  }): React.ReactElement
}

export const LocationAndCooperationMode: LocationAndCooperationModeInterface = (props) => {
  const {
    locality,
    country,
  } = props

  return (
    <section className='location-and-cooperation-mode'>
      <div className='location'>
        <SVG name='marker' /> {locality}, {country}
      </div>
    </section>
  )
}
