import React from 'react';
import { SubmitButton } from '../../../../../../../../../../common/components/support/submit-button/submit-button';
import { submitForm } from './functions/submit-form';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

export const Submit = () => {
  const {
    submitFormButtonLabel: label,
    termsOfServiceConsentLabel,
    businessNameInputInvalidError: businessNameError,
    emailInputInvalidError: emailError,
    passwordInputInvalidError: passwordError,
    logoInputMissingError: logoError,
    linkInputInvalidError: linkError,
  } = useTexts();
  const {
    email,
    password,
    termsOfServiceConsent,
    logo,
    businessName,
    industry,
    link,
  } = useInputs();

  const submitButtonProps = {
    label,
    businessName,
    businessNameError,
    link,
    linkError,
    industry,
    // industryError
    logo,
    logoError,
    email,
    emailError,
    password,
    passwordError,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,

    submit: submitForm,
  };

  return <SubmitButton {...submitButtonProps} />;
};
