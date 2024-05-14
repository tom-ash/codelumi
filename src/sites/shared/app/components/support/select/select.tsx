import React from 'react'
import { Select as SemanticSelect } from 'semanticize'
import { useTexts } from '../../../functions/store/use-texts'
import { useInputs } from '../../../functions/store/use-inputs'
import { useDispatch } from 'react-redux'

interface SelectInterface {
  (props: {
    selectKey: string
    className?: string
    children?: React.ReactElement
    onChangeCallback?(): void
    disabled?: boolean
  }): JSX.Element
}

export const Select: SelectInterface = props => {
  const { selectKey, className, onChangeCallback, disabled } = props
  const inputs = useInputs()
  const dispatch = useDispatch()
  const options = inputs[`${selectKey}SelectOptions`]
  const value = inputs[selectKey]
  const label = useTexts()[`${selectKey}SelectLabel`]
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onSelect = (value: string) => {
    setInputs({ [selectKey]: value })
    onChangeCallback && onChangeCallback()
  }

  return (
    <SemanticSelect
      className={className}
      label={label}
      options={options}
      value={value}
      onSelect={onSelect}
      // disabled={disabled}
    />
  )
}
