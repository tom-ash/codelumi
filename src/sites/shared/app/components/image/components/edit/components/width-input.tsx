import React from "react"
import { ManagedText } from "managed-inputs"

interface WidthInputProps {
  width: string,
  changeData(props: object): void
}

const WidthInput = (props: WidthInputProps) => {
  const { width, changeData } = props
  const classNames = { container: 'form-input text' }
  const label = 'Width'
  const value = width
  const onChange = (width: string) => changeData({ width })
  const inputProps = { classNames, label, value, onChange }
  

  return <ManagedText {...inputProps} />
}

export default WidthInput
