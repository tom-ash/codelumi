import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedTextarea } from 'managed-inputs'

interface TextareaInterface {
  (props: { textareaKey: string; containerClassNames?: string; onChangeCallback?(): void }): JSX.Element
}

export const Textarea: TextareaInterface = props => {
  const { textareaKey, containerClassNames, onChangeCallback } = props
  const { state, dispatch } = useStore()
  const { texts, inputs } = state
  const value = inputs[textareaKey]
  const label = texts[`${textareaKey}TextareaLabel`]
  const classNames = { container: containerClassNames ? `${containerClassNames} textarea` : 'textarea' }

  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onChange = (value: string) => {
    setInputs({ [textareaKey]: value })
    onChangeCallback && onChangeCallback()
  }

  const areaProps = {
    classNames,
    label,
    value,
    onChange,
    counterLimit: 100000,
  }

  return <ManagedTextarea {...areaProps} />
}
