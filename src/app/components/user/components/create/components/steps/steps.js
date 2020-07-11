import React from 'react'

export function UserCreateSteps({
  step
}) {
  return (
    <div className='create-points'>
      <div className={`line${step === 'success' ? ' success' : ''}`} />
      <div className={`point first${step !== 'form' ? ' success' : ''}`}>
        <i className='fas fa-user-alt' />
      </div>
      <div className={`point last${step === 'confirmation' ? ' current' : ''}${step === 'success' ? ' success' : ''}`}>
        <i className='fas fa-check' />
      </div>
      <div className='float-clear' />
    </div>
  )
}
