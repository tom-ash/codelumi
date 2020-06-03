import React from 'react'

export function AnnouncementCreateSteps({
  step
}) {
  return (
    <div className='create-points'>
      <div className='line' />
      <div className='point first'>
        1
      </div>
      <div className='point second'>
        2
      </div>
      <div className='point last'>
        <i className='fas fa-check' />
      </div>
      <div className='float-clear' />
    </div>
  )
}
