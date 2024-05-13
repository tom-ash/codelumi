import React from 'react'
import { useInputs } from '../../../functions/store/use-inputs'
import { ChromePicker } from 'react-color'
import { useDispatch } from 'react-redux'

type ColorPickerInterface = {
  (props: { label?: string; name: string }): React.ReactElement
}

export const ColorPicker: ColorPickerInterface = props => {
  const { label, name } = props
  const { [name]: color } = useInputs()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  return (
    <div className='color-picker'>
      {label && <label>{label}</label>}
      <ChromePicker
        color={color}
        onChangeComplete={color => setInputs({ [name]: color.hex })}
        disableAlpha={true}
      />
    </div>
  )
}
