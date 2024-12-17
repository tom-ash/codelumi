import ManagedText from '../../../../../managed-inputs/text/text';
import { Styles } from '../../../../../../../mapawynajmu-pl/types/styles';
import { passwordValidator } from '../../../new/components/form/components/password/password.validator';
import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../lib/types/setters';

export enum PasswordAutoComplete {
  NEW_PASSWORD = 'new-password',
  CURRENT_PASSWORD = 'current-password',
}

interface PasswordInputProps {
  autoComplete: PasswordAutoComplete;
  label: string;
  placeholder: string;
  error: string;
  value: string;
  setInputs: SetInputs;
  setErrors: SetErrors;
  styles: Styles;
  isError: boolean;
}

export const PasswordInput = (props: PasswordInputProps) => {
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
    container: styles.container,
    label: styles.label,
    input: styles.input,
    error: styles.error,
  };
  const error = isError && errorMessage;

  const onChange = (password: string) => setInputs({ password });
  const onFocus = () => setErrors({ password: false });
  const onBlur = (password: string) =>
    passwordValidator({ password, setErrors });

  const inputProps = {
    classNames,
    type: 'password',
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
