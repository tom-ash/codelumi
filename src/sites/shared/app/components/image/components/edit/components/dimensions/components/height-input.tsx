import React from 'react'
import { ManagedText } from 'managed-inputs'

interface HeightInputProps {
  height: string
  changeData(props: object): void
}

const HeightInput = (props: HeightInputProps) => {
  const { height, changeData } = props
  const classNames = { container: 'form-input text' }
  const label = 'Height'
  const value = height
  const onChange = (height: string) => changeData({ height })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default HeightInput
