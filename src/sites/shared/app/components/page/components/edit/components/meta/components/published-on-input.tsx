import React from 'react'
import { ManagedText } from 'managed-inputs'

interface PublishedOnInputProps {
  publishedOn: string
  setInputs(props: object): void
}

const PublishedOnInput = (props: PublishedOnInputProps) => {
  const { publishedOn, setInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Published On'
  const value = publishedOn
  const onChange = (publishedOn: string) => setInputs({ publishedOn })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default PublishedOnInput
