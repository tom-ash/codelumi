import React from 'react';
import { SubmitButtonVer2 } from '../../../../../../../../../../common/components/support/submit-button-ver-2/submit-button-ver-2';
import { submitApplication } from '../../functions/submit-application';
import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { useData } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useDispatch } from 'react-redux';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

export const Submit = () => {
  const {
    posting: { id: postingId },
  } = useData();
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
    cV,
  } = useInputs();
  const dispatch = useDispatch();
  const setErrors = (value: any) => dispatch({ type: 'errors', value });
  const {
    firstNameInputInvalidError,
    lastNameInputInvalidError,
    emailInputInvalidError,
    cVFileInputInvalid,
  } = useTexts();

  const params = {
    postingId,
    firstName,
    lastName,
    email,
    phoneNumber,
    linkedInProfile,
    gitHubAccount,
    cV,
    setErrors,
    firstNameInputInvalidError,
    lastNameInputInvalidError,
    emailInputInvalidError,
    cVFileInputInvalid,
  };

  return (
    <SubmitButtonVer2 name="apply" params={params} submit={submitApplication} />
  );
};
