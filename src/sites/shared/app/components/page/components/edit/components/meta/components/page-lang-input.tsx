import React from 'react'
import { ManagedText } from 'managed-inputs'

interface PageLangProps {
  pageLang: string
  setInputs(props: object): void
}

const PageLangInput = (props: PageLangProps) => {
  const { pageLang, setInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Language'
  const value = pageLang
  const onChange = (pageLang: string) => setInputs({ lang: pageLang })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default PageLangInput
