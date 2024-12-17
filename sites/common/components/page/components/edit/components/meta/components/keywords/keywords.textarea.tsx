import React from 'react';
import { Textarea } from '../../../../../../../support/textarea/textarea';

export const KeywordsTextarea = () => {
  const textareaProps = {
    textareaKey: 'keywords',
    containerClassNames: 'form-input',
  };

  return <Textarea {...textareaProps} />;
};
