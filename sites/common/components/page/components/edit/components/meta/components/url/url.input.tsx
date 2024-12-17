import React from 'react';
import { TextInput } from '../../../../../../../support/text-input/text-input';

export const UrlInput = () => {
  const textInputProps = {
    inputKey: 'url',
    containerClassNames: 'form-input text',
  };

  return <TextInput {...textInputProps} />;
};
