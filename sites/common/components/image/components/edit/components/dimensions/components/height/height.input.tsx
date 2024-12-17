import React from 'react';
import { TextInput } from '../../../../../../../support/text-input/text-input';

export const HeightInput = () => {
  const textInputProps = {
    inputKey: 'height',
    containerClassNames: 'form-input',
  };

  return <TextInput {...textInputProps} />;
};
