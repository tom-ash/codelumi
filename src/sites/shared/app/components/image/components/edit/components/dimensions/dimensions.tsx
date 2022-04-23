import React from "react"
import WidthInput from './components/width-input'
import HeightInput from './components/height-input'

interface DimensionsProps {
  width: string,
  height: string,
  changeData(props: object): void
}

const Dimensions = (props: DimensionsProps) => {
  const { width, height, changeData } = props
  const widthInputProps = { width, changeData }
  const heightInputProps = { height, changeData }

  return (
    <div className='dimensions'>
      <WidthInput {...widthInputProps} />
      <HeightInput {...heightInputProps} />
      <div className='float-clear' />
    </div>
  )
}

export default Dimensions
