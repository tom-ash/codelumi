import { SetInputs } from '../../../../../../../../../../../lib/types/setters';
import {
  SelectOption,
  SelectOptionValue,
} from '../../../../../../../../../../common/components/semanticize/select/select';
import {
  Select,
  SelectStyles,
} from '../../../../../../../../../../common/components/support/select/select';
import styles from '../../../../../../../../common/styles/inputs/select.module.css';

interface RoomsSelectProps {
  label: string;
  placeholder: string;
  options: SelectOption[];
  value: SelectOptionValue;
  setInputs: SetInputs;
}

export const RoomsSelect = (props: RoomsSelectProps) => {
  const { label, placeholder, options, value, setInputs } = props;

  return (
    <Select
      inputProp="rooms"
      label={label}
      placeholder={placeholder}
      options={options}
      value={value}
      styles={styles as unknown as SelectStyles}
      setInputs={setInputs}
    />
  );
};
