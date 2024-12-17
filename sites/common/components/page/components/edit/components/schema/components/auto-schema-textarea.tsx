import React from 'react';
import { Textarea } from '../../../../../../support/textarea/textarea';

export const AutoSchemaTextarea = () => {
  const textareaProps = {
    textareaKey: 'autoSchema',
    containerClassNames: 'form-input schema',
  };

  return <Textarea {...textareaProps} />;
};
