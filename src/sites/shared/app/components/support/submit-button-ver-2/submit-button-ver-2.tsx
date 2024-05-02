import React from 'react'
import { ButtonSpinner } from '../../../../../mapawynajmu-pl/app/components/support/components/button-spinner/button-spinner'
import { ManagedButton } from 'managed-inputs'
import { useApp } from '../../../functions/store/use-app'
import { useControl } from '../../../functions/store/use-control'
import { useDispatch } from 'react-redux'
import { useTexts } from '../../../functions/store/use-texts'

interface SubmitButtonVer2Interface {
  (props: {
    name: string
    className?: string
    params: {
      [key: string]: any
    }
    submit(params: any): void
  }): JSX.Element
}

export const SubmitButtonVer2: SubmitButtonVer2Interface = props => {
  const { name, className: customClassName, submit, params } = props
  const { lang } = useApp()
  const { [`${name}ButtonLabel`]: textLabel } = useTexts()
  const { [`${name}Transferring`]: transferring } = useControl()
  const disabled = transferring
  const containerClassNames = customClassName ? `submit-button ${customClassName}` : 'submit-button'
  const classNames = { container: containerClassNames }
  const buttonSpinnerProps = { connecting: transferring, label: textLabel }
  const label = <ButtonSpinner {...buttonSpinnerProps} />

  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const onClick = () => {
    setControl({ [`${name}Transferring`]: true })

    submit({
      lang,
      setControl,
      setData,
      setErrors,
      ...params,
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
