import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedSelect } from 'managed-inputs'
import { SVG } from '../svg/svg'

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
  const { state, dispatch } = useStore()
  const { texts, inputs } = state
  const options = inputs[`${selectKey}SelectOptions`]
  const value = inputs[selectKey]
  const label = texts[`${selectKey}SelectLabel`]
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
