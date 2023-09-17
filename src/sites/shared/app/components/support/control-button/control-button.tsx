import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { useTexts } from '../../../functions/store/use-texts';
import { useControl } from '../../../functions/store/use-control';
import { useDispatch } from 'react-redux';

interface SubmitButtonInterface {
  (props: { controlKey: string; containerClassNames?: string }): React.ReactElement
}

export const ControlButton: SubmitButtonInterface = props => {
  const { controlKey, containerClassNames: customContainerClassNames } = props
  const { [`${controlKey}ButtonLabel`]: label } = useTexts()
  const { [controlKey]: controlValue } = useControl()
  const dispatch = useDispatch()
  const containerClassNames = customContainerClassNames
    ? `control-button ${customContainerClassNames}`
    : 'control-button'
  const classNames = { container: containerClassNames }
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const onClick = () => setControl({ [controlKey]: !controlValue })

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
