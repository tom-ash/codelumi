import React from 'react'
import { ManagedButton } from 'managed-inputs'

interface ActionButtonInterface {
  (props: {
    label: React.ReactElement | string
    action(args: any): void
    actionProps?: any
    className?: string
    disabled?: boolean
  }): JSX.Element
}

export const ActionButton: ActionButtonInterface = props => {
  const { label, action, actionProps, className: customClassName, disabled } = props
  const classNames = ['action-button']
  if (customClassName) {
    classNames.push(customClassName)
  }

  const onClick = () => action(actionProps)

  const buttonProps = {
    label,
    onClick,
    disabled,
    classNames: { container: classNames.join(' ') },
  }

  return <ManagedButton {...buttonProps} />
}
