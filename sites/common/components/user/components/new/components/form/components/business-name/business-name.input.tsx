import {
  SetErrors,
  SetInputs,
} from '../../../../../../../../../../lib/types/setters';
import ManagedText from '../../../../../../../../../common/components/managed-inputs/text/text';
import { Styles } from '../../../../../../../../../mapawynajmu-pl/types/styles';
import { businessNameValidator } from './business-name.validator';

interface BusinessNameInputProps {
  label: string;
  placeholder: string;
  error: string;
  value: string;
  setInputs: SetInputs;
  setErrors: SetErrors;
  styles: Styles;
  isError: boolean;
}

export const BusinessNameInput = (props: BusinessNameInputProps) => {
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
    container: `${styles.container} ${styles.businessName}`,
    label: styles.label,
    input: styles.input,
    error: styles.error,
  };
  const error = isError && errorMessage;

  const onChange = (businessName: string) => setInputs({ businessName });
  const onFocus = () => setErrors({ businessName: false });
  const onBlur = (businessName: string) =>
    businessNameValidator({ businessName, setErrors });

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
