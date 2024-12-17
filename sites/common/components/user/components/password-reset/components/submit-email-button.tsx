import React from 'react';
import { submitEmail } from '../functions/submit-email';
import { SubmitButton } from '../../../../support/submit-button/submit-button';
import { useTexts } from '../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useInputs } from '../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

export const SubmitEmailButton = () => {
  const { submitEmail: label, emailInputInvalidError } = useTexts();
  const { apiUrl } = useData();
  const { email } = useInputs();

  const submitButtonProps = {
    apiUrl,
    label,
    emailInputInvalidError,
    submit: submitEmail,
    email,
  };

  return <SubmitButton {...submitButtonProps} />;
};
