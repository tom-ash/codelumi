import React from 'react'
import { WidthInput } from './components/width/width.input'
import { HeightInput } from './components/height/height.input'
import { FloatClear } from '../../../../../support/float-clear/float-clear'

export const Dimensions = () => {
  return (
    <div className='dimensions'>
      <WidthInput />
      <HeightInput />
      <FloatClear />
    </div>
  )
}

export default Dimensions
