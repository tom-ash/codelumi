import React from 'react'
// import { REQUIRED_CLASS, NOT_REQUIRED_CLASS } from './constants/classes'
// import { REQUIRED, NOT_REQUIRED } from './constants/texts.js'
import ScalableVectorGraphic from '../../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

export const HeaderSection = ({
  textObj,
  required,
  langHandler,
  scalableVectorGraphics,
  svg
}) => {
  return (
    <>
      {svg && <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics[svg]} />}
      <h3 className='header section'>
        {langHandler(textObj)}
        {required && ' *'}
      </h3>
    </>
  )
}
