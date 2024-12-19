import React from 'react';
import { TextInput } from '../../../../../../../../../../common/components/support/text-input/text-input';
import { TextInputType } from '../../../../../../../../../../common/components/support/text-input/text-input';

export const LinkInput = () => {
  const textInputProps = {
    inputKey: 'link',
    type: TextInputType.TEXT,
  };

  return <TextInput {...textInputProps} />;
};
