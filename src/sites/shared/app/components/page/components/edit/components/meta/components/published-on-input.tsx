import React from 'react'
import { ManagedText } from 'managed-inputs'

interface PublishedOnInputProps {
  publishedOn: string
  changeInputs(props: object): void
}

const PublishedOnInput = (props: PublishedOnInputProps) => {
  const { publishedOn, changeInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Published On'
  const value = publishedOn
  const onChange = (publishedOn: string) => changeInputs({ publishedOn })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default PublishedOnInput
