import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { submit } from '../functions/submit'
import { useApp } from '../../../../../../../../../shared/app/functions/store/use-app'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'
import { useErrors } from '../../../../../../../../../shared/app/functions/store/use-errors'
import { useUser } from '../../../../../../../../../shared/app/functions/store/use-user'
import { useData } from '../../../../../../../../../shared/app/functions/store/use-data'

const SubmitButton = () => {
  const { lang } = useApp()
  const texts = useTexts()
  const inputs = useInputs()
  const dispatch = useDispatch()
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { postingId } = useData()

  const { authorized } = useUser()

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
  } = inputs
  const {
    businessNameInputInvalidError: businessNameError,
    termsOfServiceConsentLabel,
    logoInputMissingError: logoError,
  } = useTexts()

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label: texts.submit,
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
      }),
  }

  return <ManagedButton {...buttonProps} />
}

export default SubmitButton
