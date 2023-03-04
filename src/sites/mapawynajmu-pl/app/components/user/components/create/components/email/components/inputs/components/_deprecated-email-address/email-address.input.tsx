// import React from 'react'
// import { useStore, useDispatch } from 'react-redux'
// import { ManagedText } from 'managed-inputs'
// import { emailAddressValidator } from './email-address.validator'

// export const EmailAddressInput = () => {
//   const dispatch = useDispatch()
//   const setInputs = (value: any) => dispatch({ type: 'inputs', value })
//   const setErrors = (value: any) => dispatch({ type: 'errors', value })
//   const { texts, inputs, errors } = useStore().getState()
//   const { emailAddress } = inputs
//   const {
//     emailInputLabel: label,
//     emailInputPlaceholder: placeholder,
//     emailInvalidError,
//   } = texts
//   const { emailAddress: emailInvalidErrorTriggered } = errors
//   const classNames = { container: 'text-input' }
//   const type = 'email'
//   const autoComplete = 'email'
//   const value = emailAddress
//   const error = emailInvalidErrorTriggered && emailInvalidError
//   const onFocus = () => setErrors({ emailAddress: false })
//   const onBlur = (emailAddress: string) => emailAddressValidator({ emailAddress, setErrors })
//   const onChange = (emailAddress: string) => setInputs({ emailAddress })

//   const emailAddressInputProps = {
//     classNames,
//     type,
//     autoComplete,
//     label,
//     value,
//     placeholder,
//     error,
//     onFocus,
//     onBlur,
//     onChange,
//   }

//   return <ManagedText {...emailAddressInputProps} />
// }
