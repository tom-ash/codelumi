import React from 'react';
import { TextInput } from '../../../../../../../support/text-input/text-input';

export const PublishedOnInput = () => {
  const textInputProps = {
    inputKey: 'publishedOn',
    containerClassNames: 'form-input text',
  };

  return <TextInput {...textInputProps} />;
};
