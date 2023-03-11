import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitCountryCodeAndPhoneNumber as submit } from '../functions/submit-country-code-and-phone-number'

export const SubmitCountryCodeAndPhoneNumberButton = () => {
  const { state, dispatch } = useStore()
  const { app, texts, inputs } = state
  const { countryCodeAndPhoneNumberSubmitButtonLabel: label } = texts
  const {
    lang
  } = app
  const {
    countryCode,
    phoneNumber,
  } = inputs
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const submitButtonProps = {
    label,
    countryCode,
    phoneNumber,
    submit,
    setControl,
    setData,
    setInputs,
    setErrors,
  }

  return <SubmitButton {...submitButtonProps} />
}
