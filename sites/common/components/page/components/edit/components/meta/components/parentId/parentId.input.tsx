import React from 'react';
import { TextInput } from '../../../../../../../support/text-input/text-input';

export const ParentIdInput = () => {
  const textInputProps = {
    inputKey: 'parentId',
    containerClassNames: 'form-input text',
  };

  return <TextInput {...textInputProps} />;
};
