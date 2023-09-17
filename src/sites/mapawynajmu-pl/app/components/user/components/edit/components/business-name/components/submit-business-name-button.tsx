import React from 'react'
import { SubmitButton } from '../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitBusinessName } from '../functions/submit-business-name'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'

export const SubmitBusinessNameButton = () => {
  const { countryCodeAndPhoneNumberSubmitButtonLabel: label } = useTexts()
  const { businessName } = useInputs()
  const dispatch = useDispatch()
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
