import React from 'react';
import { FileInput } from '../../../../../../../../../../common/components/support/file-input/file-input';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useDispatch } from 'react-redux';
import { useErrors } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-errors';

export const CV = () => {
  const { cVFileInputLabel, cVFileInputInstructions } = useTexts();
  const dispatch = useDispatch();
  const setInputs = (value: any) => dispatch({ type: 'inputs', value });
  const setErrors = (value: any) => dispatch({ type: 'errors', value });
  const { cv: error } = useErrors();

  return (
    <FileInput
      label={cVFileInputLabel}
      limit={1}
      icon="plus"
      instructions={cVFileInputInstructions}
      onFilesSet={(files: File[]) => {
        setInputs({ cV: files[0] });
        setErrors({ cv: '' });
      }}
      required={true}
      error={error}
    />
  );
};
