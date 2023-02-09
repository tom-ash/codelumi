import React from 'react'
import { ManagedText } from 'managed-inputs'

interface ModifiedOnInputProps {
  modifiedOn: string
  setInputs(props: object): void
}

const ModifiedOnInput = (props: ModifiedOnInputProps) => {
  const { modifiedOn, setInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Modified On'
  const value = modifiedOn
  const onChange = (modifiedOn: string) => setInputs({ modifiedOn })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default ModifiedOnInput
