import React from 'react'
import { SubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitCountryCodeAndPhoneNumber as submit } from '../functions/submit-country-code-and-phone-number'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'

export const SubmitCountryCodeAndPhoneNumberButton = () => {
  const { countryCodeAndPhoneNumberSubmitButtonLabel: label } = useTexts()
  const { countryCode, phoneNumber } = useInputs()
  const dispatch = useDispatch()
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
