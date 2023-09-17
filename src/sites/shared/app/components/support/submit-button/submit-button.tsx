import React from 'react'
import { ButtonSpinner } from '../../../../../mapawynajmu-pl/app/components/support/components/button-spinner/button-spinner'
import { ManagedButton } from 'managed-inputs'
import { useApp } from '../../../functions/store/use-app'
import { useControl } from '../../../functions/store/use-control'
import { useDispatch } from 'react-redux'

interface SubmitButtonInterface {
  (props: {
    label: string
    submit(args: any): void
    [key: string]: any
    customContainerClassNames?: string
  }): JSX.Element
}

export const SubmitButton: SubmitButtonInterface = props => {
  const { label: textLabel, customContainerClassNames, submit } = props
  const { lang } = useApp()
  const { connecting } = useControl()
  const dispatch = useDispatch()
  const disabled = connecting
  const containerClassNames = customContainerClassNames ? `submit-button ${customContainerClassNames}` : 'submit-button'
  const classNames = { container: containerClassNames }
  const buttonSpinnerProps = { connecting, label: textLabel }
  const label = <ButtonSpinner {...buttonSpinnerProps} />
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const onClick = () => {
    setControl({ connecting: true })

    submit({
      lang,
      setControl,
      setData,
      setErrors,
      ...props,
    })
  }

  const buttonProps = {
    disabled,
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
