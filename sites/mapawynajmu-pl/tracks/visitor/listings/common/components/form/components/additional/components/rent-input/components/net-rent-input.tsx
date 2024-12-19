import { SetInputs } from '../../../../../../../../../../../../../lib/types/setters';
import { TextInputType } from '../../../../../../../../../../../../common/components/semanticize/text-input/text-input';
import {
  TextInput,
  TextInputStyles,
} from '../../../../../../../../../../../../common/components/support/text-input/text-input';
import styles from '../../../../../../../../../../common/styles/inputs/text.module.css';

interface NetRentInputProps {
  value: string;
  label: string;
  placeholder: string;
  setInputs: SetInputs;
}

export const NetRentInput = (props: NetRentInputProps) => {
  const { label, placeholder, value, setInputs } = props;

  return (
    <TextInput
      value={value}
      label={label}
      placeholder={placeholder}
      inputProp="netRentAmount"
      setInputs={setInputs}
      styles={styles as unknown as TextInputStyles} // TODO: Search for better solution.
      type={TextInputType.NUMBER}
    />
  );
};
