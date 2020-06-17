import React from 'react'

export function AnnouncementCreateSteps({
  step,
  authorized
}) {
  return (
    <div className='create-points'>
      <div className='linear-border' />
      <div className={`line${step === 'success' ? ' success' : ''}`} />
      <div className={`point first${step !== 'form' ? ' success' : ''}`}>
        <i className='fas fa-scroll' />
      </div>
      {!authorized &&
      <div className={`point second${step === 'account-data' ? ' current' : ''}${step === 'confirmation'  || step === 'success' ? ' success' : ''}`}>
        <i className='fas fa-user-alt' />
      </div>
      }
      <div className={`point last${step === 'confirmation' ? ' current' : ''}${step === 'success' ? ' success' : ''}`}>
        <i className='fas fa-check' />
      </div>
      <div className='float-clear' />
    </div>
  )
}
