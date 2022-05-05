import React from "react"
import { ManagedTextarea } from "managed-inputs"

interface LinkDataTextareaProps {
  linkData: string,
  changeInputs(props: object): void
}

const LinkDataTextarea = (props: LinkDataTextareaProps) => {
  const { linkData, changeInputs } = props
  const classNames = { container: 'form-input textarea schema' }
  const label = 'Link Data'
  const value = linkData
  const counterLimit = 10000
  const onChange = (linkData: string) => changeInputs({ linkData })
  const textareaProps = { classNames, label, value, counterLimit, onChange }

  return <ManagedTextarea {...textareaProps} />
}

export default LinkDataTextarea
