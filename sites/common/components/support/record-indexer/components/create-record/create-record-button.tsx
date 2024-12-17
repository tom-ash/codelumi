import React from 'react';
import { SubmitButton } from '../../../submit-button/submit-button';
import { useTexts } from '../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useApp } from '../../../../../../src copy/sites/shared/app/functions/store/use-app';
import { useData } from '../../../../../../src copy/sites/shared/app/functions/store/use-data';
import { useInputs } from '../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

interface CreateRecordButtonInterface {
  (props: { create: any }): React.ReactElement;
}

export const CreateRecordButton: CreateRecordButtonInterface = (props) => {
  const { create: submit } = props;
  const { createRecordButtonLabel: label } = useTexts();
  const { lang } = useApp();
  const { apiUrl } = useData();
  const { recordKey } = useInputs();

  const submitButtonProps = {
    label,
    lang,
    apiUrl,
    recordKey,
    submit,
  };

  return <SubmitButton {...submitButtonProps} />;
};
