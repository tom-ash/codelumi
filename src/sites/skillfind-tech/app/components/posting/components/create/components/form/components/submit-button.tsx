import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { submit } from '../functions/submit'
import { useApp } from '../../../../../../../../../shared/app/functions/store/use-app'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'

const SubmitButton = () => {
  const { lang } = useApp()
  const texts = useTexts()
  const inputs = useInputs()
  const dispatch = useDispatch()
  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const {
    selectedSkills,
    cooperationMode,
    plDescription,
    enDescription,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
  } = inputs

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: texts.submit,
    onClick: () =>
      submit({
        lang,
        selectedSkills,
        plDescription,
        enDescription,
        cooperationMode,
        b2b,
        b2bMax,
        b2bMin,
        employment,
        employmentMin,
        employmentMax,
        placeId,
        placeAutocomplete,
        lat,
        lng,
        country,
        locality,
        sublocality,
        setErrors,
      }),
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton
