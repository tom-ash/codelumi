import React from 'react';
import { ManagedButton } from 'managed-inputs';
import { createAsset } from './functions/create';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

export const CreateButton = () => {
  const { addAssetButtonLabel: label } = useTexts();
  const classNames = { container: 'create-button' };
  const onClick = createAsset;

  const buttonProps = {
    classNames,
    label,
    onClick,
  };

  return <ManagedButton {...buttonProps} />;
};
