import React from "react"
import { ManagedText } from 'managed-inputs'

type LinkInputProps = {
  link: string
  changeInputs(attrs: { link: string }): void
  langHandler: LangHandler
}

export function LinkInput(props: LinkInputProps) {
  const {
    link,
    changeInputs
  } = props

  const classNames = { container: 'form-input text with-icon rent-amount' }
  const label = 'Link'

  const linkProps = {
    label,
    value: link || '',
    onChange: (value: string) => changeInputs({ link: value }),
    classNames,
  }

  return <ManagedText { ...linkProps } />
}

export default LinkInput
