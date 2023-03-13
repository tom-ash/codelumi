import React from 'react'
import { postUserObject } from '../functions/post-user-object'
import { buildUserObject } from '../functions/build-user-object'
import { ManagedButton } from 'managed-inputs'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { ButtonSpinner } from '../../../../../../../../support/components/button-spinner/button-spinner'

export const SubmitButton = () => {
  const { state, dispatch } = useStore()
  const { app, texts, control, inputs } = state
  const { lang } = app
  const { termsOfServiceConsentLabel, signUp } = texts
  const { connecting } = control
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsOfServiceConsent } = inputs
  const classNames = { container: 'button' }
  const buttonSpinnerProps = {
    connecting,
    label: signUp,
  }
  const label = <ButtonSpinner {...buttonSpinnerProps} />
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onClick = () => {
    setControl({ connecting: true })

    const userObject = buildUserObject({
      termsOfServiceConsentLabel,
      accountType,
      businessName,
      emailAddress,
      password,
      countryCode,
      phoneNumber,
      termsOfServiceConsent,
      setErrors,
    })

    if (!userObject) return setControl({ connecting: false })

    postUserObject({ userObject, lang })
  }

  const buttonProps = {
    disabled: connecting,
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
