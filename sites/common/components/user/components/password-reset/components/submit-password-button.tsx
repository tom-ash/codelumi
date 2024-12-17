import React from 'react';
import { submitPassword } from '../functions/submit-password';
import { SubmitButton } from '../../../../support/submit-button/submit-button';
import { useTexts } from '../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useInputs } from '../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

export const SubmitPasswordButton = () => {
  const { submitPassword: label } = useTexts();
  const { apiUrl } = useData();
  const { email, verificationCode, password } = useInputs();

  const submitButtonProps = {
    apiUrl,
    label,
    submit: submitPassword,
    email,
    verificationCode,
    password,
  };

  return <SubmitButton {...submitButtonProps} />;
};
