// import React from 'react'
// import { type Dispatch } from 'redux'
// import { ManagedText } from 'managed-inputs'
// import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'

// interface EmailAddressInputProps {
//   emailAddress: string
//   emailAddressError: LangObject
//   langHandler: LangHandler
//   changeInputs: ChangeInputs
//   dispatch: Dispatch
// }

// // export function areaCodeManager() {
// //   const options = countryCodes.map(countryCode => ({
// //     value: countryCode,
// //     text: countryCode,
// //     // key: countryCode
// //   }))

// //   return {
// //     onFocusCoverZIndex: 3001,
// //     id: 'user-create-email-area-code',
// //     classNames: { container: 'country-code' },
// //     children: <SVG name='chevron' />,
// //     value: this.props.countryCode,
// //     options,
// //     onSelect: option => {
// //       this.props.changeInputs({ countryCode: option.value })
// //       sendGaEvent(AREA_CODE_SELECTED_EVENT)
// //     },
// //   }
// // }

// export const EmailAddressInput = (props: EmailAddressInputProps) => {
//   const { emailAddress, emailAddressError, changeInputs, langHandler, dispatch } = props
//   const classNames = { container: 'text-input' }
//   // @ts-ignore
//   // const label = langHandler({ pl: 'Adres email', en: 'Email Address' })
//   const type = 'email'
//   const autoComplete = 'email'
//   const value = emailAddress
//   // @ts-ignore
//   const placeholder = langHandler({ pl: 'Podaj adres email', en: 'Provide email address' })
//   // @ts-ignore
//   const error = langHandler(emailAddressError)
//   const onFocus = () => dispatch({
//     type: 'user/create/errors',
//     value: { emailAddress: EMPTY_LANG_OBJECT }
//   })
//   const onBlur = (emailAddress: string) => {
//     emailAddressValidator({ emailAddress, dispatch })
//   }
//   const onChange = (emailAddress: string) => changeInputs({ emailAddress })

//   const emailAddressInputProps = {
//     classNames,
//     type,
//     autoComplete,
//     // label,
//     value,
//     placeholder,
//     error,
//     onFocus,
//     onBlur,
//     onChange,
//   }

//   return <ManagedText {...emailAddressInputProps} />
// }
