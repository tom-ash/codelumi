import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitBusinessName } from '../functions/submit-business-name'

export const SubmitBusinessNameButton = () => {
  const { state, dispatch } = useStore()
  const { texts, inputs } = state
  const { countryCodeAndPhoneNumberSubmitButtonLabel: label } = texts
  const {
    businessName,
  } = inputs
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })

  const submitButtonProps = {
    label,
    businessName,
    submit: submitBusinessName,
    setControl,
    setData,
    setInputs,
  }

  return <SubmitButton {...submitButtonProps} />
}
