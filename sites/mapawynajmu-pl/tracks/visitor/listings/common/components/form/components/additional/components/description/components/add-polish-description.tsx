import { SetInputs } from '../../../../../../../../../../../../../lib/types/setters';
import ManagedCheckbox from '../../../../../../../../../../../../common/components/managed-inputs/checkbox/checkbox';
import styles from '../../../../../../../../../../common/styles/inputs/checkbox.module.css';

interface AddPolishDescriptionProps {
  label: string;
  checked: boolean;
  setInputs: SetInputs;
}

export const AddPolishDescription = (props: AddPolishDescriptionProps) => {
  const { checked, label, setInputs } = props;

  const classNames = {
    container: styles.container,
    input: styles.input,
    tick: styles.tick,
    label: styles.label,
  };

  const onClick = (addPolishDescription: boolean) => {
    setInputs({ showPolishDescription: addPolishDescription });
  };

  return (
    <ManagedCheckbox
      classNames={classNames}
      checked={checked}
      label={label}
      onClick={onClick}
    />
  );
};
