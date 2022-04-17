import React from "react"
import { ManagedTextarea } from "managed-inputs"

interface AutoSchemaTextareaProps {
  autoSchema: string,
  changeInputs(props: object): void
}

const AutoSchemaTextarea = (props: AutoSchemaTextareaProps) => {
  const { autoSchema, changeInputs } = props
  const classNames = { container: 'form-input textarea schema' }
  const label = 'Auto Schema'
  const value = autoSchema
  const counterLimit = 10000
  const onChange = (autoSchema: string) => changeInputs({ autoSchema })
  const textareaProps = { classNames, label, value, counterLimit, onChange, disabled: true }

  return <ManagedTextarea {...textareaProps} />
}

export default AutoSchemaTextarea
