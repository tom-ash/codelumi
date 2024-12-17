import React from 'react';
import { TextInput } from '../../../../../../../support/text-input/text-input';

export const PriorityInput = () => {
  const textInputProps = {
    inputKey: 'priority',
    containerClassNames: 'form-input text',
  };

  return <TextInput {...textInputProps} />;
};
