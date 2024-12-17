import React from 'react';
import { submitVerificationCode } from '../functions/submit-verification-code';
import { SubmitButton } from '../../../../support/submit-button/submit-button';
import { useTexts } from '../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useInputs } from '../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

export const SubmitVerificationCodeButton = () => {
  const { submitVerificationCode: label } = useTexts();
  const { apiUrl } = useData();
  const { verificationCode } = useInputs();

  const submitButtonProps = {
    apiUrl,
    label,
    submit: submitVerificationCode,
    verificationCode,
  };

  return <SubmitButton {...submitButtonProps} />;
};
