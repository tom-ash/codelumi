import React from 'react';
import { TextInput } from '../../../../../../../../../../../../../common/components/support/text-input/text-input';
import { TextInputType } from '../../../../../../../../../../../../../common/components/support/text-input/text-input';
import { useDispatch } from 'react-redux';

interface InputInterface {
  (props: { name: string; kind: string }): React.ReactElement;
}

export const Input: InputInterface = (props) => {
  const dispatch = useDispatch();
  const setControl = (value: any) => dispatch({ type: 'control', value });
  const onEnter = () =>
    setControl({ [`${name}FilterPanel`]: false, rebuildQueryParams: true });
  const { name, kind } = props;
  const textInputProps = {
    inputKey: `${name}${kind}`,
    containerClassNames: `input ${name} ${kind.toLowerCase()}`,
    onEnter,
    type: TextInputType.NUMBER,
  };

  return <TextInput {...textInputProps} />;
};
