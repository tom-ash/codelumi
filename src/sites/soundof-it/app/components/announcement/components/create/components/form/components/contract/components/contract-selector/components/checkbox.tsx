import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'

interface CheckboxInterface {
  setStore(newStore: object): void,
  contractKey: 'b2b' | 'employment' | 'civilContract', 
  contractValue: boolean,
  label: string
}

const B2BCheckbox = (props: CheckboxInterface) => {
  const {
    contractKey,
    contractValue: checked,
    label,
    setStore
  } = props

  const checkboxProps = {
    classNames: { container: 'form-input checkbox'},
    checked,
    label,
    onClick: (value: boolean) => setStore({ [contractKey]: value })
  }

  return <ManagedCheckbox {...checkboxProps} />
}

export default B2BCheckbox
