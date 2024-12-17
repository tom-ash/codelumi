import React from 'react';
import { TextInput } from '../../../../../../../support/text-input/text-input';

export const ModifiedOnInput = () => {
  const textInputProps = {
    inputKey: 'modifiedOn',
    containerClassNames: 'form-input text',
  };

  return <TextInput {...textInputProps} />;
};
