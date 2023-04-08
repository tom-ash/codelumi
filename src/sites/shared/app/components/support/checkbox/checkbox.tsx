import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedCheckbox } from 'managed-inputs'

interface CheckboxInterface {
  (props: { checkboxKey: string; containerClassNames?: string }): React.ReactElement
}

export const Checkbox: CheckboxInterface = props => {
  const { checkboxKey, containerClassNames } = props
  const { state, dispatch } = useStore()
  const { texts, inputs } = state
  const { [`${checkboxKey}CheckboxLabel`]: label } = texts
  const { [checkboxKey]: checked } = inputs
  const classNames = { container: containerClassNames ? `${containerClassNames} checkbox` : 'checkbox' }
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onClick = () => setInputs({ [checkboxKey]: !checked })
  const checkboxProps = { checked, classNames, label, onClick }

  return <ManagedCheckbox {...checkboxProps} />
}
