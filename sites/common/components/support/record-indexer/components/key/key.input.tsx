import React from 'react';
import { TextInput } from '../../../text-input/text-input';

export const KeyInput = () => {
  const textInputProps = {
    inputKey: 'recordKey',
    containerClassNames: 'form-input text',
  };

  return <TextInput {...textInputProps} />;
};
