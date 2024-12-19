// 0 => 'office'
// 1 => 'usable_premises'
// 2 => 'apartment'
// 3 => 'house'
// 4 => 'room'
// 5 => 'parking_space'
// 6 => 'virtual_office'
// 7 => 'coworking_spaces'

import { SetInputs } from '../../../../../../../../../../../lib/types/setters';
import {
  SelectOption,
  SelectOptionValue,
} from '../../../../../../../../../../common/components/semanticize/select/select';
import { GrossRentInput } from './components/gross-rent-input';
import { NetRentInput } from './components/net-rent-input';
import { RentCurrencySelect } from './components/rent-currency-select';

const showNetRentAmount = (category: number) => [0, 1, 6, 7].includes(category);
const showGrossRentAmount = (category: number) =>
  [2, 3, 4, 5].includes(category);

interface RentInputProps {
  category: number;
  netRentValue: string;
  netRentLabel: string;
  netRentPlaceholder: string;
  grossRentValue: string;
  grossRentLabel: string;
  grossRentPlaceholder: string;
  rentCurrencyOptions: SelectOption[];
  rentCurrencyValue: number;
  setInputs: SetInputs;
}

export const Rent = (props: RentInputProps) => {
  const {
    category,
    netRentValue,
    netRentLabel,
    netRentPlaceholder,
    grossRentValue,
    grossRentLabel,
    grossRentPlaceholder,
    rentCurrencyOptions,
    rentCurrencyValue,
    setInputs,
  } = props;

  return (
    <section className="rent">
      {showNetRentAmount(category) && (
        <NetRentInput
          value={netRentValue}
          label={netRentLabel}
          placeholder={netRentPlaceholder}
          setInputs={setInputs}
        />
      )}
      {showGrossRentAmount(category) && (
        <GrossRentInput
          value={grossRentValue}
          label={grossRentLabel}
          placeholder={grossRentPlaceholder}
          setInputs={setInputs}
        />
      )}
      {(showNetRentAmount(category) || showGrossRentAmount(category)) && (
        <RentCurrencySelect
          options={rentCurrencyOptions}
          value={rentCurrencyValue}
          setInputs={setInputs}
        />
      )}
    </section>
  );
};
