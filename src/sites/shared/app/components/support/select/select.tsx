import React from 'react'
import { ManagedSelect } from 'managed-inputs'
import { SVG } from '../svg/svg'
import { useTexts } from '../../../functions/store/use-texts'
import { useInputs } from '../../../functions/store/use-inputs'
import { useDispatch } from 'react-redux'

interface SelectInterface {
  (props: {
    selectKey: string
    containerClassNames?: string
    children?: React.ReactElement
    onChangeCallback?(): void
  }): JSX.Element
}

export const Select: SelectInterface = props => {
  const { selectKey, containerClassNames, children: customChildren, onChangeCallback } = props
  const inputs = useInputs()
  const dispatch = useDispatch()
  const options = inputs[`${selectKey}SelectOptions`]
  const value = inputs[selectKey]
  const label = useTexts()[`${selectKey}SelectLabel`]
  const classNames = { container: containerClassNames ? `${containerClassNames} select-element` : 'select-element' }
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onSelect = ({ value }: { value: any }) => {
    setInputs({ [selectKey]: value })
    onChangeCallback && onChangeCallback()
  }
  const children = customChildren !== undefined ? customChildren : <SVG name='chevron' />
  const selectProps = {
    classNames,
    label,
    options,
    value,
    children,
    onSelect,
  }

  return <ManagedSelect {...selectProps} />
}
