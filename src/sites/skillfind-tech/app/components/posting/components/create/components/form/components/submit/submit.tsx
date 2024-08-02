import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { submit } from '../../functions/submit'
import { useApp } from '../../../../../../../../../../shared/app/functions/store/use-app'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'
import { useUser } from '../../../../../../../../../../shared/app/functions/store/use-user'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import BeatLoader from 'react-spinners/BeatLoader'
import { useControl } from '../../../../../../../../../../shared/app/functions/store/use-control'

export const Submit = () => {
  const { lang } = useApp()
  const { submitButtonLabel } = useTexts()
  const inputs = useInputs()
  const dispatch = useDispatch()
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { postingId } = useData()
  const { authorized } = useUser()
  const { isSubmitting } = useControl()

  const {
    selectedSkills,
    position,
    cooperationMode,
    plDescription,
    enDescription,
    b2b,
    b2bMax,
    b2bMin,
    b2bCurrency,
    employment,
    employmentMax,
    employmentMin,
    employmentCurrency,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
    businessName,
    link,
    industry,
    email,
    password,
    termsOfServiceConsent,
    consents,
    logo,
    formApplicationManner,
    linkApplicationManner,
    applicationLink,
  } = inputs
  const {
    businessNameInputInvalidError: businessNameError,
    emailInputInvalidError: emailError,
    passwordInputInvalidError: passwordError,
    applicationLinkInputInvalidError: applicationLinkError,
    termsOfServiceConsentLabel,
    logoInputMissingError: logoError,
    positionInputInvalidError: positionError,
    linkInputInvalidError: linkError,
  } = useTexts()

  const label = isSubmitting ? (
    <BeatLoader
      color='white'
      size={8}
    />
  ) : (
    submitButtonLabel
  )

  const buttonProps = {
    classNames: { container: 'submit-button' },
    label,
    onClick: () =>
      submit({
        postingId: postingId || null,
        position,
        positionError,
        lang,
        selectedSkills,
        plDescription,
        enDescription,
        cooperationMode,
        b2b,
        b2bMax,
        b2bMin,
        b2bCurrency,
        employment,
        employmentMin,
        employmentMax,
        employmentCurrency,
        placeId,
        placeAutocomplete,
        lat,
        lng,
        country,
        locality,
        sublocality,
        businessName,
        businessNameError,
        link,
        linkError,
        industry,
        email,
        emailError,
        password,
        passwordError,
        termsOfServiceConsent,
        termsOfServiceConsentLabel,
        consents,
        logo,
        logoError,
        authorized,
        setErrors,
        setControl,
        formApplicationManner,
        linkApplicationManner,
        applicationLink,
        applicationLinkError,
      }),
  }

  return <ManagedButton {...buttonProps} />
}
