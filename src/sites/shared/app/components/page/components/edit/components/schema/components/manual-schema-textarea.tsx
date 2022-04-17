import React from "react"
import { ManagedTextarea } from "managed-inputs"

interface ManualSchemaTextareaProps {
  manualSchema: string,
  changeInputs(props: object): void
}

const ManualSchemaTextarea = (props: ManualSchemaTextareaProps) => {
  const { manualSchema, changeInputs } = props
  const classNames = { container: 'form-input textarea' }
  const label = 'Manual Schema'
  const value = manualSchema
  const counterLimit = 10000
  const onChange = (manualSchema: string) => changeInputs({ manualSchema })
  const textareaProps = { classNames, label, value, counterLimit, onChange }

  return <ManagedTextarea {...textareaProps} />
}

export default ManualSchemaTextarea
