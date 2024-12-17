// import React from 'react'
// import { ManagedText } from 'managed-inputs'
// import { phoneNumberValidator } from './phone-number.validator'
// import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs'
// import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts'
// import { useErrors } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-errors'
// import { useDispatch } from 'react-redux'

import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../../../lib/types/setters';
import { Styles } from '../../../../../../../../../mapawynajmu-pl/types/styles';
import { phoneNumberValidator } from './phone-number.validator';
import ManagedText from '../../../../../../../managed-inputs/text/text';

interface PhoneNumberInputProps {
  label: string;
  placeholder: string;
  error: string;
  value: string;
  setInputs: SetInputs;
  setErrors: SetErrors;
  styles: Styles;
  isError: boolean;
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const {
    label,
    placeholder,
    error: errorMessage,
    value,
    setInputs,
    setErrors,
    styles,
    isError,
  } = props;
  const classNames = {
    container: styles.phoneNumber,
    label: `${styles.label} ${styles.phoneNumberLabel}`,
    input: styles.input,
    error: `${styles.error} ${styles.phoneNumberError}`,
  };
  const match = /^(\d){0,9}$/;
  const type = 'tel';
  const autoComplete = 'tel-local';
  const error = isError && errorMessage;
  const onChange = (phoneNumber: string) => setInputs({ phoneNumber });
  const onFocus = () => setErrors({ phoneNumber: false });
  const onBlur = (phoneNumber: string) =>
    phoneNumberValidator({ phoneNumber, setErrors });

  const inputProps = {
    match,
    type,
    autoComplete,
    classNames,
    label,
    value,
    placeholder,
    error,
    onFocus,
    onBlur,
    onChange,
  };

  return <ManagedText {...inputProps} />;
};
