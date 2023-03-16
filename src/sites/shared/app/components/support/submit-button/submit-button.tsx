import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ButtonSpinner } from '../../../../../mapawynajmu-pl/app/components/support/components/button-spinner/button-spinner'
import { ManagedButton } from 'managed-inputs'

interface SubmitButtonInterface {
  (props: { label: string; submit(args: any): void; [key: string]: any, customContainerClassNames?: string }): JSX.Element
}

export const SubmitButton: SubmitButtonInterface = props => {
  const { label: textLabel, customContainerClassNames, submit } = props
  const { state, dispatch } = useStore()
  const { app, control } = state
  const { lang } = app
  const { connecting } = control
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
