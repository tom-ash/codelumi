import React from 'react'
import SVG from '../../../../../support/components/svg/svg'

export function AnnouncementCreateSteps({
  step,
  authorized,
  svgs
}) {
  if (!svgs) return null

  const { align_left, user, check } = svgs

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
        <SVG pathData={align_left} />
      </div>
      {!authorized &&
      <div className={secondPointClasses.join(' ')}>
        <SVG pathData={user} />
      </div>
      }
      <div className={thirdPointClasses.join(' ')}>
        <SVG pathData={check} />
      </div>
      <div className='float-clear' />
    </div>
  )
}
