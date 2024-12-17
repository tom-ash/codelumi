import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../lib/types/setters';
import { Styles } from '../../../../../../../mapawynajmu-pl/types/styles';
import ManagedText from '../../../../../managed-inputs/text/text';
import { emailAddressValidator } from './email-address.validator';

interface EmailAddressInputProps {
  label: string;
  placeholder: string;
  error: string;
  value: string;
  setInputs: SetInputs;
  setErrors: SetErrors;
  styles: Styles;
  isError: boolean;
}

export const EmailAddressInput = (props: EmailAddressInputProps) => {
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
    container: `${styles.container} ${styles.emailAddress}`,
    label: styles.label,
    input: styles.input,
    error: styles.error,
  };
  const error = isError && errorMessage;

  const onChange = (emailAddress: string) => setInputs({ emailAddress });
  const onFocus = () => setErrors({ emailAddress: false });
  const onBlur = (emailAddress: string) =>
    emailAddressValidator({ emailAddress, setErrors });

  const inputProps = {
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
