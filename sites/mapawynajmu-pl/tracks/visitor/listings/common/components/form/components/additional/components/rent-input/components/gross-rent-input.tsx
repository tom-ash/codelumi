import { SetInputs } from '../../../../../../../../../../../../../lib/types/setters';
import { TextInputType } from '../../../../../../../../../../../../common/components/semanticize/text-input/text-input';
import {
  TextInput,
  TextInputStyles,
} from '../../../../../../../../../../../../common/components/support/text-input/text-input';
import styles from '../../../../../../../../../../common/styles/inputs/text.module.css';

interface GrossRentInputProps {
  value: string;
  label: string;
  placeholder: string;
  setInputs: SetInputs;
}

export const GrossRentInput = (props: GrossRentInputProps) => {
  const { label, placeholder, value, setInputs } = props;

  return (
    <TextInput
      value={value}
      label={label}
      placeholder={placeholder}
      inputProp="grossRentAmount"
      setInputs={setInputs}
      styles={styles as unknown as TextInputStyles} // TODO: Search for better solution.
      type={TextInputType.NUMBER}
    />
  );
};
