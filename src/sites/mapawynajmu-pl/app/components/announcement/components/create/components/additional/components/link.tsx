import React from 'react'
import { ManagedText } from 'managed-inputs'

type LinkInputProps = {
  link: string
  setInputs(attrs: { link: string }): void
}

export function LinkInput(props: LinkInputProps) {
  const { link, setInputs } = props

  const classNames = { container: 'form-input text with-icon rent-amount' }
  const label = 'Link'

  const linkProps = {
    label,
    value: link || '',
    onChange: (value: string) => setInputs({ link: value }),
    classNames,
  }

  return <ManagedText {...linkProps} />
}

export default LinkInput
