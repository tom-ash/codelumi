import React from 'react';
import { Textarea } from '../../../../../../../support/textarea/textarea';

export const DescriptionTextarea = () => {
  const textareaProps = {
    textareaKey: 'description',
    containerClassNames: 'form-input',
  };

  return <Textarea {...textareaProps} />;
};
