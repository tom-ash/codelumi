import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'
import { useTexts } from '../../../functions/store/use-texts';
import { useInputs } from '../../../functions/store/use-inputs';
import { useDispatch } from 'react-redux';

interface CheckboxInterface {
  (props: { checkboxKey: string; containerClassNames?: string }): React.ReactElement
}

export const Checkbox: CheckboxInterface = props => {
  const { checkboxKey, containerClassNames } = props
  const { [`${checkboxKey}CheckboxLabel`]: label } = useTexts()
  const { [checkboxKey]: checked } = useInputs()
  const dispatch = useDispatch()
  const classNames = { container: containerClassNames ? `${containerClassNames} checkbox` : 'checkbox' }
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onClick = () => setInputs({ [checkboxKey]: !checked })
  const checkboxProps = { checked, classNames, label, onClick }

  return <ManagedCheckbox {...checkboxProps} />
}
