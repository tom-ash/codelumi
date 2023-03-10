// import React from 'react'
// import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
// import { ButtonSpinner } from '../../../../../../../../support/components/button-spinner/button-spinner'
// import { ManagedButton } from 'managed-inputs'
// import { submitEmail } from '../functions/submit-email'

// export const SubmitEmailButton = () => {
//   const { state, dispatch } = useStore()
//   const { app, texts, control, inputs } = state
//   const { lang } = app
//   const { submitEmail: submitEmailLabel } = texts
//   const { connecting } = control
//   const { emailAddress: email } = inputs
//   const classNames = { container: 'button' }
//   const buttonSpinnerProps = {
//     connecting,
//     label: submitEmailLabel
//   }
//   const label = <ButtonSpinner {...buttonSpinnerProps} />
//   const setControl = (value: any) => dispatch({ type: 'control', value })

//   const onClick = () => {
//     setControl({ connecting: true })

//     submitEmail({
//       lang,
//       email,
//       setControl,
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
