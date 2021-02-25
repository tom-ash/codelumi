import React from 'react'
import SVG from '../../../../../support/components/svg/svg'

export function AnnouncementCreateSteps({
  step,
  authorized
}) {
  const lineClasses = ['line']
  const firstPointClasses = ['point', 'first']
  const secondPointClasses = ['point', 'second']
  const thirdPointClasses = ['point', 'last']

  if (step === 'form') {
    firstPointClasses.push('current')
  }
  if (step === 'creating-user') {
    firstPointClasses.push('success')
    secondPointClasses.push('current')
  }
  if (step === 'confirmation') {
    firstPointClasses.push('success')
    secondPointClasses.push('success')
    thirdPointClasses.push('currrent')
  }
  if (step === 'success') {
    lineClasses.push('success')
    firstPointClasses.push('success')
    secondPointClasses.push('success')
    thirdPointClasses.push('success')
  }
  
  return (
    <div className='create-points'>
      <div className={lineClasses.join(' ')} />
      <div className={firstPointClasses.join(' ')}>
        <SVG name='alignLeft' />
      </div>
      {!authorized &&
      <div className={secondPointClasses.join(' ')}>
        <SVG name='user' />
      </div>
      }
      <div className={thirdPointClasses.join(' ')}>
        <SVG name='check' />
      </div>
      <div className='float-clear' />
    </div>
  )
}
