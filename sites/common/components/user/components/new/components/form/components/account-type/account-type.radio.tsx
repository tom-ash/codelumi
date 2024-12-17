import { ManagedRadio } from '../../../../../../../managed-inputs/radio/radio';
import { AccountType } from '../../../../../../../../../mapawynajmu-pl/tracks/users/common/types/user.types';
import { RadioOption } from '../../../../../../../../types/radio-option';
import styles from '../../../../../../../../../common/styles/radio.module.css';
import { SetInputs } from '../../../../../../../../../../lib/types/setters';

interface AccountTypeRadioProps {
  options: RadioOption[];
  checked: AccountType;
  setInputs: SetInputs;
}

export const AccountTypeRadio = (props: AccountTypeRadioProps) => {
  const { options: radios, checked, setInputs } = props;
  const name = 'account-type';
  const classNames = {
    containerClass: 'account-type radio',
    radioContainerClass: styles.radio,
    // radioInputClass,
    // radioLabelClass,
  };
  const onClick = (value: AccountType) => setInputs({ accountType: value });
  const radioProps = {
    name,
    classNames,
    checked,
    radios,
    onClick,
  };

  return <ManagedRadio {...radioProps} />;
};
