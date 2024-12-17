import { SetInputs } from '../../../../../../../../../../../lib/types/setters';
import { TextInputType } from '../../../../../../../../../../common/components/semanticize/text-input/text-input';
import {
  TextInput,
  TextInputStyles,
} from '../../../../../../../../../../common/components/support/text-input/text-input';
import styles from '../../../../../../../../common/styles/inputs/text.module.css';

interface AreaProps {
  value: string;
  label: string;
  placeholder: string;
  setInputs: SetInputs;
}

export const AreaInput = (props: AreaProps) => {
  const { setInputs, label, placeholder, value } = props;

  return (
    <TextInput
      value={value}
      label={label}
      placeholder={placeholder}
      inputProp="area"
      setInputs={setInputs}
      styles={styles as unknown as TextInputStyles} // TODO: Search for better solution.
      type={TextInputType.NUMBER}
    >
      <div className={styles.sqm}>
        m<sup>2</sup>
      </div>
    </TextInput>
  );
};
