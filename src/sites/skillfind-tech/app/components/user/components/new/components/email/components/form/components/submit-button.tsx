import React, { useContext } from 'react'
import { postUserObject } from '../functions/post-user-object'
import { buildUserObject } from '../functions/build-user-object'
import { ManagedButton } from 'managed-inputs'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
// import { ButtonSpinner } from '..'
import AppContext from '../../../../../../../../../constants/context'

export const SubmitButton = () => {
  const { changeRoute } = useContext(AppContext)
  const { state, dispatch } = useStore()
  const { app, texts, control, inputs } = state
  const { lang } = app
  const { termsOfServiceConsentLabel, signUp } = texts
  const { connecting } = control
  const {
    emailAddress,
    password,
    termsOfServiceConsent,
  } = inputs
  const classNames = { container: 'button' }
  const buttonSpinnerProps = {
    connecting,
    label: signUp
  }
  // const label = <ButtonSpinner {...buttonSpinnerProps} />
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onClick = () => {
    setControl({ connecting: true })

    const userObject = buildUserObject({
      termsOfServiceConsentLabel,
      emailAddress,
      password,
      termsOfServiceConsent,
      setErrors,
    })

    if (!userObject) return setControl({ connecting: false })

    postUserObject({ userObject, lang, changeRoute })
  }

  const buttonProps = {
    disabled: connecting,
    classNames,
    // label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
