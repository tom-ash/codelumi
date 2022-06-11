import React from "react"
import { ManagedText } from "managed-inputs"

interface LangAltsGroupProps {
  langAltsGroup: string,
  changeInputs(props: object): void
}

const LangAltsGroupInput = (props: LangAltsGroupProps) => {
  const { langAltsGroup, changeInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Language Alternates Group UUID'
  const value = langAltsGroup
  const onChange = (langAltsGroup: string) => changeInputs({ langAltsGroup })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default LangAltsGroupInput
