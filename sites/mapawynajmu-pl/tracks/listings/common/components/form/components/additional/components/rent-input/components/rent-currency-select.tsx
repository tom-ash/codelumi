import { SetInputs } from '../../../../../../../../../../../../lib/types/setters';
import {
  SelectOption,
  SelectOptionValue,
} from '../../../../../../../../../../../common/components/semanticize/select/select';
import {
  Select,
  SelectStyles,
} from '../../../../../../../../../../../common/components/support/select/select';
import styles from '../../../../../../../../../common/styles/inputs/select.module.css';

interface RentCurrencySelectProps {
  options: SelectOption[];
  value: SelectOptionValue;
  setInputs: SetInputs;
}

export const RentCurrencySelect = (props: RentCurrencySelectProps) => {
  const { options, value, setInputs } = props;

  return (
    <Select
      inputProp="rentCurrency"
      label=""
      placeholder=""
      options={options}
      value={value}
      styles={styles as unknown as SelectStyles}
      setInputs={setInputs}
    />
  );
};
