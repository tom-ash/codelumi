import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedButton } from 'managed-inputs'

interface SubmitButtonInterface {
  (props: { controlKey: string; containerClassNames?: string }): React.ReactElement
}

export const ControlButton: SubmitButtonInterface = props => {
  const { controlKey, containerClassNames: customContainerClassNames } = props
  const { state, dispatch } = useStore()
  const { texts, control } = state
  const { [`${controlKey}ButtonLabel`]: label } = texts
  const { [controlKey]: controlValue } = control
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
