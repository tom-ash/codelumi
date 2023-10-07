import React from 'react'
import { ManagedTextarea } from 'managed-inputs'
import { useInputs } from '../../../functions/store/use-inputs'
import { useTexts } from '../../../functions/store/use-texts'
import { useDispatch } from 'react-redux'

interface TextareaInterface {
  (props: { textareaKey: string; containerClassNames?: string; onChangeCallback?(): void }): JSX.Element
}

export const Textarea: TextareaInterface = props => {
  const { textareaKey, containerClassNames, onChangeCallback } = props
  const value = useInputs()[textareaKey]
  const label = useTexts()[`${textareaKey}TextareaLabel`]
  const dispatch = useDispatch()
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
