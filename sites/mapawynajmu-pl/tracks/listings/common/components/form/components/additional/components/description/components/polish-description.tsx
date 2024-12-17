import { SetInputs } from '../../../../../../../../../../../../lib/types/setters';
import Textarea from '../../../../../../../../../../../common/components/managed-inputs/textarea/textarea';
import styles from '../../../../../../../../../common/styles/inputs/textarea.module.css';

interface PolishDescriptionProps {
  label: string;
  value: string;
  setInputs: SetInputs;
}

export const PolishDescription = (props: PolishDescriptionProps) => {
  const { label, value, setInputs } = props;

  return (
    <Textarea
      label={label}
      value={value}
      onChange={(polishDescription: string) => {
        setInputs({ polishDescription });
      }}
      classNames={styles}
    />
  );
};
