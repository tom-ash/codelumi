import React from 'react'
import { ManagedTextarea } from 'managed-inputs'

interface ManualSchemaTextareaProps {
  manualSchema: string
  setInputs(props: object): void
}

const ManualSchemaTextarea = (props: ManualSchemaTextareaProps) => {
  const { manualSchema, setInputs } = props
  const classNames = { container: 'form-input textarea schema' }
  const label = 'Manual Schema'
  const value = manualSchema
  const counterLimit = 10000
  const onChange = (manualSchema: string) => setInputs({ manualSchema })
  const textareaProps = { classNames, label, value, counterLimit, onChange }

  return <ManagedTextarea {...textareaProps} />
}

export default ManualSchemaTextarea
