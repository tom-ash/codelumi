import React from 'react'
import { ManagedText } from 'managed-inputs'

interface NumberInputInterface {
  setStore(newStore: object): void,
  valueKey: string,
  label: string,
  value: number
}

const NumberInput = (props: NumberInputInterface) => {
  const {
    setStore,
    valueKey,
    value,
    label
  } = props

  const inputProps = {
    classNames: { container: 'form-input text' },
    value: value || '',
    type: 'number',
    label,
    onChange: (value: string) => setStore({ [valueKey]: +value }),
  }

  return <ManagedText {...inputProps} />
}

export default NumberInput
