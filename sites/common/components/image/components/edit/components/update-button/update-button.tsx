import React from 'react';
import { update as submit } from '../../functions/update';
import { SubmitButton } from '../../../../../support/submit-button/submit-button';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useInputs } from '../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

export const UpdateButton = () => {
  const { updateButtonLabel: label } = useTexts();
  const { apiUrl, id: imageId } = useData();
  const { width, height, storageKey, storageUrl, body } = useInputs();

  const submitButtonProps = {
    label,
    apiUrl,
    imageId,
    body,
    width,
    height,
    storageKey,
    storageUrl,
    submit,
  };

  return <SubmitButton {...submitButtonProps} />;
};
