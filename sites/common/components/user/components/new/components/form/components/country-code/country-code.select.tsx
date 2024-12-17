import ManagedSelect from '../../../../../../../../../common/components/managed-inputs/select/select';
import { SetInputs } from '../../../../../../../../../../lib/types/setters';
import { Styles } from '../../../../../../../../../mapawynajmu-pl/types/styles';
import countryCodeStyles from './country-code.module.css';

interface CountryCodeSelectProps {
  value: string;
  options: string[];
  setInputs: SetInputs;
  styles: Styles;
}

export const CountryCodeSelect = (props: CountryCodeSelectProps) => {
  const { value, options: stringOptions, setInputs, styles } = props;

  const options = stringOptions.map((countryCode: string) => ({
    value: countryCode,
    text: countryCode,
  }));
  const classNames = {
    input: `${styles.input} ${countryCodeStyles.input} ${styles.countryCode}`,
    options: styles.options,
  };

  const onSelect = ({ value: countryCode }: { value: string }) =>
    setInputs({ countryCode });

  const emailAddressInputProps = {
    classNames,
    // children,
    options,
    value,
    onSelect,
  };

  return <ManagedSelect {...emailAddressInputProps} />;
};
