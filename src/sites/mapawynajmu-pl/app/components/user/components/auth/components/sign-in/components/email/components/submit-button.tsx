import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { signIn as submit } from '../functions/sign-in'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'

export const SignInButton = () => {
  const { state } = useStore()
  const { app, texts, inputs } = state
  const { lang } = app
  const { signInButtonLabel: label } = texts
  const { emailAddress, password } = inputs

  const submitButtonProps = {
    label,
    lang,
    email: emailAddress,
    password,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}

// export const SignInButton = () => {
//   const { state, dispatch } = useStore()
//   const { app, texts, links, control, inputs } = state
//   const { lang } = app
//   const { signIn: signInLabel } = texts
//   const { connecting } = control
//   const { emailAddress: email, password } = inputs
//   const classNames = { container: 'button' }
//   const buttonSpinnerProps = {
//     connecting,
//     label: signInLabel,
//   }
//   const { href } = links['root']
//   const label = <ButtonSpinner {...buttonSpinnerProps} />
//   const setControl = (value: any) => dispatch({ type: 'control', value })
//   const setErrors = (value: any) => dispatch({ type: 'errors', value })
//   const onClick = () => {
//     setControl({ connecting: true })

//     signIn({
//       lang,
//       email,
//       password,
//       href,
//       setControl,
//       setErrors,
//     })
//   }

//   const buttonProps = {
//     disabled: connecting,
//     classNames,
//     label,
//     onClick,
//   }

//   return <ManagedButton {...buttonProps} />
// }
