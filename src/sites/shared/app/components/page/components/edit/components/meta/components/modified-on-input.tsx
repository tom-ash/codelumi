import React from 'react'
import { ManagedText } from 'managed-inputs'

interface ModifiedOnInputProps {
  modifiedOn: string
  changeInputs(props: object): void
}

const ModifiedOnInput = (props: ModifiedOnInputProps) => {
  const { modifiedOn, changeInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Modified On'
  const value = modifiedOn
  const onChange = (modifiedOn: string) => changeInputs({ modifiedOn })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default ModifiedOnInput
