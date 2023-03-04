import React from 'react'
import { ManagedText } from 'managed-inputs'
import { useDispatch } from 'react-redux'

interface NumberInputInterface {
  valueKey: string
  label: string
  value: number
}

const NumberInput = (props: NumberInputInterface) => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  const { valueKey, value, label } = props

  const inputProps = {
    classNames: { container: 'form-input text' },
    value: value || '',
    type: 'number',
    label,
    onChange: (value: string) => setInputs({ [valueKey]: +value }),
  }

  return <ManagedText {...inputProps} />
}

export default NumberInput
