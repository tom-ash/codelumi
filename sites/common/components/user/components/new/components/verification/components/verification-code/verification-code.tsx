import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../../../lib/types/setters';
import { Styles } from '../../../../../../../../../mapawynajmu-pl/types/styles';
import ManagedText from '../../../../../../../managed-inputs/text/text';
import { verificationCodeValidator } from './verification-code.validator';

interface VerificationCodeInputProps {
  value: string;
  label: string;
  error: string;
  isError: string;
  setInputs: SetInputs;
  setErrors: SetErrors;
  styles: Styles;
}

export const VerificationCodeInput = (props: VerificationCodeInputProps) => {
  const {
    value,
    label,
    error: errorMessage,
    isError,
    setInputs,
    setErrors,
    styles,
  } = props;
  const match = /^\d{0,4}$/;
  const classNames = {
    container: styles.container,
    label: styles.label,
    input: styles.input,
    error: styles.error,
  };
  const onFocus = () => setErrors({ verificationCode: false });
  const onChange = (verificationCode: string) =>
    setInputs({ verificationCode });
  const onBlur = (verificationCode: string) =>
    verificationCodeValidator({ verificationCode, setErrors });
  const error = isError && errorMessage;

  const verificationCodeProps = {
    classNames,
    label,
    value,
    match,
    error,
    onFocus,
    onChange,
    onBlur,
  };

  return <ManagedText {...verificationCodeProps} />;
};
