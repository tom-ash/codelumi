import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import ButtonSpinnerDeprecated from '../../../../../../../../support/components/button-spinner/button-spinner'
import { postUserObject } from '../functions/post-user-object'
import { buildUserObject } from '../functions/build-user-object'
import { ManagedButton } from 'managed-inputs'



export const SubmitButton = () => {

  const dispatch = useDispatch()
  // const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { texts, inputs } = useStore().getState()
  const {
    termsOfServiceConsentLabel,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
  } = inputs
  const classNames = { container: 'button' }

  const label = 'REGISTER'
  // const label = (
  //   // @ts-ignore
  //   // <ButtonSpinnerDeprecated
  //   //   // connecting={connecting}
  //   //   label={{ pl: 'Zarejestruj', en: 'Register' }}
  //   //   // @ts-ignore
  //   //   // langHandler={this.langHandler}
  //   // />
  // )
  const onClick = () => {
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

    if (!userObject) return

    // postUserObject.call(this, userObject)
  }

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}
