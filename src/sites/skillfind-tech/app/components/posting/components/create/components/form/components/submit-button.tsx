import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { submit } from '../functions/submit'
import { useApp } from '../../../../../../../../../shared/app/functions/store/use-app'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'
import { useUser } from '../../../../../../../../../shared/app/functions/store/use-user'
import { useData } from '../../../../../../../../../shared/app/functions/store/use-data'

import BeatLoader from "react-spinners/BeatLoader";
import { useControl } from '../../../../../../../../../shared/app/functions/store/use-control'

const SubmitButton = () => {
  const { lang } = useApp()
  const texts = useTexts()
  const inputs = useInputs()
  const dispatch = useDispatch()
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { postingId } = useData()

  const { authorized } = useUser()

  const { isSubmitting } = useControl()

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
    businessName,
    industry,
    emailAddress,
    password,
    termsOfServiceConsent,
    consents,
    logo,
    backgroundColor,
    textColor,
  } = inputs
  const {
    businessNameInputInvalidError: businessNameError,
    termsOfServiceConsentLabel,
    logoInputMissingError: logoError,
  } = useTexts()

  const label = isSubmitting ? (
    <BeatLoader
      color='white'
      size={8}
    />
  ) : '(SUBMIT)'

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label,
    onClick: () =>
      submit({
        postingId: postingId || null,
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
        businessName,
        businessNameError,
        industry,
        emailAddress,
        password,
        termsOfServiceConsent,
        termsOfServiceConsentLabel,
        consents,
        logo,
        logoError,
        authorized,
        setErrors,
        setControl,
        backgroundColor,
        textColor,
      }),
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton
