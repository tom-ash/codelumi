import React, { useEffect } from 'react';
import { VerificationCodeInput } from '../../../../../../common/components/user/components/new/components/verification/components/verification-code/verification-code';
import { initializeDeletion } from './functions/initialize-deletion';
import { SubmitVerificationCodeButton } from './components/submit-verification-code-button';
import { useApp } from '../../../../../src copy/sites/shared/app/functions/store/use-app';
import { useTexts } from '../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useDispatch } from 'react-redux';

export const UserDelete = () => {
  const { lang } = useApp();
  const { userDeleteInputExplanation } = useTexts();
  const { email } = useData();
  const dispatch = useDispatch();
  const setControl = (value: any) => dispatch({ type: 'control', value });

  useEffect(() => {
    initializeDeletion({
      lang,
      email,
      setControl,
    });
  }, []);

  return (
    <div id="user-delete">
      <div className="explanation">{userDeleteInputExplanation}</div>
      <VerificationCodeInput />
      <SubmitVerificationCodeButton />
    </div>
  );
};
