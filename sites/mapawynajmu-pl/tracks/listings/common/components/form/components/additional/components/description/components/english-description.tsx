import { SetInputs } from '../../../../../../../../../../../../lib/types/setters';
import Textarea from '../../../../../../../../../../../common/components/managed-inputs/textarea/textarea';
import styles from '../../../../../../../../../common/styles/inputs/textarea.module.css';

interface EnglishDescriptionProps {
  label: string;
  value: string;
  setInputs: SetInputs;
}

export const EnglishDescription = (props: EnglishDescriptionProps) => {
  const { label, value, setInputs } = props;

  return (
    <Textarea
      label={label}
      value={value}
      onChange={(englishDescription: string) => {
        setInputs({ englishDescription });
      }}
      classNames={styles}
    />
  );
};
