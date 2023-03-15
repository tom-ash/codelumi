import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedText } from 'managed-inputs'

interface TextInputInterface {
  (props: {
    inputKey: string,
    containerClassNames?: string,
    onChangeCallback?(): void
  }): JSX.Element
}

// TODO: Add error handling!

export const TextInput: TextInputInterface = props => {
  const { inputKey, containerClassNames, onChangeCallback } = props
  const { state, dispatch } = useStore()
  const { texts, inputs } = state
  const value = inputs[inputKey]
  const label = texts[`${inputKey}InputLabel`]
  const placeholder = texts[`${inputKey}InputPlaceholder`]
  const classNames = { container: containerClassNames ? `${containerClassNames} text-input` : 'text-input' }
  
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onChange = (value: string) => {
    setInputs({ [inputKey]: value })
    onChangeCallback && onChangeCallback()
  }

  const areaProps = {
    classNames,
    label,
    placeholder,
    value,
    onChange,
  }

  return <ManagedText {...areaProps} />
}
