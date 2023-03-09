import React, { useContext } from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { ButtonSpinner } from '../../../../../../../../support/components/button-spinner/button-spinner'
import AppContext from '../../../../../../../../../constants/context'
import { ManagedButton } from 'managed-inputs'
import { signIn } from '../functions/sign-in'

export const SubmitButton = () => {
  const { changeRoute } = useContext(AppContext)
  const { state, dispatch } = useStore()
  const { app, texts, links, control, inputs } = state
  const { lang } = app
  const { signIn: signInLabel } = texts
  const { connecting } = control
  const {
    emailAddress: email,
    password,
  } = inputs
  const classNames = { container: 'button' }
  const buttonSpinnerProps = {
    connecting,
    label: signInLabel
  }
  const { href } = links['root']
  const label = <ButtonSpinner {...buttonSpinnerProps} />
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onClick = () => {
    setControl({ connecting: true })

    signIn({
      lang,
      email,
      password,
      href,
      setControl,
      setErrors,
      changeRoute,
    })
  }

  const buttonProps = {
    disabled: connecting,
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
