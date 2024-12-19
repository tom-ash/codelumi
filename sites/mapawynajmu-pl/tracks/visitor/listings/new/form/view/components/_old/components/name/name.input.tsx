import React from 'react';
import { TextInput } from '../../../../../../../../../../common/components/support/text-input/text-input';

export const NameInput = () => {
  const textInputProps = {
    inputKey: 'name',
  };

  return <TextInput {...textInputProps} />;
};
