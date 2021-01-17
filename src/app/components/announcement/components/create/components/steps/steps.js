import React from 'react'
import ScalableVectorGraphic from '../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

export function AnnouncementCreateSteps({
  step,
  authorized,
  scalableVectorGraphics
}) {
  return (
    <div className='create-points'>
      <div className={`line${step === 'success' ? ' success' : ''}`} />
      <div className={`point first${step !== 'form' ? ' success' : ''}`}>
        <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.align_left} />
      </div>
      {!authorized &&
      <div className={`point second${step === 'creating-user' ? ' current' : ''}${step === 'confirmation'  || step === 'success' ? ' success' : ''}`}>
        <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.user} />
      </div>
      }
      <div className={`point last${step === 'confirmation' ? ' current' : ''}${step === 'success' ? ' success' : ''}`}>
        <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.check} />
      </div>
      <div className='float-clear' />
    </div>
  )
}
