import React from 'react'
import { REQUIRED_CLASS, NOT_REQUIRED_CLASS } from './constants/classes'
import { REQUIRED, NOT_REQUIRED } from './constants/texts.js'

export const HeaderSection = ({
  textObj,
  required,
  langHandler
}) => {
  return (
    <h3 className='header section'>
      {langHandler(textObj)}
      <span className={required ? REQUIRED_CLASS : NOT_REQUIRED_CLASS}>
        <span>&bull;</span> {langHandler(required ? REQUIRED : NOT_REQUIRED)}
      </span>
    </h3>
  )
}
