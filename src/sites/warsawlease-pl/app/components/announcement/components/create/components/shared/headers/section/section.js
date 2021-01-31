import React from 'react'
// import { REQUIRED_CLASS, NOT_REQUIRED_CLASS } from './constants/classes'
// import { REQUIRED, NOT_REQUIRED } from './constants/texts.js'
import SVG from '../../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

export const HeaderSection = ({
  textObj,
  required,
  langHandler,
  svgs,
  svg
}) => {
  return (
    <>
      {svg && <SVG pathData={svgs && svgs[svg]} />}
      <h3 className='header section'>
        {langHandler(textObj)}
        {required && ' *'}
      </h3>
    </>
  )
}
