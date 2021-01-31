import React from 'react'
import SVG from '../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

export function AnnouncementCreateSteps({
  step,
  authorized,
  svgs
}) {
  return (
    <div className='create-points'>
      <div className={`line${step === 'success' ? ' success' : ''}`} />
      <div className={`point first${step !== 'form' ? ' success' : ''}`}>
        <SVG pathData={svgs && svgs.align_left} />
      </div>
      {!authorized &&
      <div className={`point second${step === 'creating-user' ? ' current' : ''}${step === 'confirmation'  || step === 'success' ? ' success' : ''}`}>
        <SVG pathData={svgs && svgs.user} />
      </div>
      }
      <div className={`point last${step === 'confirmation' ? ' current' : ''}${step === 'success' ? ' success' : ''}`}>
        <SVG pathData={svgs && svgs.check} />
      </div>
      <div className='float-clear' />
    </div>
  )
}
