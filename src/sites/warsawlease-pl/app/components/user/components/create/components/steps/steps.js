import React from 'react'
import SVG from '../../../../../support/components/svg/svg'

export function UserCreateSteps({
  step,
  svgs
}) {
  return (
    <div className='create-points user'>
      <div className={`line${step === 'success' ? ' success' : ''}`} />
      <div className={`point first${step !== 'form' ? ' success' : ''}`}>
        <SVG name='align_left' />
      </div>
      <div className={`point last${step === 'confirmation' ? ' current' : ''}${step === 'success' ? ' success' : ''}`}>
        <SVG name='check' />
      </div>
      <div className='float-clear' />
    </div>
  )
}
