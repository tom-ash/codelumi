import React from 'react'
import WidthInput from './components/width-input'
import HeightInput from './components/height-input'

interface DimensionsProps {
  width: string
  height: string
  setData(props: object): void
}

const Dimensions = (props: DimensionsProps) => {
  const { width, height, setData } = props
  const widthInputProps = { width, setData }
  const heightInputProps = { height, setData }

  return (
    <div className='dimensions'>
      <WidthInput {...widthInputProps} />
      <HeightInput {...heightInputProps} />
      <div className='float-clear' />
    </div>
  )
}

export default Dimensions
